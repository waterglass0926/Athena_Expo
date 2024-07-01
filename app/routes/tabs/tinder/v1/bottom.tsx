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
import Screens from '@/screens/tinder/v1';
import Components from '@/components/tinder/v1';
import Constants from '@/constants';
import Functtions, { navOptionHandler } from '@/utils';
import Styles from '@/styles/tinder/v1';
import { ThemeType } from '@types/athena';

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

const TabTinderV1Bottom = createBottomTabNavigator();
export default TinderV1BottomTab = () => {
  const dispatch = useDispatch();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  return (
    <TabTinderV1Bottom.Navigator
      initialRouteName='TinderV1Explore'
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: Constants.COLORS.DEFAULT.WHITE,
        },
        tabBarActiveTintColor: '#7444C0',
        tabBarInactiveTintColor: '#363636'
      })}
    >
      <TabTinderV1Bottom.Screen
        name='TinderV1Explore'
        component={Screens.Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, focused }) => {
            const iconFocused = focused ? '#7444C0' : '#363636';
            return (
              <Text style={[Styles.iconMenu, { color: iconFocused }]}>
                <Components.Icon name='explore' />
              </Text>
            )
          },
        }}
      />
      <TabTinderV1Bottom.Screen
        name='TinderV1Matches'
        component={Screens.Matches}
        options={{
          headerShown: false,
          tabBarLabel: 'Matches',
          tabBarIcon: ({ color, focused }) => {
            const iconFocused = focused ? '#7444C0' : '#363636';
            return (
              <Text style={[Styles.iconMenu, { color: iconFocused }]}>
                <Components.Icon name='heart' />
              </Text>
            )
          },
        }}
      />
      <TabTinderV1Bottom.Screen
        name='TinderV1Chat'
        component={Screens.Messages}
        options={{
          headerShown: false,
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, focused }) => {
            const iconFocused = focused ? '#7444C0' : '#363636';
            return (
              <Text style={[Styles.iconMenu, { color: iconFocused }]}>
                <Components.Icon name='chat' />
              </Text>
            )
          },
        }}
      />
      <TabTinderV1Bottom.Screen
        name='TinderV1Profile'
        component={Screens.Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, focused }) => {
            const iconFocused = focused ? '#7444C0' : '#363636';
            return (
              <Text style={[Styles.iconMenu, { color: iconFocused }]}>
                <Components.Icon name='user' />
              </Text>
            )
          },
        }}
      />
    </TabTinderV1Bottom.Navigator>
  );
};