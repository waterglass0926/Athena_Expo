import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TikTokV1BottomTab } from '@/routes/tabs/tiktok/v1/bottom';
import Screens from '@/screens/tiktok/v1';
import { navOptionHandler } from '@/utils';

const StackTikTokV1 = createStackNavigator();
export const TikTokV1Stack = () => {
  return (
    <StackTikTokV1.Navigator
      initialRouteName='TikTokV1Splash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackTikTokV1.Screen
        name='TikTokV1Splash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackTikTokV1.Screen
        name='TikTokV1BottomTab'
        component={TikTokV1BottomTab}
        options={navOptionHandler}
      />
    </StackTikTokV1.Navigator>
  );
};