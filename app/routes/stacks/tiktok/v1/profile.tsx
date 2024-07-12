import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/tiktok/v1';
import { navOptionHandler } from '@/utils';

const StackTikTokV1Profile = createStackNavigator();
export const TikTokV1ProfileStack = () => {
  return (
    <StackTikTokV1Profile.Navigator
      initialRouteName='TikTokV1Profile'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackTikTokV1Profile.Screen
        name='TikTokV1Profile'
        component={Screens.Profile}
        options={navOptionHandler}
      />
    </StackTikTokV1Profile.Navigator>
  );
};