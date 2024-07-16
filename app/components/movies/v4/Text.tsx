import React from 'react';
import { Text as NativeText } from 'react-native';

import Constants from '@/constants';

const fontSizes = {
  small: Constants.STYLES.MOVIES.V4.smallFontSize,
  default: Constants.STYLES.MOVIES.V4.defaultFontSize,
  large: Constants.STYLES.MOVIES.V4.largeFontSize,
  xLarge: Constants.STYLES.MOVIES.V4.xLargeFontSize,
};

const fontColors = {
  default: Constants.STYLES.MOVIES.V4.defaultFontColor,
  primary: Constants.STYLES.MOVIES.V4.primaryColor,
  dark: Constants.STYLES.MOVIES.V4.darkFontColor,
  hint: Constants.STYLES.MOVIES.V4.hintFontColor,
};

const fontWeights = {
  default: Constants.STYLES.MOVIES.V4.defaultFontWeight,
  bold: Constants.STYLES.MOVIES.V4.boldFontWeight,
  bolderFontWeight: Constants.STYLES.MOVIES.V4.bolderFontWeight,
};

export function Text({
  color = 'default',
  size = 'default',
  weight = 'default',
  style,
  ...remainingProps
}) {
  let _color = color;
  if (typeof _color === 'string') {
    _color = fontColors[_color];
  }

  let _size = size;
  if (typeof _size === 'string') {
    _size = fontSizes[_size];
  }

  let _weight = weight;
  if (typeof _weight === 'string') {
    _weight = fontWeights[_weight];
  }

  return (
    <NativeText
      style={[{ color: _color, fontSize: _size, fontWeight: _weight }, style]}
      {...remainingProps}
    />
  );
};