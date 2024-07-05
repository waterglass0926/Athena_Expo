import * as React from 'react';
import { IconButton, useTheme } from 'react-native-paper';
import { NavigatorScreenParams } from '@react-navigation/core';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import color from 'color';

import { SenerityHomeStack } from '../../stacks/senerity/home';
import { SeneritySearchStack, SeneritySearchStackParamList } from '../../stacks/senerity/search';
import { SenerityLibraryStack } from '../../stacks/senerity/library';
import { SenerityOfflineStack } from '../../stacks/senerity/offline';
import Screens from '@/screens/senerity';
import Components from '@/components/serenity';

type BottomTabParamList = {
  Home: undefined;
  Search: NavigatorScreenParams<SeneritySearchStackParamList>;
  Library: undefined;
  Offline: undefined;
};

const TabSenerityBottom = createBottomTabNavigator<BottomTabParamList>();

export const SenerityBottomTab = () => {
  const theme = useTheme();
  const { colors } = theme;
  const activeTintColor = colors.primary;
  const inactiveTintColor = color(colors.text)
    .alpha(0.5)
    .rgb()
    .string();

  return (
    <TabSenerityBottom.Navigator
      tabBar={props => (
        <Components.BottomTabBar {...props} backgroundColor={colors.surface} activeTintColor={colors.primary} />
      )}
      tabBarOptions={{
        style: { backgroundColor: colors.surface },
        activeTintColor,
        inactiveTintColor,
      }}
    >
      <TabSenerityBottom.Screen
        name='SenerityHome'
        component={SenerityHomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconButton
              icon={focused ? 'home' : 'home-outline'}
              color={focused ? activeTintColor : inactiveTintColor}
              style={{ margin: 0, padding: 0 }}
            />
          ),
        }}
      />
      <TabSenerityBottom.Screen
        name='SeneritySearch'
        component={SeneritySearchStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconButton
              icon={focused ? 'search' : 'search-outline'}
              color={focused ? activeTintColor : inactiveTintColor}
              style={{ margin: 0, padding: 0 }}
            />
          ),
        }}
      />
      <TabSenerityBottom.Screen
        name='SenerityLibrary'
        component={SenerityLibraryStack}
        options={{
          tabBarLabel: 'Your library',
          tabBarIcon: ({ focused }) => (
            <IconButton
              icon={focused ? 'browser' : 'browser-outline'}
              color={focused ? activeTintColor : inactiveTintColor}
              style={{ margin: 0, padding: 0 }}
            />
          ),
        }}
      />
      <TabSenerityBottom.Screen
        name='SenerityOffline'
        component={SenerityOfflineStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconButton
              icon={focused ? 'save' : 'save-outline'}
              color={focused ? activeTintColor : inactiveTintColor}
              style={{ margin: 0, padding: 0 }}
            />
          ),
        }}
      />
    </TabSenerityBottom.Navigator>
  );
};