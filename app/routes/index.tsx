import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AthenaStack from './stacks/athena';
import ChatGptStack from './stacks/chatgpt/v1';
import UberEatsStack from './stacks/ubereats';
import TikTokStack from './stacks/tiktok';

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
          name='UberEats'
          component={UberEatsStack}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name='TikTok'
          component={TikTokStack}
          options={navOptionHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
};