import * as React from 'react';

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Constants from '@/constants';

export function PlaylistItem({ bgColor, onPress, title }) {
  return (
    <TouchableOpacity
      activeOpacity={Constants.STYLES.SPOTIFY.activeOpacity}
      onPress={onPress}
      style={[styles.playlistItem, { backgroundColor: bgColor }]}
    >
      <Text style={styles.playlistTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  playlistItem: {
    borderRadius: 6,
    flex: 1,
    height: 98,
    marginBottom: 24,
    marginRight: 24,
    paddingLeft: 12,
    paddingTop: 12
  },
  playlistTitle: {
    ...Constants.STYLES.SPOTIFY.textSpotifyBold22,
    color: Constants.COLORS.SPOTIFY.white
  },
});