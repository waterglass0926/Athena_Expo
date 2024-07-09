import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/spotify';
import { navOptionHandler } from '@/utils';

const StackSpotifyHome = createStackNavigator();
export const SpotifyHomeStack = () => {
  return (
    <StackSpotifyHome.Navigator
      initialRouteName='SpotifyHome'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackSpotifyHome.Screen
        name='SpotifyHome'
        component={Screens.Home}
        options={navOptionHandler}
      />
      <StackSpotifyHome.Screen
        name='SpotifyAlbum'
        component={Screens.Album}
        options={navOptionHandler}
        initialParams={{ title: 'Extraordinary Machine' }}
      />
    </StackSpotifyHome.Navigator>
  );
};