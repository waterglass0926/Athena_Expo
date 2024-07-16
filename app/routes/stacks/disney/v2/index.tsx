import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DisneyV2MainStack } from './main';
import Screens from '@/screens/disney/v2';
import { navOptionHandler } from '@/utils';

const StackDisneyV2 = createStackNavigator();
export const DisneyV2Stack = () => {
  return (
    <StackDisneyV2.Navigator
      initialRouteName='DisneyV2Splash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackDisneyV2.Screen
        name='DisneyV2Splash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackDisneyV2.Screen
        name='DisneyV2Main'
        component={Screens.Main}
        options={navOptionHandler}
      />
    </StackDisneyV2.Navigator>
  );
};