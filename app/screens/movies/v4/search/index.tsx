import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { SearchInput } from './SearchInput';
import { SearchResults } from './SearchResults';
import { SearchProvider } from '@/contexts/movies/v4/SearchContext';

export function Search() {
  const { theme } = useSelector(state => state.athena);

  return (
    <SearchProvider>
      <View style={[styles.root, { backgroundColor: theme.BACKCOLOR }]}>
        <SearchInput />
        <SearchResults />
      </View>
    </SearchProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
});