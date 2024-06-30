import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { FlatList, StyleSheet, Text, View } from 'react-native';

import { HistoryHeader } from './Header';
import { HistoryCard } from './HistoryCard';
import Components from '@/components/translator';
import Constants from '@/constants';
import Functions from '@/utils';
import { HistoryContext } from '@/contexts/translator/HistoryContext';
import { ThemeType } from '@/types/athena';

export const History = () => {
  const { historys } = useContext(HistoryContext);
  const dispatch = useDispatch();
  const { load, theme } = useSelector((state: StateType) => state.athena);

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

const styles = StyleSheet.create({});