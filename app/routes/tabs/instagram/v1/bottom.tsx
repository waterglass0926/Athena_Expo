import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';

import { Text } from 'react-native';

import Screens from '@/screens/instagram/v1';
import Components from '@/components/instagram/v1';
import Constants from '@/constants';
import Functions, { navOptionHandler } from '@/utils';

const TabInstagramV1Bottom = createBottomTabNavigator();
export const InstagramV1BottomTab = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <TabInstagramV1Bottom.Navigator
      initialRouteName='InstagramV1HomeStack'
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
          if (route.name === 'InstagramV1Home') {
            iconType = 'ionicon';
            iconName = focused ? 'home-sharp' : 'home-outline';
            iconColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
          } else if (route.name === 'InstagramV1Search') {
            iconType = 'ionicon';
            iconName = focused ? 'search' : 'search-outline';
            iconColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
          } else if (route.name === 'InstagramV1Reels') {
            iconType = 'ionicon';
            iconName = focused ? 'caret-forward-circle-sharp' : 'caret-forward-circle-outline';
            iconColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
          } else if (route.name === 'InstagramV1Activity') {
            iconType = 'ionicon';
            iconName = focused ? 'heart' : 'heart-outline';
            iconColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
          } else if (route.name === 'InstagramV1Profile') {
            iconType = 'ionicon';
            iconName = focused ? 'person-circle' : 'person-outline';
            iconColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
          }
          return <Icon type={iconType} name={iconName} size={25} color={iconColor} />;
        },
        tabBarLabel: ({ focused, color, size }) => {
          let labelName, labelColor, fontWeight;
          if (route.name === 'InstagramV1Home') {
            labelName = 'Home';
            labelColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
            fontWeight = focused ? '700' : '500';
          } else if (route.name === 'InstagramV1Search') {
            labelName = 'Search';
            labelColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
            fontWeight = focused ? '700' : '500';
          } else if (route.name === 'InstagramV1Reels') {
            labelName = 'Reels';
            labelColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
            fontWeight = focused ? '700' : '500';
          } else if (route.name === 'InstagramV1Activity') {
            labelName = 'Activity';
            labelColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
            fontWeight = focused ? '700' : '500';
          } else if (route.name === 'InstagramV1Profile') {
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
      <TabInstagramV1Bottom.Screen
        name='InstagramV1Home'
        component={Screens.Home}
        options={navOptionHandler}
        tabBarLabel='Home'
      />
      <TabInstagramV1Bottom.Screen
        name='InstagramV1Search'
        component={Screens.Search}
        options={navOptionHandler}
        tabBarLabel='Search'
      />
      <TabInstagramV1Bottom.Screen
        name='InstagramV1Reels'
        component={Screens.Reels}
        options={navOptionHandler}
        tabBarLabel='Reels'
      />
      <TabInstagramV1Bottom.Screen
        name='InstagramV1Activity'
        component={Screens.Activity}
        options={navOptionHandler}
        tabBarLabel='Activity'
      />
      <TabInstagramV1Bottom.Screen
        name='InstagramV1Profile'
        component={Screens.Profile}
        options={navOptionHandler}
        tabBarLabel='Profile'
      />
    </TabInstagramV1Bottom.Navigator>
  );
};