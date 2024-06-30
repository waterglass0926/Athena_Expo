import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Text, TextProps } from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import { ThemeType } from '@/types/athena';

export const TypoGraphy: React.FC<TextProps> = ({ ...props }) => {
  const dispatch = useDispatch();
  // const { i18n, t } = useTranslation();
  const { load, theme } = useSelector((state: StateType) => state.athena);
  return (
    <Text
      {...props}
      // allowFontScaling={false}
      style={[{ color: theme.FORECOLOR }, props.style]}
    />
  )
};