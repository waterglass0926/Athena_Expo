import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import '@/utils/i18n';
import Constants, { STOREAGE_HISTORYS_ID } from '@/constants';
import Functtions from '@/utils';
import { History } from '@/types/translator';

export type HistoryContextType = {
  historys: History[];
  removeHistory: (id: string) => void;
  addHistory: (data: Omit<History, 'id'>) => void;
};

export const HistoryContext = createContext<HistoryContextType>({} as any);

export const HistoryProvider: React.FC = ({ children }) => {
  const [historys, setHistorys] = useState<History[]>([]);

  useEffect(() => {
    (async () => {
      const data = await AsyncStorage.getItem(STOREAGE_HISTORYS_ID);
      if (!data) return;
      setHistorys(JSON.parse(data));
    })();
  }, []);

  useEffect(() => {
    if (!historys) return;
    AsyncStorage.setItem(STOREAGE_HISTORYS_ID, JSON.stringify(historys));
  }, [historys]);

  const removeHistory = useCallback((id: string) => {
    setHistorys(prev => prev.filter(value => value.id !== id));
  }, []);

  const addHistory = useCallback((data: Omit<History, 'id'>) => {
    const history: History = {
      id: Date.now().toString(),
      ...data,
    };
    setHistorys(prev => [history, ...prev.slice(0, 9)]);
  }, []);

  const contextValue = useMemo<HistoryContextType>(
    () => ({
      historys,
      removeHistory,
      addHistory,
    }),
    [historys, removeHistory, addHistory],
  );

  return (
    <HistoryContext.Provider value={contextValue}>
      {children}
    </HistoryContext.Provider>
  );
};