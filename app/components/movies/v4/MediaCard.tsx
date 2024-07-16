import React from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import logo from '@/assets/images/movies/v4/logo.png';
import Constants from '@/constants';
import { generateImageUrl, ImageSizes } from '@/utils/movies-v4';

export function MediaCard({ data, freeWidth = false, style = {}, ...remainingProps }) {
  const navigation = useNavigation();
  let imageSource = logo,
    isPlaceholder = true;
  if (data.poster_path) {
    imageSource = { uri: generateImageUrl(data.poster_path, ImageSizes.card) };
    isPlaceholder = false;
  }
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.push('MoviesV4Detail', {
          mediaType: data.media_type,
          id: data.id,
        })
      }
      style={[styles.root, style]}
      {...remainingProps}
    >
      <ImageBackground
        resizeMode={isPlaceholder ? 'center' : 'cover'}
        style={[styles.poster, !freeWidth && styles.fixedWidth]}
        source={imageSource}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    borderRadius: Constants.STYLES.MOVIES.V4.borderRadius,
    overflow: 'hidden',
  },
  poster: {
    backgroundColor: Constants.STYLES.MOVIES.V4.secondaryBackgroundColor,
    aspectRatio: Constants.STYLES.MOVIES.V4.posterAspectRatio,
  },
  fixedWidth: {
    width: Constants.STYLES.MOVIES.V4.cardWidth,
  },
});