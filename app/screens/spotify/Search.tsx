import * as React from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import BrowseAll from '@/assets/data/spotify/search-browse-all.json';
import TopGenres from '@/assets/data/spotify/search-top-genres.json';
import { SvgSearch } from '@/assets/svgs/spotify/Svg.Search';
import Components from '@/components/spotify';
import Constants from '@/constants';
import Functions from '@/utils';
import Device from '@/utils/device';
import Images from '@/utils/preload/images';
import Context from '@/contexts/spotify/CreateContext';

export function Search() {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  // search start (24 horizontal padding )
  const searchStart = Device.width - 48;
  const searchEnd = Device.width - 88;

  const opacity = scrollY.interpolate({
    inputRange: [0, 48],
    outputRange: [searchStart, searchEnd],
    extrapolate: 'clamp'
  });

  return (
    <React.Fragment>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[1]}
        style={Constants.STYLES.SPOTIFY.container}
      >
        <View style={Constants.STYLES.SPOTIFY.spacer11} />
        <View style={styles.containerSearchBar}>
          <Animated.View style={{ width: opacity }}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => null}
              style={styles.searchPlaceholder}
            >
              <View style={Constants.STYLES.SPOTIFY.mR1}>
                <SvgSearch />
              </View>
              <Text style={styles.searchPlaceholderText}>
                Artists, songs or podcasts
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>

        <Text style={styles.sectionHeading}>Your top genres</Text>
        <View style={styles.containerRow}>
          {Object.keys(TopGenres).map((index) => {
            const item = TopGenres[index];

            return (
              <View key={item.id} style={styles.containerColumn}>
                <Components.PlaylistItem
                  bgColor={item.color}
                  onPress={() => null}
                  title={item.title}
                />
              </View>
            );
          })}
        </View>

        <Text style={styles.sectionHeading}>Browse all</Text>
        <View style={styles.containerRow}>
          {Object.keys(BrowseAll).map((index) => {
            const item = BrowseAll[index];

            return (
              <View key={item.id} style={styles.containerColumn}>
                <Components.PlaylistItem
                  bgColor={item.color}
                  onPress={() => null}
                  title={item.title}
                />
              </View>
            );
          })}
        </View>
      </Animated.ScrollView>

      <View style={styles.iconRight}>
        <Components.TouchIcon
          icon={<FontAwesome color={Constants.COLORS.SPOTIFY.white} name='microphone' />}
          onPress={() => null}
        />
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  containerSearchBar: {
    ...Constants.STYLES.SPOTIFY.pH3,
    backgroundColor: Constants.COLORS.SPOTIFY.blackBg,
    paddingBottom: 16,
    paddingTop: Device.iPhoneNotch ? 64 : 24
  },
  searchPlaceholder: {
    alignItems: 'center',
    backgroundColor: Constants.COLORS.SPOTIFY.white,
    borderRadius: 6,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingVertical: 16
  },
  searchPlaceholderText: {
    ...Constants.STYLES.SPOTIFY.textSpotify16,
    color: Constants.COLORS.SPOTIFY.blackBg
  },
  sectionHeading: {
    ...Constants.STYLES.SPOTIFY.textSpotifyBold18,
    color: Constants.COLORS.SPOTIFY.white,
    marginBottom: 24,
    marginLeft: 24,
    marginTop: 16
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 24
  },
  containerColumn: {
    width: '50%'
  },
  iconRight: {
    alignItems: 'center',
    height: 28,
    justifyContent: 'center',
    position: 'absolute',
    right: 24,
    top: Device.web ? 40 : 78,
    width: 28
  }
});