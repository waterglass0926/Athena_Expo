import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

// import Clipboard from '@react-native-community/clipboard';
import InAppReview from 'react-native-in-app-review';
import { LanguageCode } from 'react-native-translator';
import Tts from 'react-native-tts';

import { ScrollView } from 'react-native';

import '@/utils/i18n';
import { HistoryContext } from './HistoryContext';
import Constants, { STOREAGE_HISTORYS_ID } from '@/constants';
import Functtions from '@/utils';
import { ttsLanguage } from '@/utils/translate';
import { History } from '@/types/translator';

export interface TranslatedData {
  google: string | null | Error;
  kakao: string | null | Error;
  papago: string | null | Error;
}

export type TranslateContextType = {
  scrollViewRef: React.RefObject<ScrollView>;
  text: string;
  onChangeText: (text: string) => void;
  fromLanguage: LanguageCode<'google'>;
  toLanguage: LanguageCode<'google'>;
  clear: () => void;
  reverseLanguage: () => void;
  updateFromLanguage: (language: LanguageCode<'google'>) => void;
  updateToLanguage: (language: LanguageCode<'google'>) => void;
  reverseTranslate: (text: string) => void;
  applyClipboard: () => void;
  applyHistory: (history: History) => void;
};

export const TranslateContext = createContext<TranslateContextType>({} as any);

export const TranslateProvider: React.FC = ({ children }) => {
  const { addHistory } = useContext(HistoryContext);
  const scrollViewRef = useRef<ScrollView>(null);
  const [text, setText] = useState('');
  const [fromLanguage, setFromLanguage] =
    useState<LanguageCode<'google'>>('ko');
  const [toLanguage, setToLanguage] = useState<LanguageCode<'google'>>('en');
  const [addHistoryTimer, setAddHistoryTimer] = useState<NodeJS.Timeout>();

  const clear = useCallback(() => {
    setText('');
  }, []);

  const reverseLanguage = useCallback(() => {
    setFromLanguage(toLanguage);
    setToLanguage(fromLanguage);
  }, [toLanguage, fromLanguage]);

  const reverseTranslate = useCallback(
    (_text: string) => {
      setText(_text);
      reverseLanguage();
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    },
    [reverseLanguage, scrollViewRef],
  );

  const updateFromLanguage = useCallback(
    (language: LanguageCode<'google'>) => {
      if (toLanguage === language) setToLanguage(fromLanguage);
      setFromLanguage(language);
    },
    [toLanguage, fromLanguage],
  );

  const updateToLanguage = useCallback(
    (language: LanguageCode<'google'>) => {
      if (fromLanguage === language) setFromLanguage(toLanguage);
      setToLanguage(language);
      if (Math.random() < 0.05) InAppReview.RequestInAppReview();
    },
    [toLanguage, fromLanguage],
  );

  const applyHistory = useCallback((history: History) => {
    setToLanguage(history.toLanguage);
    setFromLanguage(history.fromLanguage);
    setText(history.text);
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  }, []);

  const applyClipboard = useCallback(async () => {
    // const content = await Clipboard.getString();
    setText(content);
  }, []);

  useEffect(() => {
    try {
      Tts.setDefaultLanguage(ttsLanguage(toLanguage));
    } catch (error) {
      Tts.setDefaultLanguage('en-IE');
    }
  }, [toLanguage]);

  useEffect(() => {
    if (addHistoryTimer) clearTimeout(addHistoryTimer);
    if (!text) return;
    const newTimer = setTimeout(
      () => addHistory({ fromLanguage, toLanguage, text }),
      3000,
    );
    setAddHistoryTimer(newTimer);
  }, [text, fromLanguage, toLanguage]);

  const contextValue = useMemo<TranslateContextType>(
    () => ({
      scrollViewRef,
      text,
      onChangeText: t => setText(t),
      clear,
      fromLanguage,
      toLanguage,
      reverseLanguage,
      reverseTranslate,
      updateFromLanguage,
      updateToLanguage,
      applyHistory,
      applyClipboard,
    }),
    [
      scrollViewRef,
      text,
      setText,
      clear,
      fromLanguage,
      toLanguage,
      reverseLanguage,
      reverseTranslate,
      updateFromLanguage,
      updateToLanguage,
      applyHistory,
      applyClipboard,
    ],
  );

  return (
    <TranslateContext.Provider value={contextValue}>
      {children}
    </TranslateContext.Provider>
  );
};