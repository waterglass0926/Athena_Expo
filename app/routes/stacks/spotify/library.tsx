import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/spotify';
import { navOptionHandler } from '@/utils';

const StackSpotifyLibrary = createStackNavigator();
export const SpotifyLibraryStack = () => {
  return (
    <StackSpotifyLibrary.Navigator
      initialRouteName='SpotifyLibrary'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackSpotifyLibrary.Screen
        name='SpotifyLibrary'
        component={Screens.Library}
        options={navOptionHandler}
      />
    </StackSpotifyLibrary.Navigator>
  );
};