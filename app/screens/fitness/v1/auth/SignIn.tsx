import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  StyleSheet,
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import '@/utils/i18n';
import Athena from '@/components/athena';
import Components from '@/components/fitness/v1';
import Constants from '@/constants';
import Functions from '@/utils';
import { signIn } from '@/stores/athena/auth';

export const SignIn = (props) => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const { theme } = useSelector(state => state.athena);

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [passwordEye, setPasswordEye] = useState(true);

  const onEmail = (value) => {
    setEmail(value);
    setErrorEmail('');
  };

  const onPassword = (value) => {
    setPassword(value);
    setErrorPassword('');
  };

  const onSignIn = () => {
    let statusEmail;
    let statusPassword;

    if (Functions.isEmpty(email)) {
      statusEmail = false;
      setErrorEmail('Required field');
    } else if (!Functions.isEmail(email)) {
      statusEmail = false;
      setErrorEmail('Invalid Email');
    } else {
      statusEmail = true;
      setErrorEmail('');
    }

    if (Functions.isEmpty(password)) {
      statusPassword = false;
      setErrorPassword('Required field');
    } else if (password?.length < 6) {
      statusPassword = false;
      setErrorPassword('Enter more 6 characters');
    } else {
      statusPassword = true;
      setErrorPassword('');
    }

    if (statusEmail && statusPassword) {
      dispatch(signIn({
        type: 'Fitness',
        email,
        password,
      })).then(() => {
        props.navigation.navigate('FitnessV1BottomTab');
      });
    };
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.BACKCOLOR }]}>
      <StatusBar hidden />
      <Athena.Header
        left
        right
        title='SIGN IN'
        onTitle={() => props.navigation.popToTop()}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <Athena.Input
          label='Email *'
          error={errorEmail}
          marginTop={25}
          leftIconType='material-community'
          leftIconName='email'
          autoCapitalize='none'
          keyboardType='email-address'
          value={email}
          onChangeText={(value) => onEmail(value)}
        />
        <Athena.Input
          label='Password *'
          error={errorPassword}
          leftIconType='material'
          leftIconName='password'
          rightIconType='material-community'
          rightIconName={passwordEye ? 'eye' : 'eye-off'}
          secureTextEntry={passwordEye}
          value={password}
          onChangeText={(value) => onPassword(value)}
          onRight={() => setPasswordEye(!passwordEye)}
        />

        <Athena.Button
          title={t('SIGN IN')}
          marginTop={15}
          height={35}
          fontSize={15}
          borderRadius={5}
          foreColor={Constants.COLORS.DEFAULT.WHITE}
          onPress={() => onSignIn()}
        />

        <View style={styles.viewBottom}>
          <Text style={{ fontSize: 15, fontWeight: '500', color: theme.FORECOLOR }}>Don't have account? </Text>
          <TouchableOpacity onPress={() => props.navigation.replace('FitnessV1SignUp')}>
            <Text style={{ fontSize: 15, fontWeight: '700', color: theme.PRIMARY }}>Create a new account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.viewBottom}>
          <TouchableOpacity disabled onPress={() => props.navigation.navigate('FitnessV1Forgot')}>
            <Text style={{ fontSize: 15, fontWeight: '700', color: theme.PRIMARY }}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
    padding: 15,
  },
  viewBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    width: '100%',
  },
});