import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SlackBottomTab } from '@/routes/tabs/slack/bottom';
import Screens from '@/screens/slack';
import { navOptionHandler } from '@/utils';

const StackSlackModal = createStackNavigator();
export const SlackModalStack = () => {
  return (
    <StackSlackModal.Navigator
      initialRouteName='SlackBottomTab'
      screenOptions={{ gestureEnabled: false, mode: 'modal' }}
    >
      <StackSlackModal.Screen
        name='SlackBottomTab'
        component={SlackBottomTab}
        options={navOptionHandler}
      />
      <StackSlackModal.Screen
        name='SlackNewMessage'
        component={Screens.NewMessage}
        options={navOptionHandler}
      />
      <StackSlackModal.Screen
        name='SlackChannelSearch'
        component={Screens.ChannelSearch}
        options={navOptionHandler}
      />
      <StackSlackModal.Screen
        name='SlackMessageSearch'
        component={Screens.MessageSearch}
        options={navOptionHandler}
      />
      <StackSlackModal.Screen
        name='SlackTargettedMessageChannel'
        component={Screens.TargettedMessageChannel}
        options={navOptionHandler}
      />
    </StackSlackModal.Navigator>
  );
};