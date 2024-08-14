import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DatingV3BottomTab } from '@/routes/tabs/dating/v3/bottom';
import Screens from '@/screens/dating/v3';
// import Components from '@/components/dating/v3';
import { navOptionHandler } from '@/utils';

const StackDatingV3 = createStackNavigator();
export const DatingV3Stack = () => {
  return (
    <StackDatingV3.Navigator
      initialRouteName='DatingV3Splash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackDatingV3.Screen
        name='DatingV3Splash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackDatingV3.Screen
        name='DatingV3BottomTab'
        component={DatingV3BottomTab}
        options={navOptionHandler}
      />
    </StackDatingV3.Navigator>
  );
};