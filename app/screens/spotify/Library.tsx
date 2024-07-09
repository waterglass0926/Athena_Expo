import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import YourLibrary from '@/assets/data/spotify/menu-your-library.json';
import Components from '@/components/spotify';
import Constants from '@/constants';
import Device from '@/utils/device';

export function Library() {
  return (
    <View style={Constants.STYLES.SPOTIFY.container}>
      <View style={styles.containerHeader}>
        <Components.ScreenHeader title='Your Library' />
      </View>

      <FlatList
        contentContainerStyle={styles.containerFlatlist}
        data={YourLibrary}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <Components.LineItemCategory
            icon={item.icon}
            onPress={() => null}
            title={item.title}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 10
  },
  containerFlatlist: {
    marginTop: Device.iPhoneNotch ? 88 : 64
  },
});