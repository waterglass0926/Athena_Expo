import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import SvgArrowRight from '@/assets/svgs/disney/v1/Svg.ArrowRight';
import Constants from '@/constants';

export const TouchLineItemApp = ({ iconSize, onPress, showArrow, tagline, text }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={styles.container}
  >
    <View style={styles.containerText}>
      <Text style={styles.text}>{text}</Text>
      {tagline && <Text style={styles.tagline}>{tagline}</Text>}
    </View>
    {showArrow && (
      <View style={styles.arrow}>
        <SvgArrowRight size={iconSize} />
      </View>
    )}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 16
  },
  tagline: {
    color: Constants.COLORS.DISNEY.V1.moreSectionText,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY,
    fontSize: 12,
    marginTop: 4
  },
  text: {
    color: Constants.COLORS.DISNEY.V1.heading,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY,
    fontSize: 16
  },
  arrow: {
    justifyContent: 'center'
  }
});