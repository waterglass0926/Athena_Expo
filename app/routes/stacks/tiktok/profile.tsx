import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/tiktok';
import { navOptionHandler } from '@/utils';

const StackTikTokProfile = createStackNavigator();
export const TikTokProfileStack = () => {
  return (
    <StackTikTokProfile.Navigator
      initialRouteName='TikTokProfile'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackTikTokProfile.Screen
        name='TikTokProfile'
        component={Screens.Profile}
        options={navOptionHandler}
      />
    </StackTikTokProfile.Navigator>
  );
};