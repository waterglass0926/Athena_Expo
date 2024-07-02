import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
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

export const Page = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: StateType) => state.athena);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      {props.children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Constants.SIZE.S08,
    paddingVertical: Constants.SIZE.S08,
    borderColor: Constants.COLORS.DEFAULT.BLACK,
    borderWidth: Constants.SIZE.S02,
    borderRadius: Constants.SIZE.S08,
  },
});