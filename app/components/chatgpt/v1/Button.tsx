import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
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

export const Button = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: StateType) => state.athena);

  const filledBgColor = props.color || theme.PRIMARY;
  const outlinedBgColor = Constants.COLORS.DEFAULT.WHITE;
  const bgColor = props.filled ? filledBgColor : outlinedBgColor;
  const textColor = props.filled
    ? Constants.COLORS.DEFAULT.WHITE || props.textColor
    : theme.PRIMARY || props.textColor;

  const isLoading = props.isLoading || false;

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...styles.buttonWrapper,
        backgroundColor: bgColor,
        borderColor: bgColor,
        ...props.style,
      }}
    >
      {isLoading && isLoading == true ? (
        <ActivityIndicator size='small' color={Constants.COLORS.DEFAULT.WHITE} />
      ) : (
        <Text
          style={{
            ...Constants.FONTS.CHATGPT.V1.body2,
            ...{ color: textColor },
          }}
        >
          {props.title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Constants.SIZE.S08,
    paddingVertical: Constants.SIZE.S08,
    borderWidth: Constants.SIZE.S02,
    borderRadius: Constants.SIZE.S08,
  },
});