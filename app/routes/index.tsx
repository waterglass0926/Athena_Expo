import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { AthenaStack } from './stacks/athena';
import { WorldStack } from './stacks/world';

import { FitnessV1Stack } from './stacks/fitness/v1';

import { ChatGptStack } from './stacks/chatgpt/v1';
import { UberEatsStack } from './stacks/ubereats';
import { TranslatorStack } from './stacks/translator';
import { PaperStack } from './stacks/paper';
import { FamousStack } from './stacks/famous';
import { BasketBallStack } from './stacks/basketball';

import { TikTokV1Stack } from './stacks/tiktok/v1';
import { TikTokV2Stack } from './stacks/tiktok/v2';

import { TinderV1Stack } from './stacks/tinder/v1';
import { TinderV2Stack } from './stacks/tinder/v2';
import { TinderV3Stack } from './stacks/tinder/v3';

import { YouTubeV1Stack } from './stacks/youtube/v1';

import { DisneyV1Stack } from './stacks/disney/v1';
import { DisneyV2Stack } from './stacks/disney/v2';

import { InstagramV1Stack } from './stacks/instagram/v1';
import { InstagramV2Stack } from './stacks/instagram/v2';

import { MoviesV2Stack } from './stacks/movies/v2';
import { MoviesV3Stack } from './stacks/movies/v3';
import { MoviesV4Stack } from './stacks/movies/v4';

import { DatingV1Stack } from './stacks/dating/v1';
import { DatingV2Stack } from './stacks/dating/v2';

import { navOptionHandler } from '@/utils';

const StackApp = createStackNavigator();
export const AppContainer = () => {
  return (
    <NavigationContainer independent={true}>
      <StackApp.Navigator
        initialRouteName='Athena'
        screenOptions={{ gestureEnabled: false }
        }>
        <StackApp.Screen name='Athena' component={AthenaStack} options={navOptionHandler} />
        <StackApp.Screen name='World' component={WorldStack} options={navOptionHandler} />

        <StackApp.Screen name='FitnessV1' component={FitnessV1Stack} options={navOptionHandler} />

        <StackApp.Screen name='ChatGpt' component={ChatGptStack} options={navOptionHandler} />
        <StackApp.Screen name='UberEats' component={UberEatsStack} options={navOptionHandler} />
        <StackApp.Screen name='Translator' component={TranslatorStack} options={navOptionHandler} />
        <StackApp.Screen name='Paper' component={PaperStack} options={navOptionHandler} />
        <StackApp.Screen name='Famous' component={FamousStack} options={navOptionHandler} />
        <StackApp.Screen name='BasketBall' component={BasketBallStack} options={navOptionHandler} />

        <StackApp.Screen name='TikTokV1' component={TikTokV1Stack} options={navOptionHandler} />
        <StackApp.Screen name='TikTokV2' component={TikTokV2Stack} options={navOptionHandler} />

        <StackApp.Screen name='TinderV1' component={TinderV1Stack} options={navOptionHandler} />
        <StackApp.Screen name='TinderV2' component={TinderV2Stack} options={navOptionHandler} />
        <StackApp.Screen name='TinderV3' component={TinderV3Stack} options={navOptionHandler} />

        <StackApp.Screen name='YouTubeV1' component={YouTubeV1Stack} options={navOptionHandler} />

        <StackApp.Screen name='DisneyV1' component={DisneyV1Stack} options={navOptionHandler} />
        <StackApp.Screen name='DisneyV2' component={DisneyV2Stack} options={navOptionHandler} />

        <StackApp.Screen name='InstagramV1' component={InstagramV1Stack} options={navOptionHandler} />
        <StackApp.Screen name='InstagramV2' component={InstagramV2Stack} options={navOptionHandler} />

        <StackApp.Screen name='MoviesV2' component={MoviesV2Stack} options={navOptionHandler} />
        <StackApp.Screen name='MoviesV3' component={MoviesV3Stack} options={navOptionHandler} />
        <StackApp.Screen name='MoviesV4' component={MoviesV4Stack} options={navOptionHandler} />

        <StackApp.Screen name='DatingV1' component={DatingV1Stack} options={navOptionHandler} />
        <StackApp.Screen name='DatingV2' component={DatingV2Stack} options={navOptionHandler} />

      </StackApp.Navigator>
    </NavigationContainer>
  );
};