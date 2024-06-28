import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Toast from 'react-native-toast-message';
import { Icon } from 'react-native-elements';

import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text
} from 'react-native';

import '@/utils/i18n';
// import TikTokHomeStack from '@/routes/stacks/tiktok/home';
import TikTokDiscoverStack from '@/routes/stacks/tiktok/discover';
import TikTokInboxStack from '@/routes/stacks/tiktok/inbox';
import TikTokProfileStack from '@/routes/stacks/tiktok/profile';
import Screens from '@/screens/tiktok';
import Constants from '@/constants';
import Functtions, { navOptionHandler } from '@/utils';
import { ThemeType } from '@types/athena';

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

const TabTikTokBottom = createBottomTabNavigator();
export default TikTokBottomTab = () => {
  const dispatch = useDispatch();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  StatusBar.setBarStyle('dark-content');

  return (
    <TabTikTokBottom.Navigator
      initialRouteName='TikTokHomeStack'
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: Constants.COLORS.DEFAULT.BLACK,
        },
        tabBarActiveTintColor: Constants.COLORS.DEFAULT.WHITE,
      })}
    >
      <TabTikTokBottom.Screen
        name='TikTokHomeStack'
        component={TikTokHomeStack}
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
      <TabTikTokBottom.Screen
        name='TikTokDiscoverStack'
        component={TikTokDiscoverStack}
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
      <TabTikTokBottom.Screen
        name='TikTokInboxStack'
        component={TikTokInboxStack}
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
      <TabTikTokBottom.Screen
        name='TikTokProfileStack'
        component={TikTokProfileStack}
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
    </TabTikTokBottom.Navigator>
  );
};