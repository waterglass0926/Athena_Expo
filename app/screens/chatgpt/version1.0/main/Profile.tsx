import React, { FC, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/chatgpt/version1.0';
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

export const Profile: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.BACKCOLOR,
    }}>
      <Text style={{
        color: theme.FORECOLOR
      }}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({

});