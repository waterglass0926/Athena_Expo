import * as React from 'react';

import {
  Alert,
  Animated,
  Image,
  StyleSheet,
  Switch,
  Text,
  View
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

import albums from '@/assets/data/spotify';
import Components from '@/components/spotify';
import Constants from '@/constants';
import Functions from '@/utils';
import Device from '@/utils/device';
import Images from '@/utils/preload/images';
import Context from '@/contexts/spotify/CreateContext';

export function Album({ navigation, route }) {
  const { title } = route.params;

  // get main app state
  const { currentSongData, showMusicBar, updateState } =
    React.useContext(Context);

  // local state
  const [downloaded, setDownloaded] = React.useState(false);
  const [song, setSong] = React.useState(currentSongData.title);
  const scrollY = React.useRef(new Animated.Value(0)).current;

  // ui state
  const album = albums[title] || null;

  const onToggleDownloaded = (val) => {
    // if web
    if (Device.web) {
      setDownloaded(val);

      return;
    }

    // remove downloads alert
    if (val === false) {
      Alert.alert(
        'Remove from Downloads?',
        'You won\'t be able to play this offline.',
        [
          { text: 'Cancel' },
          {
            onPress: () => {
              setDownloaded(false);
            },
            text: 'Remove'
          }
        ],
        { cancelable: false }
      );
    } else {
      setDownloaded(val);
    }
  };

  const onChangeSong = (songData) => {
    // update local state
    setSong(songData.title);

    // update main state
    updateState('currentSongData', songData);
  };

  // album data not set?
  if (album === null) {
    return (
      <View style={[Constants.STYLES.SPOTIFY.container, Constants.STYLES.SPOTIFY.flexCenter]}>
        <Text style={{ color: Constants.COLORS.SPOTIFY.white }}>{`Album: ${title}`}</Text>
      </View>
    );
  }

  const stickyArray = Device.web ? [] : [0];
  const headingRange = Device.web ? [140, 200] : [230, 280];
  const shuffleRange = Device.web ? [40, 80] : [40, 80];

  const opacityHeading = scrollY.interpolate({
    inputRange: headingRange,
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });

  const opacityShuffle = scrollY.interpolate({
    inputRange: shuffleRange,
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });

  return (
    <View style={Constants.STYLES.SPOTIFY.container}>
      {showMusicBar === false && (
        <BlurView intensity={99} style={styles.blurview} tint='dark' />
      )}

      <View style={styles.containerHeader}>
        <Animated.View
          style={[styles.headerLinear, { opacity: opacityHeading }]}
        >
          <Components.LinearGradient fill={album.backgroundColor} height={89} />
        </Animated.View>
        <View style={styles.header}>
          <Components.TouchIcon
            icon={<Feather color={Constants.COLORS.SPOTIFY.white} name='chevron-left' />}
            onPress={() => navigation.goBack(null)}
          />
          <Animated.View style={{ opacity: opacityShuffle }}>
            <Text style={styles.headerTitle}>{album.title}</Text>
          </Animated.View>
          <Components.TouchIcon
            icon={<Feather color={Constants.COLORS.SPOTIFY.white} name='more-horizontal' />}
            onPress={() => {
              // update main state
              updateState('showMusicBar', !showMusicBar);

              navigation.navigate('SpotifyModalMoreOptions', {
                album
              });
            }}
          />
        </View>
      </View>

      <View style={styles.containerFixed}>
        <View style={styles.containerLinear}>
          <Components.LinearGradient fill={album.backgroundColor} />
        </View>
        <View style={styles.containerImage}>
          <Image source={Images[album.image]} style={styles.image} />
        </View>
        <View style={styles.containerTitle}>
          <Text ellipsizeMode='tail' numberOfLines={1} style={styles.title}>
            {album.title}
          </Text>
        </View>
        <View style={styles.containerAlbum}>
          <Text style={styles.albumInfo}>
            {`Album by ${album.artist} · ${album.released}`}
          </Text>
        </View>
      </View>

      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={stickyArray}
        style={styles.containerScroll}
      >
        <View style={styles.containerSticky}>
          <Animated.View
            style={[styles.containerStickyLinear, { opacity: opacityShuffle }]}
          >
            <Components.LinearGradient fill={Constants.COLORS.SPOTIFY.black20} height={50} />
          </Animated.View>
          <View style={styles.containerShuffle}>
            <Components.TouchText
              onPress={() => null}
              style={styles.btn}
              styleText={styles.btnText}
              text='Shuffle Play'
            />
          </View>
        </View>
        <View style={styles.containerSongs}>
          <View style={styles.row}>
            <Text style={styles.downloadText}>
              {downloaded ? 'Downloaded' : 'Download'}
            </Text>
            <Switch
              trackColor={Constants.COLORS.SPOTIFY.greySwitchBorder}
              onValueChange={(val) => onToggleDownloaded(val)}
              value={downloaded}
            />
          </View>

          {album.tracks &&
            album.tracks.map((track) => (
              <Components.LineItemSong
                active={song === track.title}
                downloaded={downloaded}
                key={track.title}
                onPress={onChangeSong}
                songData={{
                  album: album.title,
                  artist: album.artist,
                  image: album.image,
                  length: track.seconds,
                  title: track.title
                }}
              />
            ))}
        </View>
        <View style={Constants.STYLES.SPOTIFY.spacer16} />
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  blurview: {
    ...StyleSheet.absoluteFill,
    zIndex: 101
  },
  containerHeader: {
    height: 89,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 100
  },
  headerLinear: {
    height: 89,
    width: '100%'
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: Device.iPhoneNotch ? 48 : 24,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  headerTitle: {
    ...Constants.STYLES.SPOTIFY.textSpotifyBold16,
    color: Constants.COLORS.SPOTIFY.white,
    marginTop: 2,
    paddingHorizontal: 8,
    textAlign: 'center',
    width: Device.width - 100
  },
  containerFixed: {
    alignItems: 'center',
    paddingTop: Device.iPhoneNotch ? 94 : 60,
    position: 'absolute',
    width: '100%'
  },
  containerLinear: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: Device.web ? 5 : 0
  },
  containerImage: {
    shadowColor: Constants.COLORS.SPOTIFY.black,
    shadowOffset: { height: 8, width: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
    zIndex: Device.web ? 20 : 0
  },
  image: {
    height: 148,
    marginBottom: Device.web ? 0 : 16,
    width: 148
  },
  containerTitle: {
    marginTop: Device.web ? 8 : 0,
    zIndex: Device.web ? 20 : 0
  },
  title: {
    ...Constants.STYLES.SPOTIFY.textSpotifyBold20,
    color: Constants.COLORS.SPOTIFY.white,
    marginBottom: 8,
    paddingHorizontal: 24,
    textAlign: 'center'
  },
  containerAlbum: {
    zIndex: Device.web ? 20 : 0
  },
  albumInfo: {
    ...Constants.STYLES.SPOTIFY.textSpotify12,
    color: Constants.COLORS.SPOTIFY.greyInactive,
    marginBottom: 48
  },
  containerScroll: {
    paddingTop: 89
  },
  containerSticky: {
    marginTop: Device.iPhoneNotch ? 238 : 194
  },
  containerShuffle: {
    alignItems: 'center',
    height: 50,
    shadowColor: Constants.COLORS.SPOTIFY.blackBg,
    shadowOffset: { height: -10, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 20
  },
  containerStickyLinear: {
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  btn: {
    backgroundColor: Constants.COLORS.SPOTIFY.brandPrimary,
    borderRadius: 25,
    height: 50,
    width: 220
  },
  btnText: {
    ...Constants.STYLES.SPOTIFY.textSpotifyBold16,
    color: Constants.COLORS.SPOTIFY.white,
    letterSpacing: 1,
    textTransform: 'uppercase'
  },
  containerSongs: {
    alignItems: 'center',
    backgroundColor: Constants.COLORS.SPOTIFY.blackBg,
    minHeight: 540
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    width: '100%'
  },
  downloadText: {
    ...Constants.STYLES.SPOTIFY.textSpotifyBold18,
    color: Constants.COLORS.SPOTIFY.white
  },
});