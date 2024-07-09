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

const spaceGrid = 8;

const spaceHalf = Math.ceil(spaceGrid / 2);
const space1 = spaceGrid;
const space2 = spaceGrid * 2;
const space3 = spaceGrid * 3;
const space4 = spaceGrid * 4;
const space6 = spaceGrid * 6;
const space8 = spaceGrid * 8;
const space11 = spaceGrid * 11;
const space16 = spaceGrid * 16;

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

  SPOTIFY: {
    activeOpacity: 0.7,
    container: {
      backgroundColor: COLORS.SPOTIFY.blackBg,
      flex: 1
    },
    containerAbsolute: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      zIndex: 50
    },

    flexCenter: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    flexRow: {
      flexDirection: 'row'
    },
    flexRowCenterAlign: {
      alignItems: 'center',
      flexDirection: 'row'
    },
    flexRowCenter: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    flexRowSpace: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    flex1: { flex: 1 },
    flex2: { flex: 2 },
    flex3: { flex: 3 },
    flex4: { flex: 4 },
    flex5: { flex: 5 },

    textSpotify10: { fontFamily: FONTS.SPOTIFY.spotifyRegular, fontSize: 10 },
    textSpotify12: { fontFamily: FONTS.SPOTIFY.spotifyRegular, fontSize: 12 },
    textSpotify14: { fontFamily: FONTS.SPOTIFY.spotifyRegular, fontSize: 14 },
    textSpotify16: { fontFamily: FONTS.SPOTIFY.spotifyRegular, fontSize: 16 },
    textSpotify18: { fontFamily: FONTS.SPOTIFY.spotifyRegular, fontSize: 18 },
    textSpotifyBold12: { fontFamily: FONTS.SPOTIFY.spotifyBold, fontSize: 12 },
    textSpotifyBold16: { fontFamily: FONTS.SPOTIFY.spotifyBold, fontSize: 16 },
    textSpotifyBold18: { fontFamily: FONTS.SPOTIFY.spotifyBold, fontSize: 18 },
    textSpotifyBold20: { fontFamily: FONTS.SPOTIFY.spotifyBold, fontSize: 20 },
    textSpotifyBold22: { fontFamily: FONTS.SPOTIFY.spotifyBold, fontSize: 22 },
    textSpotifyBold24: { fontFamily: FONTS.SPOTIFY.spotifyBold, fontSize: 24 },

    spacer1: { height: space1 },
    spacer2: { height: space2 },
    spacer3: { height: space3 },
    spacer4: { height: space4 },
    spacer6: { height: space6 },
    spacer8: { height: space8 },
    spacer11: { height: space11 },
    spacer16: { height: space16 },

    spacer1W: { width: space1 },
    spacer2W: { width: space2 },
    spacer3W: { width: space3 },

    mB1: { marginBottom: space1 },
    mB2: { marginBottom: space2 },
    mB3: { marginBottom: space3 },

    mL1: { marginLeft: space1 },
    mL2: { marginLeft: space2 },
    mL3: { marginLeft: space3 },

    mR1: { marginRight: space1 },
    mR2: { marginRight: space2 },
    mR3: { marginRight: space3 },

    mTHalf: { marginTop: spaceHalf },
    mT1: { marginTop: space1 },
    mT2: { marginTop: space2 },
    mT3: { marginTop: space3 },

    mH1: { marginHorizontal: space1 },
    mH2: { marginHorizontal: space2 },
    mH3: { marginHorizontal: space3 },

    mV1: { marginVertical: space1 },
    mV2: { marginVertical: space2 },
    mV3: { marginVertical: space3 },

    pHalf: { padding: spaceHalf },
    p1: { padding: space1 },
    p2: { padding: space2 },
    p3: { padding: space3 },

    pB1: { paddingBottom: space1 },
    pB2: { paddingBottom: space2 },
    pB3: { paddingBottom: space3 },

    pL1: { paddingLeft: space1 },
    pL2: { paddingLeft: space2 },
    pL3: { paddingLeft: space3 },

    pR1: { paddingRight: space1 },
    pR2: { paddingRight: space2 },
    pR3: { paddingRight: space3 },

    pT1: { paddingTop: space1 },
    pT2: { paddingTop: space2 },
    pT3: { paddingTop: space3 },

    pHHalf: { paddingHorizontal: spaceHalf },
    pH1: { paddingHorizontal: space1 },
    pH2: { paddingHorizontal: space2 },
    pH3: { paddingHorizontal: space3 }
  }
});