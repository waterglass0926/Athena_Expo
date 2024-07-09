import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { TouchIcon } from './TouchIcon';
import Constants from '@/constants';
import Device from '@/utils/device';

export function ModalHeader({ left, leftPress, right, rightPress, style, text }) {
  return (
    <View style={[styles.container, style]}>
      {left && (
        <TouchIcon icon={left} onPress={leftPress} style={styles.left} />
      )}
      {!left && <View style={styles.left} />}

      {text && (
        <View style={styles.containerText}>
          <Text style={styles.text}>{text}</Text>
        </View>
      )}

      {right && (
        <TouchIcon icon={right} onPress={rightPress} style={styles.right} />
      )}
      {!right && <View style={styles.right} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: Device.iPhoneNotch ? 48 : 24
  },
  containerText: {
    alignItems: 'center',
    flex: 5,
    justifyContent: 'center'
  },
  text: {
    ...Constants.STYLES.SPOTIFY.textSpotifyBold16,
    color: Constants.COLORS.SPOTIFY.white,
    textAlign: 'center'
  },
  left: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center'
  },
  right: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center'
  },
});