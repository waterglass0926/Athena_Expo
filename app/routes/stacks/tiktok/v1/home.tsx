import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/tiktok/v1';
import { navOptionHandler } from '@/utils';

const StackTikTokV1Home = createStackNavigator();
export const TikTokV1HomeStack = () => {
  return (
    <StackTikTokV1Home.Navigator
      initialRouteName='TikTokV1Home'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackTikTokV1Home.Screen
        name='TikTokV1Home'
        component={Screens.Home}
        options={navOptionHandler}
      />
    </StackTikTokV1Home.Navigator>
  );
};