import { LanguageCode } from 'react-native-translator';

export interface History {
  id: string;
  fromLanguage: LanguageCode<'google'>;
  toLanguage: LanguageCode<'google'>;
  text: string;
}

export type TranslatorType = 'google' | 'papago' | 'kakao';