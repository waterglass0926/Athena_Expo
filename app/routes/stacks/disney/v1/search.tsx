import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/disney/v1';
import { navOptionHandler } from '@/utils';

const StackDisneyV1Search = createStackNavigator();
export const DisneyV1SearchStack = () => {
  return (
    <StackDisneyV1Search.Navigator
      initialRouteName='DisneyV1Search'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackDisneyV1Search.Screen
        name='DisneyV1Search'
        component={Screens.Search}
        options={navOptionHandler}
      />
    </StackDisneyV1Search.Navigator>
  );
};