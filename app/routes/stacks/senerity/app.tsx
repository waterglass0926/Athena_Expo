import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SenerityBottomTab } from '@/routes/tabs/senerity/bottom';
import { SenerityPlayerStack } from './player';
import Screens from '@/screens/senerity';
import { navOptionHandler } from '@/utils';

const StackSenerityApp = createStackNavigator();
export const SenerityAppStack = () => {
  return (
    <StackSenerityApp.Navigator
      initialRouteName='SenerityBottomTab'
      screenOptions={{ gestureEnabled: false }}
      mode='modal'
    >
      <StackSenerityApp.Screen
        name='SenerityBottomTab'
        component={SenerityBottomTab}
        options={navOptionHandler}
      />
      <StackSenerityApp.Screen
        name='SenerityFind'
        component={Screens.Find}
        initialParams={{ type: 'all' }}
        options={navOptionHandler}
      />
      <StackSenerityApp.Screen
        name='SenerityPlayerStack'
        component={SenerityPlayerStack}
        options={navOptionHandler}
      />
    </StackSenerityApp.Navigator>
  );
};