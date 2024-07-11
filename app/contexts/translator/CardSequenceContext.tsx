import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import '@/utils/i18n';
import Constants, { STOREAGE_CARD_SEQUENCE_ID } from '@/constants';
import Functions from '@/utils';
import { TranslatorType } from '@/types/translator';

export type CardSequenceContextType = {
  cardSequence: TranslatorType[];
  updateCardSequence: (data: TranslatorType[]) => void;
};

export const CardSequenceContext = createContext<CardSequenceContextType>(
  {} as any,
);

export const CardSequenceProvider: React.FC = ({ children }) => {
  const [cardSequence, setCardSequence] = useState<TranslatorType[]>([
    'google',
    'papago',
    'kakao',
  ]);

  useEffect(() => {
    (async () => {
      const data = await AsyncStorage.getItem(STOREAGE_CARD_SEQUENCE_ID);
      if (!data) return;
      if (JSON.parse(data).includes('naver')) {
        await updateCardSequence(cardSequence);
        return;
      };
      setCardSequence(JSON.parse(data));
    })();
  }, []);

  const updateCardSequence = useCallback(async (data: TranslatorType[]) => {
    setCardSequence(data);
    await AsyncStorage.setItem(STOREAGE_CARD_SEQUENCE_ID, JSON.stringify(data));
  }, []);

  const contextValue = useMemo<CardSequenceContextType>(
    () => ({
      cardSequence,
      updateCardSequence,
    }),
    [cardSequence, updateCardSequence],
  );

  return (
    <CardSequenceContext.Provider value={contextValue}>
      {children}
    </CardSequenceContext.Provider>
  );
};