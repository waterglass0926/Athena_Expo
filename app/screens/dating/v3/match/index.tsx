import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { SvgXml } from 'react-native-svg';

import { StyleSheet, ScrollView, View } from 'react-native';

import '@/utils/i18n';
import Components from '@/components/dating/v3';
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

export const MatchHome: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { theme } = useSelector((state: StateType) => state.athena);

  return (
    <View style={{
      ...Constants.STYLES.CONTAINER,
      backgroundColor: Constants.COLORS.DATING.V3.DARK00,
    }}>
      <Components.Header title={'Events & Conventions'} />

      <ScrollView
        key='scroll00'
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    width: wp('100%'),
    paddingVertical: 16
  },
});