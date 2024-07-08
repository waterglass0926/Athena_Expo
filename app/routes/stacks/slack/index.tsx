import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SlackHomeStack } from './home';
import Screens from '@/screens/slack';
import { navOptionHandler } from '@/utils';

const StackSlack = createStackNavigator();
export const SlackStack = () => {
  return (
    <StackSlack.Navigator
      initialRouteName='SlackSplash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackSlack.Screen
        name='SlackSplash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackSlack.Screen
        name='SlackHomeStack'
        component={SlackHomeStack}
        options={navOptionHandler}
      />
    </StackSlack.Navigator>
  );
};