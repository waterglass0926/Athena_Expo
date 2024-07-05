
import * as React from 'react';
import { List } from 'react-native-paper';
import { Meditations } from '@serenity/extensions';
import { addSongsToQueue, Player, useAppDispatch } from '@serenity/core';
import { useCollapsibleHeader } from 'react-navigation-collapsible';
import { Container, Spinner } from '@serenity/components';
import { useQuery } from 'react-query';

import { RefreshControl, Animated } from 'react-native';

import Components from '@/components/serenity';

export interface MeditationProps {

};

export function Meditation({ route }: MeditationProps) {
  const { meditation } = route.params;

  const options = {
    navigationOptions: {
      headerStyle: { backgroundColor: 'transparent' } /* Optional */,
      title: '',
    },
    config: {
      collapsedColor: 'transparent' /* Optional */,
      useNativeDriver: true /* Optional, default: true */,
      elevation: 0 /* Optional */,
      disableOpacity: true /* Optional, default: false */,
    },
  };

  const {
    onScroll,
    containerPaddingTop,
    scrollIndicatorInsetTop,
  } = useCollapsibleHeader(options);

  const { data, isLoading, refetch, isFetching } = useQuery(['meditation', meditation.id], () => Meditations.getMeditation(meditation.url))

  const dispatch = useAppDispatch();

  async function playAudio(song) {
    const url = await Meditations.playMeditation(song.path);
    const track = {
      ...song,
      path: url,
    }
    dispatch(Player.playSong(track));
  };

  function addSongToQueue() {
    dispatch(addSongsToQueue(data));
  };

  if (isLoading) return <Container style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><Spinner /></Container>

  return (
    <Animated.FlatList
      onScroll={onScroll}
      contentContainerStyle={{ paddingTop: containerPaddingTop }}
      scrollIndicatorInsets={{ top: scrollIndicatorInsetTop }}
      data={data}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={() => (
        <Components.MeditationListHeader
          title={meditation.title}
          description={meditation.description}
          cover={meditation.cover}
          addSongsToQueue={addSongToQueue}
        />
      )}
      showsHorizontalScrollIndicator={false}
      refreshing={isLoading}
      refreshControl={
        <RefreshControl
          refreshing={isFetching}
          onRefresh={refetch}
          colors={['#12c2e9', '#c471ed', '#f64f59']}
        />
      }
      renderItem={({ item }) => (
        <List.Item
          title={item.title}
          titleStyle={{ fontSize: 14 }}
          descriptionStyle={{ fontSize: 12 }}
          titleNumberOfLines={2}
          onPress={() => playAudio(item)}
          description={`${item.artist} - ${item.description}`}
          left={props => <Components.ArtCover {...props} cover={item.cover} style={{ height: 62, width: 122 }} />}
        />
      )}
    />
  );
};