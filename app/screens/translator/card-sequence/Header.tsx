import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Icon } from 'react-native-elements';

import { StyleSheet } from 'react-native';

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

export const CardSequenceHeader = () => {
  const { goBack } = useNavigation();
  const dispatch = useDispatch();
  const { theme } = useSelector((state: StateType) => state.athena);

  return (
    <Components.ButtonBase onPress={goBack} style={styles.container}>
      <Components.TypoGraphy style={styles.textBack}>Back</Components.TypoGraphy>
      <Icon type='material' name='keyboard-backspace' size={20} color={theme.FORECOLOR} />
    </Components.ButtonBase>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: Constants.SIZE.S16,
    marginTop: Constants.SIZE.S48,
  },
  textBack: {
    fontSize: 20,
  },
});