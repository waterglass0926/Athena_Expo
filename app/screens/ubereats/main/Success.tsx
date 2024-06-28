import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';
import tailwind from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';

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

export const Success = () => {
  const navigation = useNavigation();

  return (
    <Components.Screen style={styles.container}>
      <View style={styles.content}>
        <Image source={require('@/assets/images/ubereats/blink.gif')} style={tailwind`w-72 h-72`} />
        <Text style={styles.title}>Congratulations!!!</Text>
        <Text style={styles.text}>Your order have been taken successfully!</Text>
        <View style={styles.buttons}>
          <Components.AppButton onPress={() => navigation.navigate('UberEatsHome')} title='Continue shopping' color={Constants.COLORS.DEFAULT.BLACK} />
        </View>
      </View>
    </Components.Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Constants.COLORS.UBEREATS.white
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 10,
    width: 280,
    textAlign: 'center',
    color: Constants.COLORS.UBEREATS.gray
  },
  buttons: {
    marginTop: 20,
    width: '70%',
  }
});