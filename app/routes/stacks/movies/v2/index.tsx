import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MoviesV2MainStack } from './main';
import Screens from '@/screens/movies/v2';
import { navOptionHandler } from '@/utils';

const StackMoviesV2 = createStackNavigator();
export const MoviesV2Stack = () => {
  return (
    <StackMoviesV2.Navigator
      initialRouteName='MoviesV2Splash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackMoviesV2.Screen
        name='MoviesV2Splash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackMoviesV2.Screen
        name='MoviesV2MainStack'
        component={MoviesV2MainStack}
        options={navOptionHandler}
      />
    </StackMoviesV2.Navigator>
  );
};