import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MoviesV1MainStack } from './main';
import Screens from '@/screens/movies/v1';
import { navOptionHandler } from '@/utils';

const StackMoviesV1 = createStackNavigator();
export const MoviesV1Stack = () => {
  return (
    <StackMoviesV1.Navigator
      initialRouteName='MoviesV1Splash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackMoviesV1.Screen
        name='MoviesV1Splash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackMoviesV1.Screen
        name='MoviesV1MainStack'
        component={MoviesV1MainStack}
        options={navOptionHandler}
      />
    </StackMoviesV1.Navigator>
  );
};