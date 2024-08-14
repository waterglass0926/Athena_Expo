import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/dating/v3';
// import Components from '@/components/dating/v3';
import { navOptionHandler } from '@/utils';

const StackDatingV3Chat = createStackNavigator();
export const DatingV3ChatStack = () => {
  return (
    <StackDatingV3Chat.Navigator
      initialRouteName='DatingV3ChatHome'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackDatingV3Chat.Screen
        name='DatingV3ChatHome'
        component={Screens.ChatHome}
        options={navOptionHandler}
      />
    </StackDatingV3Chat.Navigator>
  );
};