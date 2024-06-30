import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {
  StyleSheet,
  View,
  Text,
  TextInput,
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

export const Input = (props) => {
  const dispatch = useDispatch();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  return (
    <View style={styles.viewWrapper}>
      <View
        style={[styles.viewInput, {
          backgroundColor: theme.BACKCOLOR,
          borderColor: theme.FORECOLOR
        }]}
      >
        <TextInput
          {...props}
          value={props.value}
          onChangeText={props.onChangeText}
          style={{
            ...styles.textInput,
            color: theme.FORECOLOR
          }}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
        />
      </View>
      {props.errorText && (
        <View style={styles.viewError}>
          <Text style={styles.textError}>{props.errorText[0]}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  viewWrapper: {
    width: '100%',
  },
  viewInput: {
    flexDirection: 'row',
    marginVertical: Constants.SIZE.S04,
    width: '100%',
    paddingHorizontal: Constants.SIZE.S08,
    paddingVertical: Constants.SIZE.S12,
    borderWidth: Constants.SIZE.S01,
    borderRadius: Constants.SIZE.S12,
  },
  textInput: {
    flex: 1,
    paddingTop: 0,
    fontFamily: Constants.FONTS.CHATGPT.POPPINS.REGULAR,
  },
  errorContainer: {
    marginVertical: Constants.SIZE.S04,
  },
  errorText: {
    fontSize: Constants.SIZE.S12,
    color: Constants.COLORS.DEFAULT.RED,
  },
});