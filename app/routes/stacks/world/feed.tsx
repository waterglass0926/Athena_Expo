import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/world';
import { navOptionHandler } from '@/utils';

const StackWorldFeed = createStackNavigator();
export const WorldFeedStack = () => {
  return (
    <StackWorldFeed.Navigator
      initialRouteName='WorldFeed'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackWorldFeed.Screen
        name='WorldFeed'
        component={Screens.Feed}
        options={navOptionHandler}
      />
    </StackWorldFeed.Navigator>
  );
};