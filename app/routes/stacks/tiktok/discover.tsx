import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/tiktok';
import { navOptionHandler } from '@/utils';

const StackTikTokDiscover = createStackNavigator();
export default TikTokDiscoverStack = () => {
  return (
    <StackTikTokDiscover.Navigator
      initialRouteName='TikTokDiscover'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackTikTokDiscover.Screen
        name='TikTokDiscover'
        component={Screens.Discover}
        options={navOptionHandler}
      />
    </StackTikTokDiscover.Navigator>
  );
};