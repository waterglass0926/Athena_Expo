import * as React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';

import Constants from '@/constants';

export function LineItemSong({ active, downloaded, onPress, songData }) {
  const activeColor = active ? Constants.COLORS.SPOTIFY.brandPrimary : Constants.COLORS.SPOTIFY.white;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={Constants.STYLES.SPOTIFY.activeOpacity}
        onPress={() => onPress(songData)}
        style={Constants.STYLES.SPOTIFY.flex5}
      >
        <Text style={[styles.title, { color: activeColor }]}>
          {songData.title}
        </Text>
        <View style={Constants.STYLES.SPOTIFY.flexRow}>
          {downloaded && (
            <View style={styles.circleDownloaded}>
              <Ionicons color={Constants.COLORS.SPOTIFY.blackBg} name='arrow-down' size={14} />
            </View>
          )}
          <Text style={styles.artist}>{songData.artist}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.containerRight}>
        <Feather color={Constants.COLORS.SPOTIFY.greyLight} name='more-horizontal' size={20} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    width: '100%'
  },
  title: {
    ...Constants.STYLES.SPOTIFY.textSpotify16,
    color: Constants.COLORS.SPOTIFY.white,
    marginBottom: 4
  },
  circleDownloaded: {
    alignItems: 'center',
    backgroundColor: Constants.COLORS.SPOTIFY.brandPrimary,
    borderRadius: 7,
    height: 14,
    justifyContent: 'center',
    marginRight: 8,
    width: 14
  },
  artist: {
    ...Constants.STYLES.SPOTIFY.textSpotify12,
    color: Constants.COLORS.SPOTIFY.greyInactive
  },
  containerRight: {
    alignItems: 'flex-end',
    flex: 1
  },
});