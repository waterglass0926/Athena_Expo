import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { HistoryHeader } from './Header';
import { HistoryCard } from './HistoryCard';
import Components from '@/components/translator';
import Constants from '@/constants';
import Functions from '@/utils';
import { HistoryContext } from '@/contexts/translator/HistoryContext';

export const History = () => {
  const { historys } = useContext(HistoryContext);

  return (
    <View style={{ flex: 1 }}>
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

const styles = StyleSheet.create({});