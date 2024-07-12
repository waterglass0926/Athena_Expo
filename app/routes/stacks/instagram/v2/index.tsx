import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { InstagramV2BottomTab } from '@/routes/tabs/instagram/v2/bottom';
import Screens from '@/screens/instagram/v2';
import { navOptionHandler } from '@/utils';

const StackInstagramV2 = createStackNavigator();
export const InstagramV2Stack = () => {
  return (
    <StackInstagramV2.Navigator
      initialRouteName='InstagramV2Splash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackInstagramV2.Screen
        name='InstagramV2Splash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackInstagramV2.Screen
        name='InstagramV2BottomTab'
        component={InstagramV2BottomTab}
        options={navOptionHandler}
      />
    </StackInstagramV2.Navigator>
  );
};