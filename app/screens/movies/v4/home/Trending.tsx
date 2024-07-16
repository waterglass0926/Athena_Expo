import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, StyleSheet, View } from 'react-native';

import { HintLayout, LoadingLayout, Text, MediaCard } from '@/components/movies/v4';
import { useTrendingState } from '@/contexts/movies/v4/TrendingContext';

export function Trending() {
  const { theme } = useSelector(state => state.athena);
  const { trending, isLoading, error } = useTrendingState();

  if (isLoading) {
    return <LoadingLayout />;
  } else if (error) {
    return <HintLayout message='Failed to load' />;
  } else {
    return (
      <View style={[styles.root, { backgroundColor: theme.BACKCOLOR }]}>
        <Text style={[styles.title, { color: theme.FORECOLOR }]} size='large' weight='bold'>
          Trending
        </Text>
        <ScrollView style={styles.slides} horizontal>
          {trending.map((item) => (
            <MediaCard
              key={`${item.media_type}/${item.id}`}
              style={styles.card}
              data={item}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  root: {
    marginVertical: 15,
  },
  title: {
    marginBottom: 10,
    marginLeft: 10,
  },
  slides: {
    paddingHorizontal: 5,
  },
  card: {
    marginHorizontal: 5,
  },
});