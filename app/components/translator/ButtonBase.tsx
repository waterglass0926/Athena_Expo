import React from 'react';
import { StyleSheet, Pressable, PressableProps, } from 'react-native';

export const ButtonBase: React.FC<PressableProps> = props => (
  <Pressable android_ripple={{ color: '#ccc' }} {...props} />
);

const styles = StyleSheet.create({});