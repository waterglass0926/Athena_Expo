import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/tiktok';
import { navOptionHandler } from '@/utils';

const StackTikTokHome = createStackNavigator();
export default TikTokHomeStack = () => {
  return (
    <StackTikTokHome.Navigator
      initialRouteName='TikTokHome'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackTikTokHome.Screen
        name='TikTokHome'
        component={Screens.Home}
        options={navOptionHandler}
      />
    </StackTikTokHome.Navigator>
  );
};