import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions from '@/utils';

export const AppButton = ({ title, onPress, color = 'primary', disabled = false }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: Constants.COLORS.UBEREATS[color] }]} onPress={onPress} disabled={disabled}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginTop: 15,
    padding: 15,
    width: '100%',
    borderRadius: 10,
  },
  text: {
    color: Constants.COLORS.UBEREATS.white,
    fontSize: 18,
    fontWeight: '700',
  },
});