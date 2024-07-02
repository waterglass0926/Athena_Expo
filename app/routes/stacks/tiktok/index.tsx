import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TikTokBottomTab } from '@/routes/tabs/tiktok/bottom';
import Screens from '@/screens/tiktok';
import { navOptionHandler } from '@/utils';

const StackTikTok = createStackNavigator();
export const TikTokStack = () => {
  return (
    <StackTikTok.Navigator
      initialRouteName='TikTokSplash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackTikTok.Screen
        name='TikTokSplash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackTikTok.Screen
        name='TikTokBottomTab'
        component={TikTokBottomTab}
        options={navOptionHandler}
      />
    </StackTikTok.Navigator>
  );
};