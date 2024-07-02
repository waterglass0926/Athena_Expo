import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/world';
import { navOptionHandler } from '@/utils';

const StackWorldProfile = createStackNavigator();
export const WorldProfileStack = () => {
  return (
    <StackWorldProfile.Navigator
      initialRouteName='WorldProfile'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackWorldProfile.Screen
        name='WorldProfile'
        component={Screens.Profile}
        options={navOptionHandler}
      />
    </StackWorldProfile.Navigator>
  );
};