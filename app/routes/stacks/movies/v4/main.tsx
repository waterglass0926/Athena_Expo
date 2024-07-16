import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MoviesV4BottomTab } from '@/routes/tabs/movies/v4/bottom';
import Screens from '@/screens/movies/v4';
import { navOptionHandler } from '@/utils';

const StackMoviesV4Main = createStackNavigator();
export const MoviesV4MainStack = () => {
  return (
    <StackMoviesV4Main.Navigator
      initialRouteName='MoviesV4Home'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackMoviesV4Main.Screen
        name='MoviesV4BottomTab'
        component={MoviesV4BottomTab}
        options={navOptionHandler}
      />
      <StackMoviesV4Main.Screen
        name='MoviesV4Detail'
        component={Screens.Detail}
        options={navOptionHandler}
      />
    </StackMoviesV4Main.Navigator>
  );
};