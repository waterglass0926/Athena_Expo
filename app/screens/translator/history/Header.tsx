import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Icon } from 'react-native-elements';

import { StyleSheet, View } from 'react-native';

import Components from '@/components/translator';
import Constants from '@/constants';
import Functions from '@/utils';
import { useNavigation } from '@/hooks/translator/useNavigation';
import { ThemeType } from '@/types/athena';

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const HistoryHeader = () => {
  const { goBack } = useNavigation();
  const dispatch = useDispatch();
  const { theme } = useSelector((state: StateType) => state.athena);

  return (
    <View style={{
      ...styles.container,
      backgroundColor: theme.PRIMARY,
    }}>
      <Components.ButtonBorderLess style={styles.icon} onPress={goBack}>
        <Icon type='material' size={24} color={Constants.COLORS.DEFAULT.WHITE} name='arrow-back' />
      </Components.ButtonBorderLess>
      <Components.TypoGraphy style={{
        ...styles.title,
        color: Constants.COLORS.DEFAULT.WHITE,
      }}>Translation History</Components.TypoGraphy>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: Constants.SIZE.S48,
    ...Constants.STYLES.TRANSLATOR.SHADOW,
    zIndex: 99,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
  },
  title: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
});