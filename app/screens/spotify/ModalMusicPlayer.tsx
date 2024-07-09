import * as React from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';
import { Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';

import Components from '@/components/spotify';
import Constants from '@/constants';
import Functions from '@/utils';
import Device from '@/utils/device';
import Images from '@/utils/preload/images';
import Context from '@/contexts/spotify/CreateContext';

export function ModalMusicPlayer(props) {
  // get main app state
  const { currentSongData } = React.useContext(Context);

  // local state
  const [favorited, setFavorited] = React.useState(false);
  const [paused, setPaused] = React.useState(true);

  const { navigation } = props;

  // ui state
  const favoriteColor = favorited ? Constants.COLORS.SPOTIFY.brandPrimary : Constants.COLORS.SPOTIFY.white;
  const favoriteIcon = favorited ? 'heart' : 'heart-o';
  const iconPlay = paused ? 'play-circle' : 'pause-circle';
  const timePast = Functions.formatTime(0);
  const timeLeft = Functions.formatTime(currentSongData.length);

  return (
    <View style={Constants.STYLES.SPOTIFY.container}>
      <Components.ModalHeader
        left={<Feather color={Constants.COLORS.SPOTIFY.greyLight} name='chevron-down' />}
        leftPress={() => navigation.goBack(null)}
        right={<Feather color={Constants.COLORS.SPOTIFY.greyLight} name='more-horizontal' />}
        text={currentSongData.album}
      />

      <View style={Constants.STYLES.SPOTIFY.p3}>
        <Image source={Images[currentSongData.image]} style={styles.image} />

        <View style={[Constants.STYLES.SPOTIFY.flexRowSpace, styles.containerDetails]}>
          <View style={styles.containerSong}>
            <Text ellipsizeMode='tail' numberOfLines={1} style={styles.song}>
              {currentSongData.title}
            </Text>
            <Text style={styles.artist}>{currentSongData.artist}</Text>
          </View>
          <View style={styles.containerFavorite}>
            <Components.TouchIcon
              icon={<FontAwesome color={favoriteColor} name={favoriteIcon} />}
              onPress={() => setFavorited(!favorited)}
            />
          </View>
        </View>

        <View style={styles.containerVolume}>
          <Slider
            minimumValue={0}
            maximumValue={currentSongData.length}
            minimumTrackTintColor={Constants.COLORS.SPOTIFY.white}
            maximumTrackTintColor={Constants.COLORS.SPOTIFY.grey3}
          />
          <View style={styles.containerTime}>
            <Text style={styles.time}>{timePast}</Text>
            <Text style={styles.time}>{`-${timeLeft}`}</Text>
          </View>
        </View>

        <View style={styles.containerControls}>
          <Components.TouchIcon
            icon={<Feather color={Constants.COLORS.SPOTIFY.greyLight} name='shuffle' />}
            onPress={() => null}
          />
          <View style={Constants.STYLES.SPOTIFY.flexRowCenterAlign}>
            <Components.TouchIcon
              icon={<FontAwesome color={Constants.COLORS.SPOTIFY.white} name='step-backward' />}
              iconSize={32}
              onPress={() => null}
            />
            <View style={Constants.STYLES.SPOTIFY.pH3}>
              <Components.TouchIcon
                icon={<FontAwesome color={Constants.COLORS.SPOTIFY.white} name={iconPlay} />}
                iconSize={64}
                onPress={() => setPaused(!paused)}
              />
            </View>
            <Components.TouchIcon
              icon={<FontAwesome color={Constants.COLORS.SPOTIFY.white} name='step-forward' />}
              iconSize={32}
              onPress={() => null}
            />
          </View>
          <Components.TouchIcon
            icon={<Feather color={Constants.COLORS.SPOTIFY.greyLight} name='repeat' />}
            onPress={() => null}
          />
        </View>

        <View style={styles.containerBottom}>
          <Components.TouchIcon
            icon={<Feather color={Constants.COLORS.SPOTIFY.greyLight} name='speaker' />}
            onPress={() => null}
          />
          <Components.TouchIcon
            icon={
              <MaterialIcons color={Constants.COLORS.SPOTIFY.greyLight} name='playlist-play' />
            }
            onPress={() => null}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: Device.width - 48,
    marginVertical: Device.iPhoneNotch ? 36 : 8,
    width: Device.width - 48
  },
  containerDetails: {
    marginBottom: 16
  },
  containerSong: {
    flex: 6
  },
  song: {
    ...Constants.STYLES.SPOTIFY.textSpotifyBold24,
    color: Constants.COLORS.SPOTIFY.white
  },
  artist: {
    ...Constants.STYLES.SPOTIFY.textSpotify18,
    color: Constants.COLORS.SPOTIFY.greyInactive
  },
  containerFavorite: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center'
  },
  containerTime: {
    ...Constants.STYLES.SPOTIFY.flexRowSpace
  },
  time: {
    ...Constants.STYLES.SPOTIFY.textSpotify10,
    color: Constants.COLORS.SPOTIFY.greyInactive
  },
  containerControls: {
    ...Constants.STYLES.SPOTIFY.flexRowSpace,
    marginTop: Device.iPhoneNotch ? 24 : 8
  },
  containerBottom: {
    ...Constants.STYLES.SPOTIFY.flexRowSpace,
    marginTop: Device.iPhoneNotch ? 32 : 8
  }
});