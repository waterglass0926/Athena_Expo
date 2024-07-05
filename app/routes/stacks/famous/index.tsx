import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/famous';
import { navOptionHandler } from '@/utils';

const StackFamous = createStackNavigator();
export const FamousStack = () => {
  return (
    <StackFamous.Navigator
      initialRouteName='FamousSplash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackFamous.Screen
        name='FamousSplash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackFamous.Screen
        name='FamousChoose'
        component={Screens.Choose}
        options={navOptionHandler}
      />
      <StackFamous.Screen
        name='FamousGame'
        component={Screens.Game}
        options={navOptionHandler}
      />
      <StackFamous.Screen
        name='FamousFinish'
        component={Screens.Finish}
        options={navOptionHandler}
      />
    </StackFamous.Navigator>
  );
};