import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TinderV3BottomTab } from '@/routes/tabs/tinder/v3/bottom';
import { Splash } from '@/screens/tinder/v3/Splash';
import { navOptionHandler } from '@/utils';

const StackTinderV3 = createStackNavigator();
export const TinderV3Stack = () => {
  return (
    <StackTinderV3.Navigator
      initialRouteName='TinderV3Splash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackTinderV3.Screen
        name='TinderV3Splash'
        component={Splash}
        options={navOptionHandler}
      />
      <StackTinderV3.Screen
        name='TinderV3BottomTab'
        component={TinderV3BottomTab}
        options={navOptionHandler}
      />
    </StackTinderV3.Navigator>
  );
};