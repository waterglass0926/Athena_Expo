import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import SvgArrowRight from '@/assets/svgs/disney/v1/Svg.ArrowRight';
import Constants from '@/constants';

export const TouchLineItem = ({ icon, iconSize, onPress, text }) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={styles.container}
  >
    {icon && (
      <View style={styles.icon}>
        {React.cloneElement(icon, { size: iconSize })}
      </View>
    )}
    <Text style={styles.text}>{text}</Text>
    <View style={styles.arrow}>
      <SvgArrowRight active={false} size={iconSize} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderBottomColor: Constants.COLORS.DISNEY.V1.inactiveGrey,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 16,
    paddingRight: 16,
    paddingVertical: 20
  },
  icon: {
    justifyContent: 'center',
    marginRight: 16
  },
  text: {
    color: Constants.COLORS.DISNEY.V1.white,
    flex: 2,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY,
    fontSize: 16
  },
  arrow: {
    justifyContent: 'center'
  }
});