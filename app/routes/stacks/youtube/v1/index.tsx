import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/youtube/v1';
import { navOptionHandler } from '@/utils';

const StackYouTubeV1 = createStackNavigator();
export const YouTubeV1Stack = () => {
  return (
    <StackYouTubeV1.Navigator
      initialRouteName='YouTubeV1Splash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackYouTubeV1.Screen
        name='YouTubeV1Splash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackYouTubeV1.Screen
        name='YouTubeV1Home'
        component={Screens.Home}
        options={navOptionHandler}
      />
    </StackYouTubeV1.Navigator>
  );
};