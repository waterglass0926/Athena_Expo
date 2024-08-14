import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { SvgXml } from 'react-native-svg';

import { View } from 'react-native';

import '@/utils/i18n';
// import Components from '@/components/dating/v3';
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

export const ProfileHome: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { theme } = useSelector((state: StateType) => state.athena);

  return (
    <View style={{
      ...Constants.STYLES.CONTAINER,
      ...Constants.STYLES.ALIGN_COL_CENTER,
      backgroundColor: theme.BACKCOLOR,
    }}>

    </View>
  );
};