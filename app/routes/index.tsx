import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AthenaStack } from './stacks/athena';
import { WorldStack } from './stacks/world';

import { ChatGptStack } from './stacks/chatgpt/v1';
import { UberEatsStack } from './stacks/ubereats';
import { TikTokStack } from './stacks/tiktok';
import { TranslatorStack } from './stacks/translator';
import { TinderV1Stack } from './stacks/tinder/v1';
import { YouTubeV1Stack } from './stacks/youtube/v1';

import { navOptionHandler } from '@/utils';

const StackApp = createStackNavigator();
export const AppContainer = () => {
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
          name='World'
          component={WorldStack}
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
        <StackApp.Screen
          name='Translator'
          component={TranslatorStack}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name='TinderV1'
          component={TinderV1Stack}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name='YouTubeV1'
          component={YouTubeV1Stack}
          options={navOptionHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
};