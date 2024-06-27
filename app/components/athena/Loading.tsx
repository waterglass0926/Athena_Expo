import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

import {
  StyleSheet,
  View,
} from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions from '@/utils';
import { ThemeType } from '@/types/athena';

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const Loading: FC = () => {
  const dispatch = useDispatch();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  if (!load) return null;

  return (
    <View style={[styles.viewWrapper, { backgroundColor: theme.BACKCOLOR }]}>
      <UIActivityIndicator size={50} color={theme.PRIMARY} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewWrapper: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('100%'),
    opacity: 0.5,
  },
});