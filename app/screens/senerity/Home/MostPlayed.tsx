import React from 'react';
import { Screen } from '@serenity/components';
import { useAppSelector, historySelectors } from '@serenity/core';

import { FlatList } from 'react-native';

import Components from '@/components/serenity';
import { useMostRepeated } from '@/hooks/senerity/useMostRepeated';

export function MostPlayed() {
  const songs = useAppSelector(state => historySelectors.selectIds(state));
  var mostPlayedSongs = useMostRepeated(songs);

  if (!songs) return null;
  return (
    <Screen>
      <FlatList
        data={mostPlayedSongs}
        ListEmptyComponent={() => (
          <Components.EmptyPlaylist />
        )}
        keyExtractor={(index) => `history-${index.toString()}`}
        renderItem={({ item }) => <Components.HistoryItem id={item} />}
      />
    </Screen>
  );
};