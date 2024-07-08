import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/basketball';
import { navOptionHandler } from '@/utils';

const StackBasketBall = createStackNavigator();
export const BasketBallStack = () => {
  return (
    <StackBasketBall.Navigator
      initialRouteName='BasketBallSplash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackBasketBall.Screen
        name='BasketBallSplash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackBasketBall.Screen
        name='BasketBallHome'
        component={Screens.Basketball}
        options={navOptionHandler}
      />
    </StackBasketBall.Navigator>
  );
};