import React from 'react';
import Constants from 'expo-constants';

import { SafeAreaView, StyleSheet, View } from 'react-native';

export const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={style}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});