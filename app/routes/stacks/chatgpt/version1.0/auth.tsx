import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/chatgpt/version1.0';
import { navOptionHandler } from '@/utils';

const StackChatGptAuth = createStackNavigator();
export default ChatGptAuthStack = () => {
  return (
    <StackChatGptAuth.Navigator
      initialRouteName='ChatGptSignUp'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackChatGptAuth.Screen
        name='ChatGptSignUp'
        component={Screens.SignUp}
        options={navOptionHandler}
      />
      <StackChatGptAuth.Screen
        name='ChatGptSignIn'
        component={Screens.SignIn}
        options={navOptionHandler}
      />
    </StackChatGptAuth.Navigator>
  );
};