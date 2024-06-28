import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';
import tailwind from 'tailwind-react-native-classnames';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/ubereats/others';
import Constants from '@/constants';
import Functions from '@/utils';

export const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image style={styles.logo} source={require('@/assets/images/ubereats/logo.png')} />
        <View style={styles.content}>
          <Text style={styles.title}>Uber Eats: Food Delivery</Text>
          <Text style={styles.subTitle}>Get food delivery to your doorstep from thousands of amazing local and national restaurants.</Text>
          <Components.AppButton title="Let's go" onPress={() => navigation.navigate('UberEatsAuthStack', { screen: 'UberEatsSignUp' })} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    position: 'absolute',
    alignSelf: 'center',
    top: 160,
    height: 200,
    resizeMode: 'contain',
    zIndex: 99999,
  },
  image: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-end',
    width: '100%',
    resizeMode: 'cover',
    backgroundColor: Constants.COLORS.UBEREATS.dark
  },
  content: {
    paddingHorizontal: 25,
    paddingBottom: 25,
    paddingTop: 35,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Constants.COLORS.UBEREATS.white,
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  subTitle: {
    marginBottom: 10,
    fontSize: 16,
    color: Constants.COLORS.UBEREATS.gray,
  },
  input: {
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Constants.COLORS.UBEREATS.medium,
    backgroundColor: Constants.COLORS.UBEREATS.light,
  },
});