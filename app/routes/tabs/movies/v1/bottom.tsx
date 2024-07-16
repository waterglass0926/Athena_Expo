import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { Icon } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  StatusBar,
  Text,
} from 'react-native';

import Screens from '@/screens/movies/v1';
import Constants from '@/constants';
import Functions from '@/utils';
import { ThemeType } from '@/types/athena';

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

const TabMoviesV1Bottom = createBottomTabNavigator();
export const MoviesV1BottomTab = () => {
  const { theme } = useSelector((state: StateType) => state.athena);

  StatusBar.setBarStyle('dark-content');

  return (
    <TabMoviesV1Bottom.Navigator
      initialRouteName='MoviesV1PlayList'
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: Constants.COLORS.DEFAULT.BLACK,
        },
        tabBarActiveTintColor: Constants.COLORS.DEFAULT.WHITE,
      })}
    >
      <TabMoviesV1Bottom.Screen
        name='MoviesV1PlayList'
        component={Screens.PlayList}
        options={{
          headerShown: false,
          tabBarLabel: '热映',
          tabBarIcon: ({ color, focused }) => (
            <Icon name='tv' size={20} color={color} />
          ),
        }}
      />
      <TabMoviesV1Bottom.Screen
        name='MoviesV1Seek'
        component={Screens.Seek}
        options={{
          headerShown: false,
          tabBarLabel: '照片',
          tabBarIcon: ({ color, focused }) => (
            <Icon name='eye' size={20} color={color} />
          ),
        }}
      />
      <TabMoviesV1Bottom.Screen
        name='MoviesV1My'
        component={Screens.My}
        options={{
          headerShown: false,
          tabBarLabel: '我的',
          tabBarIcon: ({ color, focused }) => (
            <Icon name='user' size={20} color={color} />
          ),
        }}
      />
    </TabMoviesV1Bottom.Navigator>
  );
};