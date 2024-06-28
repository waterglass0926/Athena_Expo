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

const ValidationSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, ({ min }) => `Name must be at least ${min} characters`)
    .max(50, ({ max }) => `Name must be less then ${max} characters`)
    .required('Name is Required'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export const SignUp = ({ navigation }) => {

  const onSignUp = ({ name, email, password }) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({ displayName: name })
          .then(() => {
            // User account created & signed in!
          })
          .catch((err) => {
            Alert.alert('Error', err.message);
          });
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error', 'That email address is already in use!');
        };

        if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'That email address is invalid!');
        };

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
          Join to Uber <Text style={styles.brand}>Eats</Text>
        </Text>
        <View style={styles.form}>
          <Forms.AppForm
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={ValidationSchema}
            onSubmit={(values) => onSignUp(values)}
          >
            <Forms.AppFormFeilds
              name='name'
              placeholder='Your name'
            />
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
            <Forms.AppSubmitButton title='Sign Up' />
          </Forms.AppForm>
        </View>

        <Text style={styles.join}>
          Already a member?{' '}
          <Text
            onPress={() => navigation.navigate('UberEatsSignIn')}
            style={{ color: Constants.COLORS.UBEREATS.primary }}
          >
            Sign In
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
    color: Constants.COLORS.UBEREATS.black,
    textAlign: 'center',
  },
  or: {
    marginVertical: 20,
    color: Constants.COLORS.UBEREATS.gray,
    textAlign: 'center',
  },
});