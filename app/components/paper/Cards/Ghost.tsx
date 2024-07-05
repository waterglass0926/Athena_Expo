import React, { useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

import Constants from '@/constants';
import { labelSwitch } from '@/utils/translate';

export const GhostCard = ({ name, desc, strength, weakness, evidence, language }) => {

  let labels = labelSwitch(language);
  let translatedEvidence = [];
  evidence = evidence.split(/, /);
  evidence.forEach((evidence) => {
    switch (evidence) {
      case 'EMF Level 5':
        translatedEvidence.push(labels.emf5);
        break;
      case 'Spirit Box':
        translatedEvidence.push(labels.spiritBox);
        break;
      case 'Fingerprints':
        translatedEvidence.push(labels.fingerprints);
        break;
      case 'Ghost Orb':
        translatedEvidence.push(labels.ghostOrb);
        break;
      case 'Ghost Writing':
        translatedEvidence.push(labels.ghostWriting);
        break;
      case 'Freezing Temperatures':
        translatedEvidence.push(labels.freezingTemp);
        break;
      case 'DOTS Projector':
        translatedEvidence.push(labels.dotsProjector);
        break;
    };
  });

  return (
    <View style={styles.container}>
      <Image
        source={Constants.IAMGES.PAPER.OLDPAPER}
        style={styles.imgBG}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.commonText}>{desc}</Text>
      <Text style={styles.commonText}>
        <Text style={styles.strengthHeader}>
          {labelSwitch(language).uniqueStrengths}
        </Text>
        {strength}
      </Text>
      <Text style={styles.commonText}>
        <Text style={styles.weaknessHeader}>
          {labelSwitch(language).uniqueWeaknesses}
        </Text>
        {weakness}
      </Text>
      <Text style={styles.commonText}>
        <Text style={styles.EvidenceHeader}>
          {labelSwitch(language).evidence}:{' '}
        </Text>
        {translatedEvidence.join(', ')}
      </Text>
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
  strengthHeader: {
    fontWeight: 'bold',
    color: Constants.COLORS.PAPER.TERTIARY,
  },
  weaknessHeader: {
    fontWeight: 'bold',
    color: Constants.COLORS.PAPER.QUATERNARY,
  },
  EvidenceHeader: {
    fontWeight: 'bold',
    color: Constants.COLORS.DEFAULT.BLACK,
  },
});