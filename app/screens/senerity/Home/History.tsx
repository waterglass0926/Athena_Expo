import React from 'react';
import { Screen, Title } from '@serenity/components';
import { useAppSelector, historySelectors } from '@serenity/core';

import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import dayjs from 'dayjs';

import { SectionList, View } from 'react-native';

import Components from '@/components/serenity';

export function History() {
  const [refreshing, setRefreshing] = React.useState(false);
  const songs = useAppSelector(state => historySelectors.selectEntities(state));
  const [data, setData] = React.useState([]);

  function sortSongs() {
    setRefreshing(true);
    const grouping = groupBy(songs, element => element?.date)
    const sections = map(grouping, (items, date) => ({
      title: date,
      data: items
    }));
    const orderedSections = orderBy(sections, section => section.title, 'desc');
    setData(orderedSections);
    setRefreshing(false);
  };

  React.useEffect(() => {
    sortSongs();
  }, []);

  return (
    <Screen>
      <SectionList
        sections={data}
        ListEmptyComponent={() => (
          <Components.EmptyPlaylist />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={{ marginVertical: 8, marginHorizontal: 4 }}>
            <Title >{dayjs(title, 'l').format("ddd, D MMM YYYY")}</Title>
          </View>
        )}
        refreshing={refreshing}
        onRefresh={sortSongs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Components.HistoryItem id={item.id} />}
      />
    </Screen>
  );
}