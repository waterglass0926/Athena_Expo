import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';

import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/athena';
import Constants from '@/constants';
import Functions from '@/utils';
import { ThemeType } from '@/types/athena';

type PropsType = {
  navigation: any;
};

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const Slides: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  const renderItem = ({ item, key }: any) => (
    <ImageBackground
      key={key}
      style={Constants.STYLES.CONTAINER}
      source={item.image}
      blurRadius={50}
    >
      <LinearGradient
        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
        colors={[theme?.PRIMARY, theme?.SECONDARY]}
        style={styles.linearGradient}
      />
      <View style={[styles.viewContent, { backgroundColor: theme.BACKCOLOR }]}>
        <View style={[styles.buttonMinus, { backgroundColor: theme.PRIMARY }]} />
        <Text style={[styles.textTitle, { color: theme.FORECOLOR }]}>{t(item.title)}</Text>
        <Text style={[styles.textDescription, { color: theme.FORECOLOR }]}>{item.description}</Text>
        <TouchableOpacity
          style={[styles.buttonStart, { backgroundColor: theme.PRIMARY }]}
          onPress={() => navigation.navigate(item.navigation)}
        >
          <Text style={[styles.textStart, { color: Constants.COLORS.DEFAULT.WHITE }]}>{t('Get Started')}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );

  const renderButton = (type: string) => (
    <View style={[styles.buttonCircle, { backgroundColor: theme.PRIMARY }]}>
      {type === 'prev' ? (
        <Icon type='ionicon' name='arrow-back' size={20} color={Constants.COLORS.DEFAULT.WHITE} />
      ) : type === 'next' ? (
        <Icon type='ionicon' name='arrow-forward' size={20} color={Constants.COLORS.DEFAULT.WHITE} />
      ) : type === 'done' ? (
        <Icon type='ionicon' name='checkmark-sharp' size={20} color={Constants.COLORS.DEFAULT.WHITE} />
      ) : (
        <Icon type='ionicon' name='chevron-forward' size={20} color={Constants.COLORS.DEFAULT.WHITE} />
      )}
    </View>
  );

  return (
    <View style={Constants.STYLES.CONTAINER}>
      <AppIntroSlider
        data={Constants.DATA.SLIDES}
        renderItem={renderItem}
        dotStyle={{ ...styles.dotStyle, backgroundColor: theme.SECONDARY }}
        activeDotStyle={{ ...styles.activeDotStyle, backgroundColor: theme.PRIMARY }}
        showSkipButton
        showPrevButton
        showDoneButton={false}
        renderNextButton={() => renderButton('next')}
        renderPrevButton={() => renderButton('prev')}
        renderDoneButton={() => renderButton('done')}
        renderSkipButton={() => renderButton('skip')}
        onDone={() => navigation.navigate('Auth')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    opacity: 0.5
  },
  viewContent: {
    position: 'absolute',
    bottom: 0,
    padding: Constants.SIZE.S16,
    paddingBottom: 120,
    alignItems: 'center',
    width: wp('100.0%'),
    borderTopLeftRadius: Constants.SIZE.S28,
    borderTopRightRadius: Constants.SIZE.S28,
  },
  buttonMinus: {
    width: Constants.SIZE.S40,
    height: Constants.SIZE.S04,
    borderRadius: Constants.SIZE.S02,
  },
  textTitle: {
    marginTop: Constants.SIZE.S16,
    textAlign: 'center',
    fontSize: Constants.SIZE.S24,
    fontWeight: '700',
    lineHeight: Constants.SIZE.S64,
  },
  textDescription: {
    textAlign: 'center',
    fontSize: Constants.SIZE.S16,
    lineHeight: Constants.SIZE.S20,
  },
  textStart: {
    fontSize: Constants.SIZE.S16,
    fontWeight: 'bold',
  },
  buttonStart: {
    marginTop: Constants.SIZE.S24,
    paddingVertical: Constants.SIZE.S08,
    paddingHorizontal: Constants.SIZE.S24,
    borderRadius: Constants.SIZE.S20
  },
  dotStyle: {
    width: Constants.SIZE.S08,
    height: Constants.SIZE.S08,
  },
  activeDotStyle: {
    width: Constants.SIZE.S16,
    height: Constants.SIZE.S08
  },
  buttonCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Constants.SIZE.S40,
    height: Constants.SIZE.S40,
    borderRadius: Constants.SIZE.S20,
  },
});