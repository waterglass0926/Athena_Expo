import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import logo from '@/assets/images/movies/v4/logo-full.png';
import { Text } from '@/components/movies/v4';
import Constants from '@/constants';

export function Header() {
  return (
    <LinearGradient
      colors={[Constants.STYLES.MOVIES.V4.gradientDarkColor, Constants.STYLES.MOVIES.V4.gradientLightColor]}
      style={styles.root}
    >
      <Image style={styles.logo} source={logo} />
      <View style={styles.nav}>
        <Text size='large' weight='bold' style={styles.navItem}></Text>
      </View>
      <View style={styles.rightSpacer}></View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    height: Constants.STYLES.MOVIES.V4.headerHeight,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    zIndex: 2,
  },
  logo: {
    width: 100,
    height: 36,
    position: 'relative',
    left: 120,
  },
  nav: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  navItem: {},
  rightSpacer: {
    width: 36,
  },
});