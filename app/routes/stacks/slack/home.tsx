import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SlackModalStack } from './modal';
import Screens from '@/screens/slack';
import { navOptionHandler } from '@/utils';

const StackSlackHome = createStackNavigator();
export const SlackHomeStack = () => {
  return (
    <StackSlackHome.Navigator
      initialRouteName='SlackModalStack'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackSlackHome.Screen
        name='SlackModalStack'
        component={SlackModalStack}
        options={navOptionHandler}
      />
      <StackSlackHome.Screen
        name='SlackChannels'
        component={Screens.Channels}
        options={navOptionHandler}
      />
      <StackSlackHome.Screen
        name='SlackDrafts'
        component={Screens.Drafts}
        options={navOptionHandler}
      />
      <StackSlackHome.Screen
        name='SlackThreads'
        component={Screens.Threads}
        options={navOptionHandler}
      />
    </StackSlackHome.Navigator>
  );
};