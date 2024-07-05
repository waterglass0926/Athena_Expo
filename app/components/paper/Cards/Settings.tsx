import React, { useState, useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import { Picker } from '../Picker';
import Constants from '@/constants';
import { storeData, getData, LANGUAGE_KEY } from '@/utils/storage';
import { labelSwitch, LANGUAGES } from '@/utils/translate';

export const SettingsCard = ({
  language,
  setLanguage,
  languageIndex,
  setLanguageIndex,
}) => {
  const labels = labelSwitch(language);

  return (
    <View style={styles.container}>
      <Image
        source={Constants.IAMGES.PAPER.OLDPAPER}
        style={styles.imgBG}
      />
      <Text style={styles.name}>{labels.settings}</Text>
      <View>
        <Text style={styles.commonText}>Language</Text>
        <Picker
          type='language'
          evidence={languageIndex}
          setEvidence={setLanguageIndex}
          setLanguage={setLanguage}
        />
      </View>
      <Text style={styles.commonText}>{labels.review}</Text>
      <Text style={styles.smallText}>
        Translation Credit: Mikołaj Zyzański, StrongPlog, Narva, Delmas-Mons
        Bastien, Shade and Pelly
      </Text>
    </View>
  );
};

const BORDERWIDTH = hp('100%') / 200;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: wp('100%') / 20,
    width: wp('100%') / 1.2,
    height: hp('100%') / 1.15,
    borderWidth: hp('100%') / 200,
    borderRadius: 10,
    borderColor: Constants.COLORS.PAPER.SECONDARY,
    backgroundColor: Constants.COLORS.PAPER.PRIMARY,
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
  smallText: {
    alignSelf: 'flex-end',
    fontFamily: Constants.FONTS.PAPER.UBUNTU.REGULAR,
    fontSize: hp('100%') / 60,
    textAlign: 'center',
  },
});