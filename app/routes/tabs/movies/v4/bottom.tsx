import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';

import { Text } from 'react-native';

import Screens from '@/screens/movies/v4';
import Components from '@/components/movies/v4';
import Constants from '@/constants';
import Functions, { navOptionHandler } from '@/utils';

const TabMoviesV4Bottom = createBottomTabNavigator();
export const MoviesV4BottomTab = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <TabMoviesV4Bottom.Navigator
      initialRouteName='MoviesV4Home'
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: theme.PRIMARY,
          paddingTop: 8,
          shadowColor: Constants.COLORS.DEFAULT.BLACK,
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.9,
          shadowRadius: 1,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName, iconColor;
          if (route.name === 'MoviesV4Home') {
            iconType = 'material-community';
            iconName = focused ? 'home-lightbulb' : 'home-lightbulb-outline';
            iconColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
          } else if (route.name === 'MoviesV4Search') {
            iconType = 'material-community';
            iconName = focused ? 'home-lightbulb' : 'home-lightbulb-outline';
            iconColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
          }
          return <Icon type={iconType} name={iconName} size={25} color={iconColor} />;
        },
        tabBarLabel: ({ focused, color, size }) => {
          let labelName, labelColor, fontWeight;
          if (route.name === 'MoviesV4Home') {
            labelName = 'Home';
            labelColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
            fontWeight = focused ? '700' : '500';
          } else if (route.name === 'MoviesV4Search') {
            labelName = 'Search';
            labelColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
            fontWeight = focused ? '700' : '500';
          }
          return <Text style={{ fontSize: 12, fontWeight: fontWeight, color: labelColor }}>{labelName}</Text>;
        },
        activeTintColor: Constants.COLORS.DEFAULT.WHITE,
        inactiveTintColor: theme.QUATERNARY,
      })}
    >
      <TabMoviesV4Bottom.Screen
        name='MoviesV4Home'
        component={Screens.Home}
        options={navOptionHandler}
        tabBarLabel='Home'
      />
      <TabMoviesV4Bottom.Screen
        name='MoviesV4Search'
        component={Screens.Search}
        options={navOptionHandler}
        tabBarLabel='Search'
      />
    </TabMoviesV4Bottom.Navigator>
  );
};