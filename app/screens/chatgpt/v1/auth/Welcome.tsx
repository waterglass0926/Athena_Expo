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
  Image,
  TouchableOpacity
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

export const Welcome: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.BACKCOLOR }}>
      <Components.Page>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            source={Constants.IAMGES.CHATGPT.V1.LOGO}
            style={{
              marginBottom: 22,
              height: 120,
              width: 120,
            }}
          />

          <Text
            style={{
              ...Constants.STYLES.CHATGPT.V1.h4,
              marginVertical: 8,
              color: theme.FORECOLOR,
            }}
          >
            Welcome to ChatGPT
          </Text>

          <Text
            style={{
              ...Constants.STYLES.CHATGPT.V1.body3,
              marginBottom: 36,
              color: theme.FORECOLOR,
            }}
          >
            Pick any options to continue
          </Text>

          <Components.Button
            title='Sign In'
            filled
            onPress={() => navigation.navigate('ChatGptAuthStack', { screen: 'ChatGptSignIn' })}
            style={{
              marginBottom: Constants.SIZE.S08,
              width: wp('100%') - 44,
            }}
          />

          <Components.Button
            title='Sign Up'
            onPress={() => navigation.navigate('ChatGptAuthStack', { screen: 'ChatGptSignUp' })}
            style={{
              marginBottom: Constants.SIZE.S08,
              width: wp('100%') - 44,
              backgroundColor: 'transparent',
              borderColor: theme.PRIMARY,
            }}
          />
        </View>
      </Components.Page>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});