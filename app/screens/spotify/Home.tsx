import * as React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import HeavyRotation from '@/assets/data/spotify/heavy-rotation.json';
import JumpBackIn from '@/assets/data/spotify/jump-back-in.json';
import RecentlyPlayed from '@/assets/data/spotify/recently-played.json';

import Comonents from '@/components/spotify';
import Constants from '@/constants';
import Device from '@/utils/device';

export function Home() {
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const opacityIn = scrollY.interpolate({
    inputRange: [0, 128],
    outputRange: [0, 1],
    extrapolate: 'clamp'
  });

  const opacityOut = scrollY.interpolate({
    inputRange: [0, 88],
    outputRange: [1, 0],
    extrapolate: 'clamp'
  });

  return (
    <React.Fragment>
      {Device.iPhoneNotch && (
        <Animated.View style={[styles.iPhoneNotch, { opacity: opacityIn }]} />
      )}

      <Animated.View style={[styles.containerHeader, { opacity: opacityOut }]}>
        <FontAwesome color={Constants.COLORS.SPOTIFY.white} name='cog' size={28} />
      </Animated.View>

      <Animated.ScrollView
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        style={Constants.STYLES.SPOTIFY.container}
      >
        <View style={Constants.STYLES.SPOTIFY.spacer16} />

        <Comonents.AlbumsHorizontal data={RecentlyPlayed} heading='Recently played' />

        <Comonents.AlbumsHorizontal
          data={HeavyRotation}
          heading='Your heavy rotation'
          tagline="The music you've had on repeat this month."
        />

        <Comonents.AlbumsHorizontal
          data={JumpBackIn}
          heading='Jump back in'
          tagline='Your top listens from the past few months.'
        />
      </Animated.ScrollView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  iPhoneNotch: {
    backgroundColor: Constants.COLORS.SPOTIFY.black70,
    height: 44,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 20
  },
  containerHeader: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: Device.iPhoneNotch ? 60 : 36,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 10
  },
});