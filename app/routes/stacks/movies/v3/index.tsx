import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MoviesV3MainStack } from './main';
import Screens from '@/screens/movies/v3';
import { navOptionHandler } from '@/utils';

const StackMoviesV3 = createStackNavigator();
export const MoviesV3Stack = () => {
  return (
    <StackMoviesV3.Navigator
      initialRouteName='MoviesV3Splash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackMoviesV3.Screen
        name='MoviesV3Splash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackMoviesV3.Screen
        name='MoviesV3MainStack'
        component={MoviesV3MainStack}
        options={navOptionHandler}
      />
    </StackMoviesV3.Navigator>
  );
};