import * as React from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { BarMusicPlayer } from './BarMusicPlayer';
import Constants from '@/constants';
import Device from '@/utils/device';
import Images from '@/utils/preload/images';
import Context from '@/contexts/spotify/CreateContext';

// https://reactnavigation.org/docs/5.x/bottom-tab-navigator/#tabbar
export function CustomTabBar({ descriptors, navigation, state }) {
  // get main app state
  const { currentSongData, showMusicBar } = React.useContext(Context);

  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  };

  return (
    <React.Fragment>
      {showMusicBar && <BarMusicPlayer song={currentSongData} />}
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          // default label
          const defaultLabl =
            options.title !== undefined ? options.title : route.name;
          // label set
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : defaultLabl;

          const isFocused = state.index === index;
          const color = isFocused ? Constants.COLORS.SPOTIFY.white : Constants.COLORS.SPOTIFY.greyInactive;

          // custom icon
          const Icon = options?.tabBarIcon;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole='button'
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              activeOpacity={Constants.STYLES.SPOTIFY.activeOpacity}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.containerTab}
            >
              <Icon active={isFocused} />
              <Text style={[styles.label, { color }]}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Constants.STYLES.SPOTIFY.flexRowCenterAlign,
    backgroundColor: Constants.COLORS.SPOTIFY.grey,
    height: 50,
    paddingBottom: Device.iPhoneNotch ? 24 : 16,
    paddingTop: 12
  },
  containerTab: {
    ...Constants.STYLES.SPOTIFY.flex1,
    ...Constants.STYLES.SPOTIFY.flexCenter
  },
  label: {
    ...Constants.STYLES.SPOTIFY.textSpotify12,
    paddingTop: 4
  },
});