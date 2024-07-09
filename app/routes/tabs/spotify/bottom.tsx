import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';

import { Text } from 'react-native';

import { SpotifyHomeStack } from '@/routes/stacks/spotify/home';
import { SpotifySearchStack } from '@/routes/stacks/spotify/search';
import { SpotifyLibraryStack } from '@/routes/stacks/spotify/library';

import Screens from '@/screens/spotify';
import Components from '@/components/spotify';
import Constants from '@/constants';
import Functions, { navOptionHandler } from '@/utils';

import { SvgTabHome } from '@/assets/svgs/spotify/Svg.TabHome';
import { SvgTabLibrary } from '@/assets/svgs/spotify/Svg.TabLibrary';
import { SvgTabSearch } from '@/assets/svgs/spotify/Svg.TabSearch';

const TabSpotifyBottom = createBottomTabNavigator();
export const SpotifyBottomTab = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <TabSpotifyBottom.Navigator
      initialRouteName='SpotifyHomeStack'
      screenOptions={({ route }) => ({
        // headerShown: false,
        tabBarIcon: ({ focused }) => {
          let icon = <SvgTabHome active={focused} />;

          if (route.name === 'SpotifySearchStack') {
            icon = <SvgTabSearch active={focused} />;
          } else if (route.name === 'SpotifyLibraryStack') {
            icon = <SvgTabLibrary active={focused} />;
          }

          return icon;
        },
        tabBarActiveTintColor: Constants.COLORS.SPOTIFY.white,
        tabBarInactiveTintColor: Constants.COLORS.SPOTIFY.greyInactive
      })}
      tabBar={(props) => <Components.CustomTabBar {...props} />}
    >
      <TabSpotifyBottom.Screen
        name='SpotifyHomeStack'
        component={SpotifyHomeStack}
        options={navOptionHandler}
        tabBarLabel='Home'
      />
      <TabSpotifyBottom.Screen
        name='SpotifySearchStack'
        component={SpotifySearchStack}
        options={navOptionHandler}
        tabBarLabel='Search'
      />
      <TabSpotifyBottom.Screen
        name='SpotifyLibraryStack'
        component={SpotifyLibraryStack}
        options={navOptionHandler}
        tabBarLabel='Library'
      />
    </TabSpotifyBottom.Navigator>
  );
};