import React from 'react';
import { Text, TextProps } from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';

export const TypoGraphy: React.FC<TextProps> = ({ ...props }) => (
  <Text
    {...props}
    // allowFontScaling={false}
    style={[{ color: Constants.COLORS.DEFAULT.BLACK }, props.style]}
  />
);