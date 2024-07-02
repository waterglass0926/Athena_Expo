import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { UberEatsAuthStack } from './auth';
import { UberEatsBottomTab } from '@/routes/tabs/ubereats/bottom';
import Screens from '@/screens/ubereats';
import { navOptionHandler } from '@/utils';

const StackUberEats = createStackNavigator();
export const UberEatsStack = () => {
  return (
    <StackUberEats.Navigator
      initialRouteName='UberEatsWelcome'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackUberEats.Screen
        name='UberEatsWelcome'
        component={Screens.Welcome}
        options={navOptionHandler}
      />
      <StackUberEats.Screen
        name='UberEatsAuthStack'
        component={UberEatsAuthStack}
        options={navOptionHandler}
      />
      <StackUberEats.Screen
        name='UberEatsBottomTab'
        component={UberEatsBottomTab}
        options={navOptionHandler}
      />
    </StackUberEats.Navigator>
  );
};