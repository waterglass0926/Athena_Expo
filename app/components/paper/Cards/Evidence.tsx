import React, { useState, useEffect } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import { Picker } from '../Picker';
import { Button } from '../Button';
import Constants from '@/constants';
import { labelSwitch } from '@/utils/translate';

export const EvidenceCard = ({ name, desc, language }) => {
  //Evidence state
  const [e1, setE1] = useState(0);
  const [e2, setE2] = useState(0);
  const [e3, setE3] = useState(0);
  const [ghost, setGhost] = useState(0);

  const labels = labelSwitch(language);

  //Whenever any evidence is updated, reset ghost
  useEffect(() => {
    setGhost(0);
  }, [e1, e2, e3]);

  return (
    <View style={styles.container}>
      <Image
        source={Constants.IAMGES.PAPER.OLDPAPER}
        style={styles.imgBG}
      />

      <Text style={styles.commonText}>{labels.evidence} #1</Text>
      <Picker
        type='evidence'
        evidence={e1}
        setEvidence={setE1}
        setGhost={setGhost}
        language={language}
      />
      <Text style={styles.commonText}>{labels.evidence} #2</Text>
      <Picker
        type='evidence'
        evidence={e2}
        setEvidence={setE2}
        setGhost={setGhost}
        language={language}
      />
      <Text style={styles.commonText}>{labels.evidence} #3</Text>
      <Picker
        type='evidence'
        evidence={e3}
        setEvidence={setE3}
        setGhost={setGhost}
        language={language}
      />
      <Text style={styles.commonText}>{labels.evidenceAbove}</Text>
      <Picker
        type='ghost'
        evidenceArr={[e1, e2, e3]}
        evidence={ghost}
        setEvidence={setGhost}
        language={language}
      />
      <Button
        text={labels.reset}
        onPress={() => {
          setE1(0);
          setE2(0);
          setE3(0);
          setGhost(0);
        }}
      />
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
    borderRadius: 10,
    borderWidth: hp('100%') / 200,
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
    fontSize: 20,

    textAlign: 'center',
    fontFamily: 'Ubuntu',
  },
});