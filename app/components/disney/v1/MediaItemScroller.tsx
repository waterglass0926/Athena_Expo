import * as React from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';

import data from '@/assets/data/disney/v1';
import Constants from '@/constants';

export const MediaItemScroller = ({ dataset }) => {
  const dataArray = Object.values(data[dataset]);

  return (
    <FlatList
      contentContainerStyle={styles.containerFlatList}
      data={dataArray}
      horizontal
      keyExtractor={({ id }) => id.toString()}
      renderItem={({ item }) => {
        const renderItem = item.image ? (
          <Image source={Constants.IAMGES.DISNEY.V1[item.image]} style={styles.image} />
        ) : (
          <View style={styles.placeholder} />
        );

        return <View style={styles.item}>{renderItem}</View>;
      }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  containerFlatList: {
    paddingLeft: 16,
    paddingRight: 8
  },
  item: {
    borderRadius: 4,
    height: 130,
    marginRight: 8,
    overflow: 'hidden',
    width: 93
  },
  placeholder: {
    backgroundColor: Constants.COLORS.DISNEY.V1.infoGrey,
    height: '100%',
    width: '100%'
  },
  image: {
    height: '100%',
    resizeMode: 'contain',
    width: '100%'
  }
});