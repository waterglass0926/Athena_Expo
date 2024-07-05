import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/paper';
import { navOptionHandler } from '@/utils';

const StackPaper = createStackNavigator();
export const PaperStack = () => {
  return (
    <StackPaper.Navigator
      initialRouteName='PaperSplash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackPaper.Screen
        name='PaperSplash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackPaper.Screen
        name='PaperHome'
        component={Screens.Home}
        options={navOptionHandler}
      />
    </StackPaper.Navigator>
  );
};