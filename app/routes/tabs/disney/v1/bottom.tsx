import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';

import { Text } from 'react-native';

import { DisneyV1HomeStack } from '@/routes/stacks/disney/v1/home';
import { DisneyV1SearchStack } from '@/routes/stacks/disney/v1/search';
import { DisneyV1DownloadsStack } from '@/routes/stacks/disney/v1/downloads';
import { DisneyV1ProfileStack } from '@/routes/stacks/disney/v1/profile';

import Screens from '@/screens/disney/v1';
import Components from '@/components/disney/v1';
import Constants from '@/constants';
import Functions, { navOptionHandler } from '@/utils';

const TabDisneyV1Bottom = createBottomTabNavigator();
export const DisneyV1BottomTab = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <TabDisneyV1Bottom.Navigator
      initialRouteName='DisneyV1HomeStack'
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
          if (route.name === 'DisneyV1HomeStack') {
            iconType = 'material-community';
            iconName = focused ? 'home-lightbulb' : 'home-lightbulb-outline';
            iconColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
          } else if (route.name === 'DisneyV1SearchStack') {
            iconType = 'material';
            iconName = focused ? 'dynamic-feed' : 'dynamic-feed';
            iconColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
          } else if (route.name === 'DisneyV1DownloadsStack') {
            iconType = 'material-community';
            iconName = focused ? 'account' : 'account-outline';
            iconColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
          } else if (route.name === 'DisneyV1ProfileStack') {
            iconType = 'material-community';
            iconName = focused ? 'account' : 'account-outline';
            iconColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
          }
          return <Icon type={iconType} name={iconName} size={25} color={iconColor} />;
        },
        tabBarLabel: ({ focused, color, size }) => {
          let labelName, labelColor, fontWeight;
          if (route.name === 'DisneyV1HomeStack') {
            labelName = 'Home';
            labelColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
            fontWeight = focused ? '700' : '500';
          } else if (route.name === 'DisneyV1SearchStack') {
            labelName = 'Search';
            labelColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
            fontWeight = focused ? '700' : '500';
          } else if (route.name === 'DisneyV1DownloadsStack') {
            labelName = 'Downloads';
            labelColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
            fontWeight = focused ? '700' : '500';
          } else if (route.name === 'DisneyV1ProfileStack') {
            labelName = 'Profile';
            labelColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
            fontWeight = focused ? '700' : '500';
          }
          return <Text style={{ fontSize: 12, fontWeight: fontWeight, color: labelColor }}>{labelName}</Text>;
        },
        activeTintColor: Constants.COLORS.DEFAULT.WHITE,
        inactiveTintColor: theme.QUATERNARY,
      })}
    >
      <TabDisneyV1Bottom.Screen
        name='DisneyV1HomeStack'
        component={DisneyV1HomeStack}
        options={navOptionHandler}
        tabBarLabel='Home'
      />
      <TabDisneyV1Bottom.Screen
        name='DisneyV1SearchStack'
        component={DisneyV1SearchStack}
        options={navOptionHandler}
        tabBarLabel='Search'
      />
      <TabDisneyV1Bottom.Screen
        name='DisneyV1DownloadsStack'
        component={DisneyV1DownloadsStack}
        options={navOptionHandler}
        tabBarLabel='Downloads'
      />
      <TabDisneyV1Bottom.Screen
        name='DisneyV1ProfileStack'
        component={DisneyV1ProfileStack}
        options={navOptionHandler}
        tabBarLabel='Profile'
      />
    </TabDisneyV1Bottom.Navigator>
  );
};