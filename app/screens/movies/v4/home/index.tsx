import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Banner } from './Banner';
import { Header } from './Header';
import { Trending } from './Trending';
import { TrendingProvider } from '@/contexts/movies/v4/TrendingContext';

export function Home() {
  const { theme } = useSelector(state => state.athena);

  return (
    <TrendingProvider>
      <View style={[styles.root, { backgroundColor: theme.BACKCOLOR }]}>
        <Header />
        <ScrollView style={styles.content}>
          <Banner />
          <Trending />
        </ScrollView>
      </View>
    </TrendingProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
  content: {},
});