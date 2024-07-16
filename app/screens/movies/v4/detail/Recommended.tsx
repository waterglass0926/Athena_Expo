import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { Text, MediaGrid } from '@/components/movies/v4';
import { useDetailsState } from '@/contexts/movies/v4/DetailsContext';

export function Recommended() {
  const { theme } = useSelector(state => state.athena);
  const { data } = useDetailsState();

  if (
    data.recommendations &&
    data.recommendations.results &&
    data.recommendations.results.length > 0
  ) {
    return (
      <View style={styles.root}>
        <Text style={[styles.title, { color: theme.FORECOLOR }]} size='large' weight='bold'>
          More Like this
        </Text>
        <MediaGrid list={data.recommendations.results} />
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
  },
});