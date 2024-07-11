import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Constants from '@/constants';

export const TouchLineItemElement = ({ element, onPress, text }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={styles.container}
  >
    <Text style={styles.text}>{text}</Text>
    <View style={styles.element}>{React.cloneElement(element)}</View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  text: {
    color: Constants.COLORS.DISNEY.V1.heading,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY,
    fontSize: 16
  },
  element: {
    justifyContent: 'center',
    marginRight: 4
  }
});