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
import Components from '@/components/world';
import Constants from '@/constants';
import Functions from '@/utils';
import { signUp } from '@/stores/world/auth';

export const SignUp = (props) => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const { theme } = useSelector(state => state.athena);

  const [firstname, setFirstname] = useState('');
  const [errorFirstname, setErrorFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errorConfirm, setErrorConfirm] = useState('');
  const [passwordEye, setPasswordEye] = useState(true);
  const [confirmEye, setConfirmEye] = useState(true);

  const onFirstname = (value) => {
    setFirstname(value);
    setErrorFirstname('');
  };

  const onLastname = (value) => {
    setLastname(value);
  };

  const onEmail = (value) => {
    setEmail(value);
    setErrorEmail('');
  };

  const onPassword = (value) => {
    setPassword(value);
    setErrorPassword('');
  };

  const onConfirm = (value) => {
    setConfirm(value);
    setErrorConfirm('');
  };

  const onSignUp = () => {
    let statusFirstname;
    let statusEmail;
    let statusPassword;
    let statusConfirm;

    if (Functions.isEmpty(firstname)) {
      statusFirstname = false;
      setErrorFirstname('Required field');
    } else if (firstname?.length < 2) {
      statusFirstname = false;
      setErrorFirstname('Enter more 2 characters');
    } else {
      statusFirstname = true;
      setErrorFirstname('');
    }

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
    } else if (password?.length < 8) {
      statusPassword = false;
      setErrorPassword('Enter more 8 characters');
    } else {
      statusPassword = true;
      setErrorPassword('');
    }

    if (Functions.isEmpty(confirm)) {
      statusConfirm = false;
      setErrorConfirm('Required field');
    } else if (password !== confirm) {
      statusConfirm = false;
      setErrorConfirm('Not matched');
    } else {
      statusConfirm = true;
      setErrorConfirm('');
    }

    if (statusFirstname && statusEmail && statusPassword && statusConfirm) {
      dispatch(signUp({
        type: 'World',
        firstname,
        lastname,
        email,
        password,
      }));
    };
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.BACKCOLOR }]}>
      <StatusBar hidden />
      <Components.Header
        left
        right
        title='SIGN UP'
        onTitle={() => props.navigation.popToTop()}
      />
      <ScrollView contentContainerStyle={styles.content}>
        <Components.Input
          label='First Name *'
          error={errorFirstname}
          marginTop={25}
          leftIconType='material-community'
          leftIconName='account'
          value={firstname}
          onChangeText={(value) => onFirstname(value)}
        />
        <Components.Input
          label='Last Name'
          leftIconType='material-community'
          leftIconName='account'
          value={lastname}
          onChangeText={(value) => onLastname(value)}
        />
        <Components.Input
          label='Email *'
          error={errorEmail}
          leftIconType='material-community'
          leftIconName='email'
          autoCapitalize='none'
          keyboardType='email-address'
          value={email}
          onChangeText={(value) => onEmail(value)}
        />
        <Components.Input
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
        <Components.Input
          label='Confirm *'
          error={errorConfirm}
          leftIconType='material'
          leftIconName='confirmation-num'
          rightIconType='material-community'
          rightIconName={confirmEye ? 'eye' : 'eye-off'}
          secureTextEntry={confirmEye}
          // keyboardType='visible-password'
          value={confirm}
          onChangeText={(value) => onConfirm(value)}
          onRight={() => setConfirmEye(!confirmEye)}
        />

        <Components.Button
          title={t('SIGN UP')}
          marginTop={15}
          height={35}
          fontSize={15}
          foreColor={Constants.COLORS.DEFAULT.WHITE}
          borderRadius={5}
          onPress={() => onSignUp()}
        />
        <View style={styles.viewBottom}>
          <Text style={{ fontSize: 15, fontWeight: '500', color: theme.FORECOLOR }}>Already have a account? </Text>
          <TouchableOpacity onPress={() => props.navigation.replace('WorldSignIn')}>
            <Text style={{ fontSize: 15, fontWeight: '700', color: theme.PRIMARY }}>Sign in</Text>
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