import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import Constants from '@/constants';

export function LoadingLayout({ style, size = 'large' }) {
  return (
    <View style={[styles.root, styles[size], style]}>
      <ActivityIndicator size={size} color={Constants.STYLES.MOVIES.V4.primaryColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  small: {
    padding: 10,
  },
  large: {
    padding: 20,
  },
});