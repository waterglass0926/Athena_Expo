import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/disney/v1';
import { navOptionHandler } from '@/utils';

const StackDisneyV1Downloads = createStackNavigator();
export const DisneyV1DownloadsStack = () => {
  return (
    <StackDisneyV1Downloads.Navigator
      initialRouteName='DisneyV1Downloads'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackDisneyV1Downloads.Screen
        name='DisneyV1Downloads'
        component={Screens.Downloads}
        options={navOptionHandler}
      />
    </StackDisneyV1Downloads.Navigator>
  );
};