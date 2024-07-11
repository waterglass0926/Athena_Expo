import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/tinder/v2';
import { navOptionHandler } from '@/utils';

const StackTinderV2 = createStackNavigator();
export const TinderV2Stack = () => {
  return (
    <StackTinderV2.Navigator
      initialRouteName='TinderV2Splash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackTinderV2.Screen
        name='TinderV2Splash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackTinderV2.Screen
        name='TinderV2Home'
        component={Screens.Home}
        options={navOptionHandler}
      />
    </StackTinderV2.Navigator>
  );
};