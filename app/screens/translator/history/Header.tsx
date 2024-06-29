import React from 'react';

import { Icon } from 'react-native-elements';

import { Pressable, StyleSheet, Text, View } from 'react-native';

import Components from '@/components/translator';
import Constants, { STATUSBAR_HEIGHT } from '@/constants';
import Functions from '@/utils';
import { useNavigation } from '@/hooks/translator/useNavigation';

export const HistoryHeader = () => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.container}>
      <Components.ButtonBorderLess style={styles.icon} onPress={goBack}>
        <Icon type='material' size={24} color={Constants.COLORS.DEFAULT.WHITE} name='arrow-back' />
      </Components.ButtonBorderLess>
      <Components.TypoGraphy style={styles.title}>Translation History</Components.TypoGraphy>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: STATUSBAR_HEIGHT,
    width: '100%',
    height: STATUSBAR_HEIGHT + 56,
    backgroundColor: Constants.COLORS.DEFAULT.RED,
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
    color: Constants.COLORS.DEFAULT.WHITE,
  },
});