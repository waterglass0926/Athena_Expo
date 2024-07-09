import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BlurView } from 'expo-blur';
import { Feather } from '@expo/vector-icons';

// components
import { TouchIcon } from './TouchIcon';
import Constants from '@/constants';
import Device from '@/utils/device';

export function ScreenHeader({ showBack, title }) {
  const navigation = useNavigation();

  return (
    <BlurView tint='dark' intensity={95} style={styles.container}>
      {showBack && (
        <View style={styles.left}>
          <TouchIcon
            icon={<Feather color={Constants.COLORS.SPOTIFY.white} name='chevron-left' />}
            onPress={() => navigation.goBack(null)}
          />
        </View>
      )}

      <View style={styles.containerText}>
        <Text style={styles.text}>{title}</Text>
      </View>

      {showBack && <View style={Constants.STYLES.SPOTIFY.flex1} />}
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingHorizontal: 24,
    paddingTop: Device.iPhoneNotch ? 48 : 24
  },
  containerText: {
    ...Constants.STYLES.SPOTIFY.flex5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    ...Constants.STYLES.SPOTIFY.textSpotifyBold16,
    color: Constants.COLORS.SPOTIFY.white,
    textAlign: 'center'
  },
  left: {
    ...Constants.STYLES.SPOTIFY.flex1,
    alignItems: 'flex-start'
  },
});