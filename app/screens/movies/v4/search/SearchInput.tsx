import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Constants from '@/constants';
import { useSearchActions, useSearchState } from '@/contexts/movies/v4/SearchContext';

export function SearchInput() {
  const { theme } = useSelector(state => state.athena);
  const { kw } = useSearchState();
  const { fetchResults, setKw } = useSearchActions();

  return (
    <View style={[styles.root, { backgroundColor: theme.SECONDARY }]}>
      <Feather
        color={Constants.STYLES.MOVIES.V4.hintFontColor}
        style={styles.icon}
        name='search'
        size={16}
      />
      <TextInput
        autoFocus
        clearButtonMode='always'
        style={[styles.input, { color: theme.FORECOLOR }]}
        value={kw}
        onChangeText={setKw}
        returnKeyType='search'
        onSubmitEditing={fetchResults}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    margin: 10,
    marginTop: 64,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flexGrow: 1,
    color: Constants.STYLES.MOVIES.V4.defaultFontColor,
  },
});