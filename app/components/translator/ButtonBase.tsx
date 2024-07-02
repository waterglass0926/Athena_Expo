import React from 'react';
import { Pressable, PressableProps } from 'react-native';

export const ButtonBase: React.FC<PressableProps> = props => (
  <Pressable android_ripple={{ color: '#ccc' }} {...props} />
);