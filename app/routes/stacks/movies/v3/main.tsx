import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/movies/v3';
import { navOptionHandler } from '@/utils';

const StackMoviesV3Main = createStackNavigator();
export const MoviesV3MainStack = () => {
  return (
    <StackMoviesV3Main.Navigator
      initialRouteName='MoviesV3Home'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackMoviesV3Main.Screen
        name='MoviesV3Home'
        component={Screens.Home}
        options={navOptionHandler}
      />
      <StackMoviesV3Main.Screen
        name='MoviesV3Details'
        component={Screens.Details}
        options={navOptionHandler}
      />
    </StackMoviesV3Main.Navigator>
  );
};