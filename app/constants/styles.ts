import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import FONTS from './fonts';
import COLORS from './colors';

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
    fontWeight: 'bold',
  },
  TEXT_TITLE: {
    fontFamily: FONTS.ATHENA.PRIMARY,
    fontSize: SIZE.S18,
    fontWeight: '800',
  },
  TEXT_SUBTITLE: {
    fontFamily: FONTS.ATHENA.PRIMARY,
    fontSize: SIZE.S14,
    fontWeight: '600',
  },
  TEXT_DESCRIPTION: {
    fontFamily: FONTS.ATHENA.PRIMARY,
    fontSize: SIZE.S10,
    fontWeight: '400',
  },

  CHATGPT: {
    V1: {
      largeTitle: {
        fontFamily: COLORS.DEFAULT.BLACK,
        fontSize: SIZE.S48,
        lineHeight: SIZE.S64,
      },
      h1: { fontFamily: FONTS.CHATGPT.POPPINS.BOLD, fontSize: SIZE.S32, lineHeight: SIZE.S36 },
      h2: { fontFamily: FONTS.CHATGPT.POPPINS.BOLD, fontSize: SIZE.S24, lineHeight: SIZE.S32 },
      h3: { fontFamily: FONTS.CHATGPT.POPPINS.BOLD, fontSize: SIZE.S20, lineHeight: SIZE.S24 },
      h4: { fontFamily: FONTS.CHATGPT.POPPINS.BOLD, fontSize: SIZE.S18, lineHeight: SIZE.S20 },
      body1: { fontFamily: FONTS.CHATGPT.POPPINS.REGULAR, fontSize: SIZE.S32, lineHeight: SIZE.S36 },
      body2: { fontFamily: FONTS.CHATGPT.POPPINS.REGULAR, fontSize: SIZE.S20, lineHeight: SIZE.S32 },
      body3: { fontFamily: FONTS.CHATGPT.POPPINS.REGULAR, fontSize: SIZE.S16, lineHeight: SIZE.S24 },
      body4: { fontFamily: FONTS.CHATGPT.POPPINS.REGULAR, fontSize: SIZE.S14, lineHeight: SIZE.S20 },
    },
  },

  TRANSLATOR: {
    SHADOW: {
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
  },

  DISNEY: {
    V1: {
      container: {
        backgroundColor: COLORS.DISNEY.V1.background,
        flex: 1
      },
      flex1: {
        flex: 1
      },
      posAbsolute: {
        position: 'absolute'
      },
      navHeaderStyle: {
        backgroundColor: COLORS.DISNEY.V1.black,
        borderBottomWidth: 0,
        elevation: 0
      },
      heading: {
        color: COLORS.DISNEY.V1.heading,
        fontFamily: FONTS.ATHENA.PRIMARY,
        fontSize: 16,
        marginBottom: 4,
        marginTop: 16,
        paddingLeft: 16
      },
      spacer24: {
        height: 24,
        width: '100%'
      },
      spacer96: {
        height: 96,
        width: '100%'
      },
      mB8: {
        marginBottom: 8
      },
      mR8: {
        marginRight: 8
      },
      mR16: {
        marginRight: 16
      },
      mV16: {
        marginVertical: 16
      },
      mV24: {
        marginVertical: 24
      },
      mV32: {
        marginVertical: 32
      },
      p4: {
        padding: 4
      },
      p8: {
        padding: 8
      },
      p16: {
        padding: 16
      },
      pH4: {
        paddingHorizontal: 4
      },
      pH8: {
        paddingHorizontal: 8
      },
      pH16: {
        paddingHorizontal: 16
      },
    }
  },
  MOVIES: {
    V2: {
      text: { color: COLORS.MOVIES.V2.text },
      background: { backgroundColor: COLORS.MOVIES.V2.background }
    }
  }
});