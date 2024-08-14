import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { SvgXml } from 'react-native-svg';

import { View } from 'react-native';

import '@/utils/i18n';
// import Components from '@/components/tinder/v3';
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

export const Splash: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { theme } = useSelector((state: StateType) => state.athena);

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('TinderV3BottomTab');
    }, 1000);
  }, []);

  return (
    <View style={{
      ...Constants.STYLES.CONTAINER,
      ...Constants.STYLES.ALIGN_COL_CENTER,
      backgroundColor: theme.BACKCOLOR,
    }}>
      <SvgXml
        xml={Constants.SVGS.ATHENE.LOGO.replace(/fill="[^"]+"/g, `fill="${theme.PRIMARY}"`)}
        color={theme.PRIMARY}
      />
    </View>
  );
};