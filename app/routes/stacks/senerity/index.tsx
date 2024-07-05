import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SenerityAppStack } from './app';
import Screens from '@/screens/senerity';
import { navOptionHandler } from '@/utils';

const StackSenerity = createStackNavigator();
export const SenerityStack = () => {
  return (
    <StackSenerity.Navigator
      initialRouteName='SeneritySplash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackSenerity.Screen
        name='SeneritySplash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackSenerity.Screen
        name='SenerityAppStack'
        component={SenerityAppStack}
        options={navOptionHandler}
      />
      <StackSenerity.Screen
        name='SenerityIntroduction'
        component={Screens.Introduction}
        options={navOptionHandler}
      />
      <StackSenerity.Screen
        name='SenerityLaunch'
        component={Screens.Launch}
        options={navOptionHandler}
      />
    </StackSenerity.Navigator>
  );
};