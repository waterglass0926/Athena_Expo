import React from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Components from '@/components/instagram/v2';
import { Posts } from './Posts';

export const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle='dark-content' backgroundColor='#fff' />
      <Components.Header>
        <View style={styles.row}>
          <FeatherIcon style={styles.icon} name='camera' size={25} />
          <View style={styles.instagramTextLogoContainer}>
            <Image
              source={require('@/assets/images/instagram/v2/instagram-text-logo.png')}
              resizeMode='contain'
              style={styles.instagramTextLogo}
            />
          </View>
        </View>
        <View style={styles.leftIconsContainer}>
          <FeatherIcon style={styles.icon} name='plus' size={25} />
          <FeatherIcon
            style={[styles.icon, { marginLeft: 5 }]}
            name='send'
            size={22}
          />
        </View>
      </Components.Header>
      <Posts />
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', flex: 1, alignItems: 'center' },
  instagramTextLogoContainer: { paddingHorizontal: 10 },
  instagramTextLogo: {
    alignSelf: 'flex-start',
    height: 40,
    width: 40 * 3,
  },
  leftIconsContainer: { flexDirection: 'row' },
  icon: { padding: 5 },
});
