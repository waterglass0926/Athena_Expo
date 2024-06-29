import { Platform, Dimensions } from 'react-native';
import { LanguageCode } from 'react-native-translator';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

export const STOREAGE_HISTORYS_ID = '@HISTORYS';
export const STOREAGE_CARD_SEQUENCE_ID = '@CARD_SEQUENCE';

// From google language code
// https://github.com/KoreanThinker/react-native-translator#support-languages
export const LANGUAGES_CODES: LanguageCode<'google'>[] = [
  'ko',
  'en',
  'ja',
  'zh-CN',
  'zh-TW',
  'vi',
  'de',
  'es',
  'fr',
  'it',
  'ru',
  'th',
  'id',
];
export const PLAYSTORE_URL = 'https://play.google.com/store/apps/details?id=com.koreanthinker.translators';
export const RATE_UNIT = 30;

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('screen').height;
export const STATUSBAR_HEIGHT = getStatusBarHeight();

import STYLES, { SIZE } from './styles';
import COLORS from './colors';
import IAMGES from './images';
import ICONS from './icons';
import SVGS from './svgs';
import FONTS from './fonts';
import URLS from './urls';
import DATA from './data';

export default {
  STYLES,
  COLORS,
  IAMGES,
  ICONS,
  SVGS,
  FONTS,
  URLS,
  SIZE,
  DATA,
};