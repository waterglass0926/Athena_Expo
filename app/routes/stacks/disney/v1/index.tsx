import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DisneyV1MainStack } from './main';
import Screens from '@/screens/disney/v1';
import { navOptionHandler } from '@/utils';

const StackDisneyV1 = createStackNavigator();
export const DisneyV1Stack = () => {
  return (
    <StackDisneyV1.Navigator
      initialRouteName='DisneyV1Splash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackDisneyV1.Screen
        name='DisneyV1Splash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackDisneyV1.Screen
        name='DisneyV1MainStack'
        component={DisneyV1MainStack}
        options={navOptionHandler}
      />
    </StackDisneyV1.Navigator>
  );
};