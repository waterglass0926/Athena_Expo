import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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

export const BottomLoginSheet = () => {
  const dispatch = useDispatch();
  const { load, theme } = useSelector((state: StateType) => state.athena);
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      <TouchableOpacity style={[Constants.STYLES.CHATGPT.V2.button, styles.buttonLight]}>
        <Icon type='ionicon' name='logo-apple' size={14} style={styles.iconLight} />
        <Text style={styles.textLight}>Continue with Apple</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[Constants.STYLES.CHATGPT.V2.button, styles.buttonDark]}>
        <Icon type='ionicon' name='logo-google' size={16} style={styles.iconLight} color={Constants.COLORS.DEFAULT.WHITE} />
        <Text style={styles.textDark}>Continue with Google</Text>
      </TouchableOpacity>
      <Link
        href={{
          pathname: '/screens/chatgpt/version2.0/auth/login',
          params: { type: 'register' },
        }}
        style={[Constants.STYLES.CHATGPT.V2.button, styles.buttonDark]}
        asChild>
        <TouchableOpacity>
          <Icon type='ionicon' name='mail' size={20} style={styles.iconLight} color={Constants.COLORS.DEFAULT.WHITE} />
          <Text style={styles.textDark}>Sign up with email</Text>
        </TouchableOpacity>
      </Link>
      <Link
        href={{
          pathname: '/screens/chatgpt/version2.0/auth/login',
          params: { type: 'login' },
        }}
        style={[Constants.STYLES.CHATGPT.V2.button, styles.buttonOnline]}
        asChild>
        <TouchableOpacity>
          <Text style={styles.textDark}>Log in</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 26,
    gap: 14,
  },
  buttonLight: {
    backgroundColor: Constants.COLORS.DEFAULT.WHITE,
  },
  textLight: {
    color: '#000',
    fontSize: 20,
  },
  buttonDark: {
    backgroundColor: Constants.COLORS.CHATGPT.V2.GREY,
  },
  textDark: {
    color: Constants.COLORS.DEFAULT.WHITE,
    fontSize: 20,
  },
  buttonOnline: {
    borderWidth: 3,
    borderColor: Constants.COLORS.CHATGPT.V2.GREY,
  },
  iconLight: {
    paddingRight: 6,
  },
});