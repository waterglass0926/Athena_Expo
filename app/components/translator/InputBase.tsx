import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps } from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';

export const InputBase = React.forwardRef<TextInput, TextInputProps>((props, ref) => (
  <TextInput
    ref={ref}
    {...props}
    allowFontScaling={false}
    style={[styles.input, props.style]}
  />
));

const styles = StyleSheet.create({
  input: {
    margin: 0,
    padding: 0,
    color: Constants.COLORS.DEFAULT.BLACK,
  },
});