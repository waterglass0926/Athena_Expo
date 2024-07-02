import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
  View,
  Text,
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/chatgpt/v1';
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

export const Saved: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const { theme } = useSelector((state: StateType) => state.athena);

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.BACKCOLOR,
    }}>
      <Text style={{
        color: theme.FORECOLOR,
      }}>Saved</Text>
    </View>
  );
};