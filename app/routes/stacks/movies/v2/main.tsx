import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/movies/v2';
import { navOptionHandler } from '@/utils';

const StackMoviesV2Main = createStackNavigator();
export const MoviesV2MainStack = () => {
  return (
    <StackMoviesV2Main.Navigator
      initialRouteName='MoviesV2Home'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackMoviesV2Main.Screen
        name='MoviesV2Home'
        component={Screens.Home}
        options={navOptionHandler}
      />
      <StackMoviesV2Main.Screen
        name='MoviesV2Movies'
        component={Screens.Movies}
        options={navOptionHandler}
      />
      <StackMoviesV2Main.Screen
        name='MoviesV2Person'
        component={Screens.Person}
        options={navOptionHandler}
      />
      <StackMoviesV2Main.Screen
        name='MoviesV2Search'
        component={Screens.Search}
        options={navOptionHandler}
      />
    </StackMoviesV2Main.Navigator>
  );
};