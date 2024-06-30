import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/chatgpt/v1';
import { navOptionHandler } from '@/utils';

const StackChatGptHome = createStackNavigator();
export default ChatGptHomeStack = () => {
  return (
    <StackChatGptHome.Navigator
      initialRouteName='ChatGptHome'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackChatGptHome.Screen
        name='ChatGptHome'
        component={Screens.Home}
        options={navOptionHandler}
      />
    </StackChatGptHome.Navigator>
  );
};