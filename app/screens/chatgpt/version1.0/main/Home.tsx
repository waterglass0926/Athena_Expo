import React, { FC, useEffect } from 'react';
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

export const Home: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  return (
    <SafeAreaView
      style={{
        ...styles.areaView,
        backgroundColor: theme.BACKCOLOR,
      }}
    >
      <View style={styles.viewContent}>
        <View />
        <Text style={{
          ...styles.textTitle,
          color: theme.FORECOLOR,
        }}>
          Examples
        </Text>

        <View
          style={{
            ...styles.viewBox,
            borderWidth: 1,
            borderColor: theme.FORECOLOR,
            backgroundColor: theme.BACKCOLOR,
          }}
        >
          <Text style={[styles.textBox, { color: theme.FORECOLOR }]}>
            'Explain quantum computings in simple terms'
          </Text>
        </View>
        <View
          style={{
            ...styles.viewBox,
            borderWidth: 1,
            borderColor: theme.FORECOLOR,
            backgroundColor: theme.BACKCOLOR,
          }}
        >
          <Text style={[styles.textBox, { color: theme.FORECOLOR }]}>
            'How To make an HTTP request in JavaScript ?'
          </Text>
        </View>
        <View
          style={{
            ...styles.viewBox,
            borderWidth: 1,
            borderColor: theme.FORECOLOR,
            backgroundColor: theme.BACKCOLOR,
          }}
        >
          <Text style={[styles.textBox, { color: theme.FORECOLOR }]}>
            'Got any creative ideas for a 10 year old's birthday'
          </Text>
        </View>

        <TouchableOpacity
          style={{
            ...styles.buttonChat,
            backgroundColor: theme.PRIMARY
          }}
          onPress={() => navigation.navigate('ChatGptChat')}
        >
          <Icon
            type='ant-design'
            name='plus'
            size={Constants.SIZE.S24}
            color={Constants.COLORS.DEFAULT.WHITE}
          />
          <Text style={styles.textChat}>New Chat</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
  },
  viewContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    ...Constants.STYLES.CHATGPT.V1.h4,
    marginVertical: 22,
  },
  viewBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
    width: 300,
    paddingVertical: 18,
    paddingHorizontal: 12,
  },
  textBox: {
    ...Constants.STYLES.CHATGPT.V1.body4,
    textAlign: 'center',
    color: Constants.COLORS.DEFAULT.WHITE,
  },
  buttonChat: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    paddingVertical: Constants.SIZE.S16,
  },
  textChat: {
    ...Constants.STYLES.CHATGPT.V1.body3,
    marginLeft: 8,
    color: Constants.COLORS.DEFAULT.WHITE,
  },
});