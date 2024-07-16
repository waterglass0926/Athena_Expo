import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MoviesV1BottomTab } from '@/routes/tabs/movies/v1/bottom';
import Screens from '@/screens/movies/v1';
import { navOptionHandler } from '@/utils';

const StackMoviesV1Main = createStackNavigator();
export const MoviesV1MainStack = () => {
  return (
    <StackMoviesV1Main.Navigator
      initialRouteName='MoviesV1BottomTab'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackMoviesV1Main.Screen
        name='MoviesV1BottomTab'
        component={MoviesV1BottomTab}
        options={navOptionHandler}
      />
      <StackMoviesV1Main.Screen
        name='MoviesV1Detail'
        component={Screens.Detail}
        options={navOptionHandler}
      />
      <StackMoviesV1Main.Screen
        name='MoviesV1Playlist'
        component={Screens.PlayList}
        options={navOptionHandler}
      />
      <StackMoviesV1Main.Screen
        name='MoviesV1Searching'
        component={Screens.Searching}
        options={navOptionHandler}
      />
    </StackMoviesV1Main.Navigator>
  );
};