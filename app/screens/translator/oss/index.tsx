import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { OssHeader } from './Header';
import { OssCard } from './Card';

import oss from '@/assets/data/translator/oss.json';
import Components from '@/components/translator';
import Constants from '@/constants';
import Functions from '@/utils';

const DATA = Object.keys(oss).map(key => ({
  name: key,
  //@ts-ignore
  ...oss[key],
}));

export const Oss = () => {
  return (
    <View style={styles.container}>
      <OssHeader />
      <FlatList
        data={DATA}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <OssCard {...item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.COLORS.DEFAULT.RED,
  },
});