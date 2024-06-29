import { LanguageCode } from 'react-native-translator';

export const t = (language: LanguageCode<'google'>) => {
  switch (language) {
    case 'en':
      return 'English';
    case 'ja':
      return 'Japanese';
    case 'zh-CN':
      return 'Chinese(CN)';
    case 'zh-TW':
      return 'Chinese(TW)';
    case 'vi':
      return 'Vietnum';
    case 'de':
      return 'Germany';
    case 'es':
      return 'Spanish';
    case 'fr':
      return 'French';
    case 'it':
      return 'Italian';
    case 'ru':
      return 'russian';
    case 'th':
      return 'Thaiwan';
    case 'id':
      return 'Indonesian';
    case 'ko':
      return 'Korean';
    default:
      return 'English';
  }
};

export const ttsLanguage = (language: LanguageCode<'google'>) => {
  switch (language) {
    case 'en':
      return 'en-IE';
    case 'ja':
      return 'ja-JP';
    case 'zh-CN':
      return 'zh-CN';
    case 'zh-TW':
      return 'zh-TW';
    case 'vi':
      return 'vi-VI';
    case 'de':
      return 'de-DE';
    case 'es':
      return 'es-ES';
    case 'fr':
      return 'fr-FR';
    case 'it':
      return 'it-IT';
    case 'ru':
      return 'ru-RU';
    case 'th':
      return 'th-TH';
    case 'id':
      return 'id-ID';
    case 'ko':
      return 'ko-KR';
    default:
      return 'en-IE';
  }
};

export default {
  t,
  ttsLanguage,
};