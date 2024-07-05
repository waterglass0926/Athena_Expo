import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import Constants from '@/constants';

export const ToolCard = ({ name, desc }) => {
  return (
    <View style={styles.container}>
      <Image
        source={Constants.IAMGES.PAPER.OLDPAPER}
        style={styles.imgBG}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.commonText}>{desc}</Text>
    </View>
  );
};

const BORDERWIDTH = hp('100%') / 200;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: wp('100%') / 20,
    width: wp('100%') / 1.2,
    height: hp('100%') / 1.15,
    backgroundColor: Constants.COLORS.PAPER.PRIMARY,
    borderWidth: hp('100%') / 200,
    borderRadius: 10,
    borderColor: Constants.COLORS.PAPER.SECONDARY,
  },
  imgBG: {
    ...StyleSheet.absoluteFillObject,
    height: hp('100%') / 1.15 - BORDERWIDTH * 2,
    width: wp('100%') / 1.2 - BORDERWIDTH * 2,
    borderRadius: 10,
    opacity: 0.5,
  },
  name: {
    fontFamily: Constants.FONTS.PAPER.SHADOWSINTO.LIGHT,
    fontSize: hp('100%') / 20,
  },
  commonText: {
    fontFamily: Constants.FONTS.PAPER.UBUNTU.REGULAR,
    fontSize: 20,
    textAlign: 'center',
  },
});