import React from 'react';

import { Icon } from 'react-native-elements';

import { StyleSheet, Text, View } from 'react-native';

import Components from '@/components/translator';
import Constants from '@/constants';
import Functions from '@/utils';
import { useNavigation } from '@/hooks/translator/useNavigation';

export const CardSequenceHeader = () => {
  const { goBack } = useNavigation();

  return (
    <Components.ButtonBase onPress={goBack} style={styles.container}>
      <Components.TypoGraphy style={styles.text}>Back</Components.TypoGraphy>
      <View style={styles.iconContainer}>
        <Icon type='material' name='keyboard-backspace' size={20} color={Constants.COLORS.DEFAULT.WHITE} />
      </View>
    </Components.ButtonBase>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    width: '100%',
    height: 56,
  },
  text: {
    fontSize: 16,
    color: Constants.COLORS.DEFAULT.WHITE,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
  },
});