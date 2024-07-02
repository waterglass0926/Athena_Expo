import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { WorldAuthStack } from './auth';
// import { WorldMainDrawer } from '@/routes/drawers/world/main';
import Screens from '@/screens/world';
import { navOptionHandler } from '@/utils';

const StackWorld = createStackNavigator();
export const WorldStack = () => {
  return (
    <StackWorld.Navigator
      initialRouteName='WorldSplash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackWorld.Screen
        name='WorldSplash'
        component={Screens.Start}
        options={navOptionHandler}
      />
      <StackWorld.Screen
        name='WorldAuthStack'
        component={WorldAuthStack}
        options={navOptionHandler}
      />
      {/* <StackWorld.Screen
        name='WorldMainDrawer'
        component={WorldMainDrawer}
        options={navOptionHandler}
      /> */}
    </StackWorld.Navigator>
  );
};