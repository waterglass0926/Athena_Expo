import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/athena';
import { navOptionHandler } from '@/utils';

const StackAthena = createStackNavigator();
export const AthenaStack = () => {
  return (
    <StackAthena.Navigator
      initialRouteName='Theme'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackAthena.Screen
        name='Theme'
        component={Screens.Theme}
        options={navOptionHandler}
      />
      <StackAthena.Screen
        name='Language'
        component={Screens.Language}
        options={navOptionHandler}
      />
      <StackAthena.Screen
        name='Slides'
        component={Screens.Slides}
        options={navOptionHandler}
      />
    </StackAthena.Navigator>
  );
};