import 'intl';
import 'intl-pluralrules';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ar from '@/assets/locales/ar.json';
import cn from '@/assets/locales/cn.json';
import de from '@/assets/locales/de.json';
import en from '@/assets/locales/en.json';
import es from '@/assets/locales/es.json';
import fr from '@/assets/locales/fr.json';
import it from '@/assets/locales/it.json';
import ja from '@/assets/locales/ja.json';
import ru from '@/assets/locales/ru.json';

const resources = {
  ar: { translation: ar },
  cn: { translation: cn },
  de: { translation: de },
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  it: { translation: it },
  ja: { translation: ja },
  ru: { translation: ru },
};

export default i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en', // use 'en' if detected lng is not available

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    react: {
      useSuspense: false, // setting to true will show an error if translations are not loaded
    },
  });