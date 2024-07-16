import React from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Text } from './Text';
import Constants from '@/constants';

export function Button({
  label,
  icon,
  type = 'default',
  style = {},
  ...remainingProps
}) {
  const fontColor =
    type === 'default'
      ? Constants.STYLES.MOVIES.V4.contrastFontColor
      : Constants.STYLES.MOVIES.V4.defaultFontColor;
  return (
    <TouchableHighlight
      style={[styles.base, styles[type], style]}
      {...remainingProps}
    >
      <>
        {icon && (
          <Feather
            style={styles.icon}
            name={icon}
            color={fontColor}
            size={16}
          />
        )}
        <Text weight='bold' style={{ color: fontColor }}>
          {label}
        </Text>
      </>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: Constants.STYLES.MOVIES.V4.borderRadius,
  },
  primary: {
    backgroundColor: Constants.STYLES.MOVIES.V4.primaryColor,
  },
  icon: {
    marginRight: 5,
  },
  default: {
    backgroundColor: Constants.STYLES.MOVIES.V4.contrastColor,
  },
});