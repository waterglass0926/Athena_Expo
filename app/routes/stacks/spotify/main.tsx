import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SpotifyBottomTab } from '@/routes/tabs/spotify/bottom';
import Screens from '@/screens/spotify';
import { navOptionHandler } from '@/utils';

const StackSpotifyMain = createStackNavigator();
export const SpotifyMainStack = () => {
  return (
    <StackSpotifyMain.Navigator
      initialRouteName='SpotifyBottomTab'
      screenOptions={{
        gestureEnabled: false,
        presentation: 'fullScreenModal'
      }}
    >
      <StackSpotifyMain.Screen
        name='SpotifyBottomTab'
        component={SpotifyBottomTab}
        options={navOptionHandler}
      />
      <StackSpotifyMain.Screen
        name='SpotifyModalMusicPlayer'
        component={Screens.ModalMusicPlayer}
        options={navOptionHandler}
      />
      <StackSpotifyMain.Screen
        name='SpotifyModalMoreOptions'
        component={Screens.ModalMoreOptions}
        options={{
          animation: 'slide_from_bottom',
          headerShown: false,
          presentation: 'transparentModal'
        }}
      />
    </StackSpotifyMain.Navigator>
  );
};