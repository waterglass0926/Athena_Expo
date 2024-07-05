import { LanguageCode } from 'react-native-translator';

// Paper Section
import en from '@/assets/locales/en.json';
import ru from '@/assets/locales/ru.json';
import es from '@/assets/locales/es.json';
import fr from '@/assets/locales/fr.json';
import it from '@/assets/locales/it.json';

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

// Paper Section
const introCardSwitch = (item, language) => {
  let card = {
    name: item.name,
    desc: item.desc,
  };
  switch (language) {
    case 'ru':
      card.name = item.nameRU;
      card.desc = item.descRU;
      return card;
    case 'es':
      card.name = item.nameES;
      card.desc = item.descES;
      return card;
    case 'fr':
      card.name = item.nameFR;
      card.desc = item.descFR;
      return card;
    case 'it':
      card.name = item.nameIT;
      card.desc = item.descIT;
      return card;
  }
  return card;
};

const ghostCardSwitch = (item, language) => {
  let card = {
    name: item.name,
    desc: item.desc,
    strength: item.strength,
    weakness: item.weakness,
    evidence: item.evidence,
  };
  switch (language) {
    case 'ru':
      card.name = item.nameRU;
      card.desc = item.descRU;
      card.strength = item.strengthRU;
      card.weakness = item.weaknessRU;
      card.evidence = item.evidence;
      return card;
    case 'es':
      card.name = item.nameES;
      card.desc = item.descES;
      card.strength = item.strengthES;
      card.weakness = item.weaknessES;
      card.evidence = item.evidence;
      return card;
    case 'fr':
      card.name = item.nameFR;
      card.desc = item.descFR;
      card.strength = item.strengthFR;
      card.weakness = item.weaknessFR;
      card.evidence = item.evidence;
      return card;
    case 'it':
      card.name = item.nameIT;
      card.desc = item.descIT;
      card.strength = item.strengthIT;
      card.weakness = item.weaknessIT;
      card.evidence = item.evidence;
      return card;
  }
  return card;
};

const toolCardSwitch = (item, language) => {
  let card = {
    name: item.name,
    desc: item.desc,
  };
  switch (language) {
    case 'ru':
      card.name = item.nameRU;
      card.desc = item.descRU;
      return card;
    case 'es':
      card.name = item.nameES;
      card.desc = item.descES;
      return card;
    case 'fr':
      card.name = item.nameFR;
      card.desc = item.descFR;
      return card;
    case 'it':
      card.name = item.nameIT;
      card.desc = item.descIT;
      return card;
  }
  return card;
};

const labelSwitch = (language) => {
  switch (language) {
    case 'ru':
      return ru.PAPER;
    case 'es':
      return es.PAPER;
    case 'fr':
      return fr.PAPER;
    case 'it':
      return it.PAPER;
    default:
      return en.PAPER;
  }
};

const LANGUAGES = [
  { key: 'en', name: 'English' },
  { key: 'ru', name: 'Russian' },
  { key: 'es', name: 'Spanish' },
  { key: 'fr', name: 'French' },
  { key: 'it', name: 'Italian' },
];

export {
  t,
  ttsLanguage,

  // Paper Section
  introCardSwitch,
  ghostCardSwitch,
  toolCardSwitch,
  labelSwitch,
  LANGUAGES,
};