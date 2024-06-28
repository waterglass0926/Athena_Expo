import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import * as yup from 'yup';
import { Icon } from 'react-native-elements';
import tailwind from 'tailwind-react-native-classnames';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Alert
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/ubereats/others';
import Forms from '@/components/ubereats/forms';
import Constants from '@/constants';
import Functions from '@/utils';
import { auth } from '@/utils/firebase';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export const SignIn = ({ navigation }) => {

  const onSignIn = ({ email, password }) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => {
        if (error.code === 'auth/invalid-password') {
          Alert.alert('Error', 'Invalid password!')
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'That email address is invalid!')
        }
        Alert.alert('ERROR: ', error.message);
      });
  };

  return (
    <Components.Screen style={styles.container}>
      <View style={styles.wrapper}>
        <View style={tailwind`py-4 rounded-2xl`}>
          <Image style={styles.logo} source={require('@/assets/images/ubereats/logo.png')} />
        </View>
        <Text style={styles.wellcomeTo}>
          Login to Uber <Text style={styles.brand}>Eats</Text>
        </Text>
        <View style={styles.form}>
          <Forms.AppForm
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => onSignIn(values)}
          >
            <Forms.AppFormFeilds
              name='email'
              placeholder='Your email'
              keyboardType='email-address'
            />
            <Forms.AppFormFeilds
              name='password'
              placeholder='Password'
              autoCompleteType='off'
              password={true}
            />
            <Forms.AppSubmitButton title='Login' />
          </Forms.AppForm>
        </View>

        <Text style={styles.join}>
          Not a member?{' '}
          <Text
            onPress={() => navigation.navigate('UberEatsSignUp')}
            style={{ color: Constants.COLORS.UBEREATS.primary }}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </Components.Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: Constants.COLORS.UBEREATS.white,
  },
  wrapper: {
    paddingHorizontal: 20,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 30,
    height: 160,
    resizeMode: 'contain',
  },
  wellcomeTo: {
    marginTop: 20,
    fontSize: 23,
    fontWeight: '700',
    color: Constants.COLORS.UBEREATS.secondary,
    textAlign: 'center',
  },
  brand: {
    fontSize: 23,
    fontWeight: '500',
    color: Constants.COLORS.UBEREATS.primary,
    textAlign: 'center',
  },
  form: {
    marginTop: 10,
  },
  join: {
    marginTop: 16,
    textAlign: 'center',
    color: Constants.COLORS.UBEREATS.black,
  },
  or: {
    marginVertical: 20,
    textAlign: 'center',
    color: Constants.COLORS.UBEREATS.gray,
  },
});