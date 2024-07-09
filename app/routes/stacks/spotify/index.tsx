import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SpotifyMainStack } from './main';
import Screens from '@/screens/spotify';
import { navOptionHandler } from '@/utils';

const StackSpotify = createStackNavigator();
export const SpotifyStack = () => {
  return (
    <StackSpotify.Navigator
      initialRouteName='SpotifySplash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackSpotify.Screen
        name='SpotifySplash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackSpotify.Screen
        name='SpotifyMainStack'
        component={SpotifyMainStack}
        options={navOptionHandler}
      />
    </StackSpotify.Navigator>
  );
};