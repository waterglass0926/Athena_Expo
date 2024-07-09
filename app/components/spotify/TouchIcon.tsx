import * as React from 'react';

import { TouchableOpacity } from 'react-native';

import Constants from '@/constants';

export function TouchIcon({ icon, iconSize, onPress, style }) {
  return (
    <TouchableOpacity
      activeOpacity={Constants.STYLES.SPOTIFY.activeOpacity}
      onPress={onPress}
      hitSlop={{ bottom: 5, left: 5, right: 5, top: 5 }}
      style={[Constants.STYLES.SPOTIFY.flexCenter, style]}
    >
      {React.cloneElement(icon, { size: iconSize })}
    </TouchableOpacity>
  );
};