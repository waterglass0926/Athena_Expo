import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MoviesV4MainStack } from './main';
import Screens from '@/screens/movies/v4';
import { navOptionHandler } from '@/utils';

const StackMoviesV4 = createStackNavigator();
export const MoviesV4Stack = () => {
  return (
    <StackMoviesV4.Navigator
      initialRouteName='MoviesV4Splash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackMoviesV4.Screen
        name='MoviesV4Splash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackMoviesV4.Screen
        name='MoviesV4MainStack'
        component={MoviesV4MainStack}
        options={navOptionHandler}
      />
    </StackMoviesV4.Navigator>
  );
};