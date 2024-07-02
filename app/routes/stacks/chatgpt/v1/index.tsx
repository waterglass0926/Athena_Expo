import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ChatGptAuthStack } from './auth';
import { ChatGptBottomTab } from '@/routes/tabs/chatgpt/v1/bottom';
import Screens from '@/screens/chatgpt/v1';
import { navOptionHandler } from '@/utils';

const StackChatGpt = createStackNavigator();
export const ChatGptStack = () => {
  return (
    <StackChatGpt.Navigator
      initialRouteName='ChatGptWelcome'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackChatGpt.Screen
        name='ChatGptWelcome'
        component={Screens.Welcome}
        options={navOptionHandler}
      />
      <StackChatGpt.Screen
        name='ChatGptAuthStack'
        component={ChatGptAuthStack}
        options={navOptionHandler}
      />
      <StackChatGpt.Screen
        name='ChatGptBottomTab'
        component={ChatGptBottomTab}
        options={navOptionHandler}
      />
      <StackChatGpt.Screen
        name='ChatGptChat'
        component={Screens.Chat}
        options={navOptionHandler}
      />
    </StackChatGpt.Navigator>
  );
};