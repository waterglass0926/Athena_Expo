import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';
import { SvgXml } from 'react-native-svg';

import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ImageBackground,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/tinder/v1';
import Constants from '@/constants';
import Functions from '@/utils';
import { ThemeType } from '@types/athena';

type PropsType = {
  navigation: any;
};

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const Splash: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { load, theme } = useSelector((state: StateType) => state.athena);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('YouTubeV1Home');
    }, 2000);
  }, []);

  return (
    <View style={{
      ...Constants.STYLES.CONTAINER,
      ...Constants.STYLES.ALIGN_COL_CENTER,
      backgroundColor: theme.BACKCOLOR
    }}>
      <SvgXml
        xml={Constants.SVGS.ATHENE.LOGO.replace(/fill="[^"]+"/g, `fill="${theme.PRIMARY}"`)}
        color={theme.PRIMARY}
      />
    </View>
  );
};

const styles = StyleSheet.create({});