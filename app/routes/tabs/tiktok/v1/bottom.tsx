import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';

import {
  StatusBar,
  Text,
} from 'react-native';

import { TikTokV1HomeStack } from '@/routes/stacks/tiktok/v1/home';
import { TikTokV1DiscoverStack } from '@/routes/stacks/tiktok/v1/discover';
import { TikTokV1InboxStack } from '@/routes/stacks/tiktok/v1/inbox';
import { TikTokV1ProfileStack } from '@/routes/stacks/tiktok/v1/profile';
import Screens from '@/screens/tiktok/v1';
import Constants from '@/constants';
import Functions from '@/utils';
import { ThemeType } from '@/types/athena';

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

const TabTikTokV1Bottom = createBottomTabNavigator();
export const TikTokV1BottomTab = () => {
  const { theme } = useSelector((state: StateType) => state.athena);

  StatusBar.setBarStyle('dark-content');

  return (
    <TabTikTokV1Bottom.Navigator
      initialRouteName='TikTokV1HomeStack'
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: Constants.COLORS.DEFAULT.BLACK,
        },
        tabBarActiveTintColor: Constants.COLORS.DEFAULT.WHITE,
      })}
    >
      <TabTikTokV1Bottom.Screen
        name='TikTokV1HomeStack'
        component={TikTokV1HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              type='material-community'
              name={focused ? 'home-lightbulb' : 'home-lightbulb-outline'}
              size={30}
              color={focused ? Constants.COLORS.DEFAULT.WHITE : Constants.COLORS.DEFAULT.GRAY} />
          ),
        }}
      />
      <TabTikTokV1Bottom.Screen
        name='TikTokV1DiscoverStack'
        component={TikTokV1DiscoverStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Discover',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              type='material-community'
              name={focused ? 'folder-search' : 'folder-search-outline'}
              size={30}
              color={focused ? Constants.COLORS.DEFAULT.WHITE : Constants.COLORS.DEFAULT.GRAY} />
          ),
        }}
      />
      <TabTikTokV1Bottom.Screen
        name='TikTokV1InboxStack'
        component={TikTokV1InboxStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              type='material-community'
              name={focused ? 'inbox-full' : 'inbox'}
              size={30}
              color={focused ? Constants.COLORS.DEFAULT.WHITE : Constants.COLORS.DEFAULT.GRAY} />
          ),
        }}
      />
      <TabTikTokV1Bottom.Screen
        name='TikTokV1ProfileStack'
        component={TikTokV1ProfileStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Icon
              type='material-community'
              name={focused ? 'account' : 'account-outline'}
              size={30}
              color={focused ? Constants.COLORS.DEFAULT.WHITE : Constants.COLORS.DEFAULT.GRAY} />
          ),
        }}
      />
    </TabTikTokV1Bottom.Navigator>
  );
};