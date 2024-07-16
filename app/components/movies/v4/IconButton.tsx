import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Text } from './Text';
import Constants from '@/constants';

export function IconButton({
  icon,
  color = Constants.STYLES.MOVIES.V4.defaultFontColor,
  size = 20,
  label,
  ...remainingProps
}) {
  return (
    <TouchableOpacity style={styles.root} {...remainingProps}>
      <Feather name={icon} color={color} size={size} />
      {label && (
        <Text style={[styles.label, { color, fontSize: size / 1.7 }]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  label: {
    marginTop: 5,
  },
});