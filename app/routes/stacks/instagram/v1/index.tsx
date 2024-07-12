import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { InstagramV1MainStack } from './main';
import Screens from '@/screens/instagram/v1';
import { navOptionHandler } from '@/utils';

const StackInstagramV1 = createStackNavigator();
export const InstagramV1Stack = () => {
  return (
    <StackInstagramV1.Navigator
      initialRouteName='InstagramV1Splash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackInstagramV1.Screen
        name='InstagramV1Splash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackInstagramV1.Screen
        name='InstagramV1MainStack'
        component={InstagramV1MainStack}
        options={navOptionHandler}
      />
    </StackInstagramV1.Navigator>
  );
};