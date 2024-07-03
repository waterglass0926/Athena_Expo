import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/world';
import { navOptionHandler } from '@/utils';

const StackWorldHome = createStackNavigator();
export const WorldHomeStack = () => {
  return (
    <StackWorldHome.Navigator
      initialRouteName='WorldHome'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackWorldHome.Screen
        name='WorldHome'
        component={Screens.Home}
        options={navOptionHandler}
      />
      {/* <StackWorldHome.Screen
        name='WorldContinents'
        component={WorldContinents}
        options={navOptionHandler}
      /> */}
    </StackWorldHome.Navigator>
  );
};