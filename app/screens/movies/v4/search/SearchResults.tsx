import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ScrollView, StyleSheet, View } from 'react-native';

import { HintLayout, LoadingLayout, Text, MediaGrid } from '@/components/movies/v4';
import { useSearchActions, useSearchState } from '@/contexts/movies/v4/SearchContext';

export function SearchResults() {
  const { theme } = useSelector(state => state.athena);
  const { isLoading, error, results, searchedKw } = useSearchState();
  const { fetchResults } = useSearchActions();

  if (isLoading) {
    return <LoadingLayout />;
  } else if (error) {
    return (
      <HintLayout
        message='Failed to load results'
        actionLabel='Try again'
        actionFn={fetchResults}
      />
    );
  } else if (results.length > 0) {
    return (
      <ScrollView style={styles.root}>
        <Text style={[styles.hint, { color: theme.FORECOLOR }]}>
          Showing {results.length} results for {searchedKw}
        </Text>
        <MediaGrid list={results} />
      </ScrollView>
    );
  } else if (searchedKw.length === 0) {
    return (
      <HintLayout message='Search for your favorite movies and tv series' />
    );
  } else {
    return <HintLayout message='No results found!' />;
  }
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  hint: {
    margin: 10,
  },
  slides: {
    height: '100%',
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  card: {
    padding: 5,
    width: '33.33%',
  },
  row: {
    flexDirection: 'row',
  },
});