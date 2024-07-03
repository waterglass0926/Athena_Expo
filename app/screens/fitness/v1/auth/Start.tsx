import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { LinearGradient } from 'expo-linear-gradient';
import { auth } from '@/utils/firebase';

import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  Image,
} from 'react-native';

import '@/utils/i18n';
import Athena from '@/components/athena';
import Components from '@/components/fitness/v1';
import Constants from '@/constants';
import Functions, { Tokens } from '@/utils';

export const Start = (props) => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const { theme } = useSelector(state => state.athena);
  const { user } = useSelector(state => state.athenaAuth);

  useEffect(() => {
    const onRoute = async () => {
      let token = await auth.currentUser.getIdToken();
      console.log(token);
      if (token) {
        Tokens.userToken = token;
        props.navigation.navigate('FitnessV1BottomTab');
      };
    };

    // onRoute();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.BACKCOLOR }]}>
      <StatusBar />
      <Image source={Constants.IAMGES.WORLD.LOGO} style={styles.imageLogo} />
      <Text style={[styles.textTitle, { color: theme.PRIMARY }]}>{t('Athena')}</Text>
      <Text style={[styles.textWelcome, { color: theme.FORECOLOR }]}>{t('Welcome to Athena')}</Text>
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
        colors={[theme.SECONDARY, theme.PRIMARY]}
        style={styles.shapeCircle1}
      />
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
        colors={[theme.SECONDARY, theme.PRIMARY]}
        style={styles.shapeCircle2}
      />
      <Athena.Button
        title={t('SIGN UP')}
        bottom={100}
        height={35}
        fontSize={15}
        foreColor={Constants.COLORS.DEFAULT.WHITE}
        borderRadius={5}
        onPress={() => props.navigation.replace('FitnessV1AuthStack', { screen: 'FitnessV1SignUp' })}
      />
      <Athena.Button
        title={t('SIGN IN')}
        outline
        bottom={50}
        height={35}
        fontSize={15}
        foreColor={Constants.COLORS.DEFAULT.WHITE}
        borderRadius={5}
        onPress={() => props.navigation.replace('FitnessV1AuthStack', { screen: 'FitnessV1SignIn' })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageLogo: {
    marginTop: -200,
    width: 200,
    height: 200,
  },
  textTitle: {
    marginTop: -30,
    fontSize: 40,
    fontWeight: '700',
  },
  textWelcome: {
    marginTop: 20,
    fontSize: 25,
    fontWeight: '500',
  },
  shapeCircle1: {
    position: 'absolute',
    bottom: -wp('110%'),
    right: -wp('120%'),
    width: wp('200%'),
    height: wp('200%'),
    borderRadius: wp('100%'),
    opacity: 0.2,
  },
  shapeCircle2: {
    position: 'absolute',
    bottom: -wp('120%'),
    left: -wp('100%'),
    width: wp('180%'),
    height: wp('180%'),
    borderRadius: wp('90%'),
    opacity: 0.5,
  },
});