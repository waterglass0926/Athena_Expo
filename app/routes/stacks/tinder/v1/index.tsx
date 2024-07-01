import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TinderV1BottomTab from '@/routes/tabs/tinder/v1/bottom';
import Screens from '@/screens/tinder/v1';
import { navOptionHandler } from '@/utils';

const StackTinderV1 = createStackNavigator();
export default TinderV1Stack = () => {
  return (
    <StackTinderV1.Navigator
      initialRouteName='TinderV1Splash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackTinderV1.Screen
        name='TinderV1Splash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackTinderV1.Screen
        name='TinderV1BottomTab'
        component={TinderV1BottomTab}
        options={navOptionHandler}
      />
    </StackTinderV1.Navigator>
  );
};