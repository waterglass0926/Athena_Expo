import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import FONTS from './fonts';

export const SIZE = {
  S01: 1,
  S02: 2,
  S04: 4,
  S08: 8,
  S10: 10,
  S12: 12,
  S14: 14,
  S16: 16,
  S18: 18,
  S20: 20,
  S24: 24,
  S28: 28,
  S32: 32,
  S36: 36,
  S40: 40,
  S48: 48,
  S64: 64,
};

export default STYLES = StyleSheet.create({
  CONTAINER: {
    flex: 1,
  },
  CONTENT: {
    width: wp('100%'),
    padding: SIZE.S12,
  },

  ALIGN_COL_CENTER: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ALIGN_ROW_CENTER: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ALIGN_COL_SPACE_BETWEEN: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ALIGN_ROW_SPACE_BETWEEN: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ALIGN_COL_FLEX_START: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ALIGN_ROW_FLEX_START: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  ALIGN_COL_FLEX_END: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  ALIGN_ROW_FLEX_END: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  ALIGN_ROW_SPACE_AROUND: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  TEXT_HEADER: {
    fontFamily: FONTS.ATHENA.PRIMARY,
    fontSize: SIZE.S24,
    fontWeight: 'bold'
  },
  TEXT_TITLE: {
    fontFamily: FONTS.ATHENA.PRIMARY,
    fontSize: SIZE.S18,
    fontWeight: '800'
  },
  TEXT_SUBTITLE: {
    fontFamily: FONTS.ATHENA.PRIMARY,
    fontSize: SIZE.S14,
    fontWeight: '600'
  },
  TEXT_DESCRIPTION: {
    fontFamily: FONTS.ATHENA.PRIMARY,
    fontSize: SIZE.S10,
    fontWeight: '400'
  },
});