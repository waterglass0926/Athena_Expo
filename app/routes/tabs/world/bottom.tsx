import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';

import { Text } from 'react-native';

import { WorldHomeStack } from '@/routes/stacks/world/home';
// import WorldFeedStack from '@/routes/stacks/world/feed';
// import WorldProfileStack from '@/routes/stacks/world/profile';

import Screens from '@/screens/world';
import Components from '@/components/world';
import Constants from '@/constants';
import Functtions, { navOptionHandler } from '@/utils';

const TabWorldBottom = createBottomTabNavigator();
export const WorldBottomTab = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <TabWorldBottom.Navigator
      initialRouteName='WorldHomeStack'
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
          if (route.name === 'WorldHomeStack') {
            iconType = 'material-community';
            iconName = focused ? 'home-lightbulb' : 'home-lightbulb-outline';
            iconColor = focused ? theme.QUATERNARY : theme.SECONDARY;
          } else if (route.name === 'WorldFeedStack') {
            iconType = 'material';
            iconName = focused ? 'dynamic-feed' : 'dynamic-feed';
            iconColor = focused ? theme.QUATERNARY : theme.SECONDARY;
          } else if (route.name === 'WorldProfileStack') {
            iconType = 'material-community';
            iconName = focused ? 'account' : 'account-outline';
            iconColor = focused ? theme.QUATERNARY : theme.SECONDARY;
          }
          return <Icon type={iconType} name={iconName} size={25} color={iconColor} />;
        },
        tabBarLabel: ({ focused, color, size }) => {
          let labelName, labelColor, fontWeight;
          if (route.name === 'WorldHomeStack') {
            labelName = 'Home';
            labelColor = focused ? theme.QUATERNARY : theme.SECONDARY;
            fontWeight = focused ? '700' : '500';
          } else if (route.name === 'WorldFeedStack') {
            labelName = 'Feed';
            labelColor = focused ? theme.QUATERNARY : theme.SECONDARY;
            fontWeight = focused ? '700' : '500';
          } else if (route.name === 'WorldProfileStack') {
            labelName = 'Profile';
            labelColor = focused ? theme.QUATERNARY : theme.SECONDARY;
            fontWeight = focused ? '700' : '500';
          }
          return <Text style={{ fontSize: 12, fontWeight: fontWeight, color: labelColor }}>{labelName}</Text>;
        },
        activeTintColor: theme.QUATERNARY,
        inactiveTintColor: theme.SECONDARY,
      })}
    >
      <TabWorldBottom.Screen
        name='WorldHomeStack'
        component={WorldHomeStack}
        options={navOptionHandler}
        tabBarLabel='Home'
      />
      {/* <TabWorldBottom.Screen
        name='WorldFeedStack'
        component={WorldFeedStack}
        options={navOptionHandler}
        tabBarLabel='Feed'
      />
      <TabWorldBottom.Screen
        name='WorldProfileStack'
        component={WorldProfileStack}
        options={navOptionHandler}
        tabBarLabel='Profile'
      /> */}
    </TabWorldBottom.Navigator>
  );
};