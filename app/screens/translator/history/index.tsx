import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FlatList, View } from 'react-native';

import { HistoryHeader } from './Header';
import { HistoryCard } from './HistoryCard';
import Components from '@/components/translator';
import Constants from '@/constants';
import Functions from '@/utils';
import { HistoryContext } from '@/contexts/translator/HistoryContext';

export const History = () => {
  const { historys } = useContext(HistoryContext);
  const dispatch = useDispatch();
  const { theme } = useSelector((state: StateType) => state.athena);

  return (
    <View style={{ flex: 1, backgroundColor: theme.BACKCOLOR }}>
      <HistoryHeader />
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 16 }}
        data={historys}
        ListHeaderComponent={<View style={{ height: 24 }} />}
        ListFooterComponent={<View style={{ height: 100 }} />}
        renderItem={({ item }) => <HistoryCard {...item} />}
      />
    </View>
  );
};