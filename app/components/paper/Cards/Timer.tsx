import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import CountDown from 'react-native-countdown-component';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Button } from './/Button';
import Constants from '@/constants';
import { labelSwitch } from '@/utils/translate';

export const TimerCard = ({ language }) => {

  const [timeRemaining, setTimeRemaining] = useState(5 * 60);
  const [timerId, setTimerId] = useState('timer');
  const [isPaused, setIsPaused] = useState(true);
  const labels = labelSwitch(language);

  return (
    <View style={styles.container}>
      <Image
        source={Constants.IAMGES.PAPER.OLDPAPER}
        style={styles.imgBG}
      />
      <Text style={styles.name}>{labels.timer}</Text>

      <CountDown
        id={timerId}
        until={timeRemaining}
        size={hp('100%') / 20}
        timeToShow={['M', 'S']}
        timeLabels={{ m: null, s: null }}
        digitStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)', margin: 0 }}
        digitTxtStyle={styles.timerText}
        separatorStyle={styles.timerText}
        showSeparator
        onPress={() => {
          setTimeRemaining(timeRemaining == 5 * 60 ? 2 * 60 : 5 * 60);
          setTimerId(timerId == 'timer1' ? 'timer2' : 'timer1');
        }}
        onFinish={() => {
          alert(labels.timerFinished);
        }}
        running={!isPaused}
      />
      <Text
        style={{
          ...styles.commonText,
          fontStyle: 'italic',
          fontSize: hp('100%') / 50,
        }}>
        {labels.resetTimer}
      </Text>
      <TouchableOpacity
        onPress={() => {
          setIsPaused(!isPaused);
        }}
        style={styles.buttonWrapper}>
        <Text style={{ ...styles.commonText, fontWeight: 'bold' }}>
          {isPaused ? labels.start : labels.pause}
        </Text>
      </TouchableOpacity>
      <Text style={styles.commonText}>
        {labels.investigationDifficultyToTime}
      </Text>
      <View>
        <Text style={styles.commonText}>{labels.amateur} - 5:00</Text>
        <Text style={styles.commonText}>{labels.intermediate} - 2:00</Text>
        <Text style={styles.commonText}>{labels.professional} - 0:00</Text>
      </View>
      <Text style={{ ...styles.commonText, fontWeight: 'bold' }}>
        {labels.resetTimerWhenYouLeave}
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
  timerText: {
    fontFamily: Constants.FONTS.PAPER.SHADOWSINTO.LIGHT,
    fontWeight: 'normal',
    color: Constants.COLORS.DEFAULT.BLACK,
  },
  buttonWrapper: {
    minWidth: hp('100%') / 10,
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
  },
});