import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { Text } from '@/components/movies/v4';
import Constants from '@/constants';
import { useDetailsState } from '@/contexts/movies/v4/DetailsContext';
import { toCountdown } from '@/utils/movies-v4';

export function Heading() {
  const { theme } = useSelector(state => state.athena);
  const { data } = useDetailsState();

  return (
    <View style={styles.root}>
      <Text style={{ color: theme.FORECOLOR }} size='xLarge' weight='bold'>
        {data.original_title || data.original_name}
      </Text>
      <View style={styles.row}>
        {Boolean(data.release_date || data.first_air_date) && (
          <Text size='small' style={[styles.feature, { color: theme.TERTIARY }]}>
            {(data.release_date || data.first_air_date).split('-')[0]}
          </Text>
        )}
        {data.genres.length > 0 && (
          <>
            <View style={[styles.dot, { backgroundColor: theme.TERTIARY }]} />
            <Text size='small' style={[styles.feature, { color: theme.TERTIARY }]}>
              {data.genres.map((o) => o.name).join(', ')}
            </Text>
          </>
        )}
        {Boolean(data.runtime) && (
          <>
            <View style={[styles.dot, { backgroundColor: theme.TERTIARY }]} />
            <Text size='small' style={[styles.feature, { color: theme.TERTIARY }]}>
              {toCountdown(data.runtime)}
            </Text>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  row: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  dot: {
    marginHorizontal: 5,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: Constants.STYLES.MOVIES.V4.defaultFontColor,
  },
});