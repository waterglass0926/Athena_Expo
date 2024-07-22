import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DatingV2BottomTab } from '@/routes/tabs/dating/v2/bottom';
import { Splash } from '@/screens/dating/v2/Home/Splash';
import { navOptionHandler } from '@/utils';

const StackDatingV2 = createStackNavigator();
export const DatingV2Stack = () => {
  return (
    <StackDatingV2.Navigator
      initialRouteName='DatingV2Splash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackDatingV2.Screen
        name='DatingV2Splash'
        component={Splash}
        options={navOptionHandler}
      />
      <StackDatingV2.Screen
        name='DatingV2BottomTab'
        component={DatingV2BottomTab}
        options={navOptionHandler}
      />
    </StackDatingV2.Navigator>
  );
};