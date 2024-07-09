import * as React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import Constants from '@/constants';

export function TouchText({ onPress, style, styleText, text }) {
  return (
    <TouchableOpacity
      activeOpacity={Constants.STYLES.SPOTIFY.activeOpacity}
      hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
      onPress={onPress}
      style={[Constants.STYLES.SPOTIFY.flexCenter, style]}
    >
      <Text style={styleText}>{text}</Text>
    </TouchableOpacity>
  );
};