import * as React from 'react';

import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Constants from '@/constants';
import Images from '@/utils/preload/images';

export function AlbumsHorizontal({ data, heading, tagline }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {heading && <Text style={styles.heading}>{heading}</Text>}
      {tagline && <Text style={styles.tagline}>{tagline}</Text>}

      <FlatList
        contentContainerStyle={styles.containerContent}
        data={data}
        horizontal
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={Constants.STYLES.SPOTIFY.activeOpacity}
            hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}
            onPress={() => navigation.navigate('SpotifyAlbum', { title: item.title })}
            style={styles.item}
          >
            <View style={styles.image}>
              {item.image && (
                <Image source={Images[item.image]} style={styles.image} />
              )}
            </View>
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
    width: '100%'
  },
  containerContent: {
    paddingLeft: 16
  },
  heading: {
    ...Constants.STYLES.SPOTIFY.textSpotifyBold18,
    color: Constants.COLORS.SPOTIFY.white,
    paddingBottom: 6,
    textAlign: 'center'
  },
  tagline: {
    ...Constants.STYLES.SPOTIFY.textSpotify12,
    color: Constants.COLORS.SPOTIFY.greyInactive,
    paddingBottom: 6,
    textAlign: 'center'
  },
  item: {
    marginRight: 16,
    width: 148
  },
  image: {
    backgroundColor: Constants.COLORS.SPOTIFY.greyLight,
    height: 148,
    width: 148
  },
  title: {
    ...Constants.STYLES.SPOTIFY.textSpotifyBold12,
    color: Constants.COLORS.SPOTIFY.white,
    marginTop: 4,
    textAlign: 'center'
  },
});
