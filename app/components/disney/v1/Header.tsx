import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import SvgArrowLeft from '@/assets/svgs/disney/v1/Svg.ArrowLeft';
import Constants from '@/constants';
import Device from '@/utils/device';

export const Header = ({ close, closeText, navigation, showBack, title }) => (
  <View style={styles.container}>
    {showBack && (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.goBack(null)}
        style={styles.back}
      >
        <SvgArrowLeft />
      </TouchableOpacity>
    )}

    {title && (
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )}

    {showBack && !close && <View style={Constants.STYLES.DISNEY.V1.flex1} />}

    {close && (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.goBack(null)}
        style={styles.close}
      >
        <Text style={styles.closeText}>{closeText}</Text>
      </TouchableOpacity>
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
    paddingHorizontal: 16,
    paddingTop: Device.iPhoneNotch ? 54 : 30
  },
  back: {
    alignSelf: 'center',
    flex: 1
  },
  containerTitle: {
    flex: 4,
    height: 35,
    justifyContent: 'flex-end'
  },
  title: {
    paddingBottom: 4,
    fontSize: 18,
    color: Constants.COLORS.DISNEY.V1.white,
    textAlign: 'center'
  },
  close: {
    alignItems: 'flex-end',
    flex: 1,
    height: 35,
    justifyContent: 'center'
  },
  closeText: {
    fontFamily: Constants.FONTS.ATHENA.PRIMARY,
    fontSize: 16,
    color: Constants.COLORS.DISNEY.V1.white,
  }
});