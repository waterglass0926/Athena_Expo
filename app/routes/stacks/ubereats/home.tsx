import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/ubereats';
import { navOptionHandler } from '@/utils';

const StackUberEatsHome = createStackNavigator();
export const UberEatsHomeStack = () => {
  return (
    <StackUberEatsHome.Navigator
      initialRouteName='UberEatsHome'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackUberEatsHome.Screen
        name='UberEatsHome'
        component={Screens.Home}
        options={navOptionHandler}
      />
      <StackUberEatsHome.Screen
        name='UberEatsDetails'
        component={Screens.Details}
        options={navOptionHandler}
      />
      <StackUberEatsHome.Screen
        name='UberEatsSuccess'
        component={Screens.Success}
        options={navOptionHandler}
      />
      <StackUberEatsHome.Screen
        name='UberEatsCheckout'
        component={Screens.Checkout}
        options={navOptionHandler}
      />
    </StackUberEatsHome.Navigator>
  );
};