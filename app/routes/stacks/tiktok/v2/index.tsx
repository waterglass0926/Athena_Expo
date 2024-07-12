import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TikTokV2MainStack } from './main';
import Screens from '@/screens/tiktok/v2';
import { navOptionHandler } from '@/utils';

const StackTikTokV2 = createStackNavigator();
export const TikTokV2Stack = () => {
  return (
    <StackTikTokV2.Navigator
      initialRouteName='TikTokV2Splash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackTikTokV2.Screen
        name='TikTokV2Splash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackTikTokV2.Screen
        name='TikTokV2MainStack'
        component={TikTokV2MainStack}
        options={navOptionHandler}
      />
    </StackTikTokV2.Navigator>
  );
};