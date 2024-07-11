import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/disney/v1';
import { navOptionHandler } from '@/utils';

const StackDisneyV1Home = createStackNavigator();
export const DisneyV1HomeStack = () => {
  return (
    <StackDisneyV1Home.Navigator
      initialRouteName='DisneyV1Home'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackDisneyV1Home.Screen
        name='DisneyV1Home'
        component={Screens.Home}
        options={navOptionHandler}
      />
    </StackDisneyV1Home.Navigator>
  );
};