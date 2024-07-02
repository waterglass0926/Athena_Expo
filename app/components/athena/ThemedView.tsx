import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { View, type ViewProps } from 'react-native';

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

export function ThemedView({ style, ...otherProps }) {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: StateType) => state.athena);

  return <View style={[{ backgroundColor: theme.BACKCOLOR }, style]} {...otherProps} />;
};
