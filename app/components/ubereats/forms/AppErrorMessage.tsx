import React from 'react';
import { StyleSheet, Text } from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions from '@/utils';

export const AppErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;
  return (
    <Text style={styles.errorMessage}>{error}</Text>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    marginVertical: 2,
    fontSize: 14,
    color: Constants.COLORS.DEFAULT.RED,
  },
});