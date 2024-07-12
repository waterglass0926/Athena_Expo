import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/tiktok/v1';
import { navOptionHandler } from '@/utils';

const StackTikTokV1Discover = createStackNavigator();
export const TikTokV1DiscoverStack = () => {
  return (
    <StackTikTokV1Discover.Navigator
      initialRouteName='TikTokV1Discover'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackTikTokV1Discover.Screen
        name='TikTokV1Discover'
        component={Screens.Discover}
        options={navOptionHandler}
      />
    </StackTikTokV1Discover.Navigator>
  );
};