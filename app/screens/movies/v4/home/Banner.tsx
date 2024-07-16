import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { Button, HintLayout, IconButton, LoadingLayout } from '@/components/movies/v4';
import Constants from '@/constants';
import { useTrendingState } from '@/contexts/movies/v4/TrendingContext';
import { generateImageUrl, ImageSizes } from '@/utils/movies-v4';

export function Banner() {
  const navigation = useNavigation();
  const { trending, isLoading, error } = useTrendingState();

  if (isLoading) {
    return (
      <View style={styles.root}>
        <LoadingLayout />
      </View>
    );
  } else if (error) {
    return (
      <View style={styles.root}>
        <HintLayout message='Failed to load!' />
      </View>
    );
  } else if (trending.length > 0) {
    const mostTrending = trending[0];
    return (
      <ImageBackground
        style={styles.root}
        source={{
          uri: generateImageUrl(mostTrending.poster_path, ImageSizes.poster),
        }}
        resizeMode='cover'
      >
        <LinearGradient
          style={styles.actions}
          colors={[Constants.STYLES.MOVIES.V4.gradientLightColor, Constants.STYLES.MOVIES.V4.gradientDarkColor]}
        >
          <Button
            icon='play'
            style={styles.mainAction}
            label='Play'
            onPress={() =>
              navigation.push('MoviesV4Detail', {
                mediaType: mostTrending.media_type,
                id: mostTrending.id,
              })
            }
          />
        </LinearGradient>
      </ImageBackground>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    aspectRatio: Constants.STYLES.MOVIES.V4.posterAspectRatio,
  },
  actions: {
    bottom: 0,
    left: 0,
    width: '100%',
    position: 'absolute',
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: Constants.STYLES.MOVIES.V4.headerHeight,
  },
  mainAction: {
    marginHorizontal: 0,
  },
});