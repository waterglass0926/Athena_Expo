import * as React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import Constants from '@/constants';
import Device from '@/utils/device';
import Images from '@/utils/preload/images';

export function BarMusicPlayer({ song }) {
  const navigation = useNavigation();

  // local state
  const [favorited, setFavorited] = React.useState(false);
  const [paused, setPaused] = React.useState(true);

  const favoriteColor = favorited ? Constants.COLORS.SPOTIFY.brandPrimary : Constants.COLORS.SPOTIFY.white;
  const favoriteIcon = favorited ? 'heart' : 'heart-o';
  const iconPlay = paused ? 'play-circle' : 'pause-circle';

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('SpotifyModalMusicPlayer')}
      style={styles.container}
    >
      <TouchableOpacity
        activeOpacity={Constants.STYLES.SPOTIFY.activeOpacity}
        hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
        onPress={() => setFavorited(!favorited)}
        style={styles.containerIcon}
      >
        <FontAwesome color={favoriteColor} name={favoriteIcon} size={20} />
      </TouchableOpacity>

      {song && (
        <View>
          <View style={styles.containerSong}>
            <Text style={styles.title}>{`${song.title} · `}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>
          <View style={[Constants.STYLES.SPOTIFY.flexRowCenter, Constants.STYLES.SPOTIFY.mTHalf]}>
            <FontAwesome
              color={Constants.COLORS.SPOTIFY.brandPrimary}
              name='bluetooth-b'
              size={14}
            />
            <Text style={styles.device}>Caleb&apos;s Beatsx</Text>
          </View>
        </View>
      )}

      <TouchableOpacity
        activeOpacity={Constants.STYLES.SPOTIFY.activeOpacity}
        hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
        onPress={() => setPaused(!paused)}
        style={styles.containerIcon}
      >
        <FontAwesome color={Constants.COLORS.SPOTIFY.white} name={iconPlay} size={28} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: Constants.COLORS.SPOTIFY.grey,
    borderBottomColor: Constants.COLORS.SPOTIFY.blackBg,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    width: '100%'
  },
  containerIcon: {
    ...Constants.STYLES.SPOTIFY.flexCenter,
    width: 50
  },
  containerSong: {
    ...Constants.STYLES.SPOTIFY.flexRowCenter,
    overflow: 'hidden',
    width: Device.width - 100
  },
  title: {
    ...Constants.STYLES.SPOTIFY.textSpotify12,
    color: Constants.COLORS.SPOTIFY.white
  },
  artist: {
    ...Constants.STYLES.SPOTIFY.textSpotify12,
    color: Constants.COLORS.SPOTIFY.greyLight
  },
  device: {
    ...Constants.STYLES.SPOTIFY.textSpotify10,
    color: Constants.COLORS.SPOTIFY.brandPrimary,
    marginLeft: 4,
    textTransform: 'uppercase'
  },
});