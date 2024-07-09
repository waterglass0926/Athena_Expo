import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/spotify';
import { navOptionHandler } from '@/utils';

const StackSpotifySearch = createStackNavigator();
export const SpotifySearchStack = () => {
  return (
    <StackSpotifySearch.Navigator
      initialRouteName='SpotifySearch'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackSpotifySearch.Screen
        name='SpotifySearch'
        component={Screens.Search}
        options={navOptionHandler}
      />
    </StackSpotifySearch.Navigator>
  );
};