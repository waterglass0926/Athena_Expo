import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AthenaStack from './stacks/athena';
import ChatGptStack from './stacks/chatgpt/version1.0';
import ChatGptV2Stack from '@/screens/chatgpt/version2.0/_layout';

import { navOptionHandler } from '@/utils';

const StackApp = createStackNavigator();
export default AppContainer = () => {
  return (
    <NavigationContainer independent={true}>
      <StackApp.Navigator
        initialRouteName='Athena'
        screenOptions={{ gestureEnabled: false }
        }>
        <StackApp.Screen
          name='Athena'
          component={AthenaStack}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name='ChatGpt'
          component={ChatGptStack}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name='ChatGptV2'
          component={ChatGptV2Stack}
          options={navOptionHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
};