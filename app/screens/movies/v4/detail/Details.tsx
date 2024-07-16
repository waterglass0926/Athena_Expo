import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Linking, ScrollView, StyleSheet, View } from 'react-native';

import { Heading } from './Heading';
import { Recommended } from './Recommended';
import { VideoPlayer } from './VideoPlayer';

import Constants from '@/constants';
import { Button, HintLayout, LoadingLayout, Text } from '@/components/movies/v4';
import { useDetailsState } from '@/contexts/movies/v4/DetailsContext';

export function Details() {
  const { theme } = useSelector(state => state.athena);
  const { isLoading, error, data } = useDetailsState();

  if (isLoading) {
    return <LoadingLayout />;
  } else if (error) {
    return <HintLayout message='Failed to load details!' />;
  } else if (data) {
    return (
      <View style={[styles.root, { backgroundColor: theme.BACKCOLOR }]}>
        <VideoPlayer />
        <ScrollView style={styles.details}>
          <Heading />
          {Boolean(data.homepage) && (
            <Button
              onPress={() => Linking.openURL(data.homepage)}
              style={[styles.action, { backgroundColor: theme.PRIMARY }]}
              icon='external-link'
              label='Visit website'
              type='white'
            />
          )}
          {Boolean(data.overview) && (
            <Text style={[styles.overview, { color: theme.TERTIARY }]} size='small'>
              {data.overview}
            </Text>
          )}
          <Recommended />
        </ScrollView>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'stretch',
  },
  action: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  overview: {
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  details: {
    flex: 1,
  },
});