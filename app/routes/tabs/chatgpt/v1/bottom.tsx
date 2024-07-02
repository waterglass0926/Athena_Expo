import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';

import { ChatGptHomeStack } from '@/routes/stacks/chatgpt/v1/home';
import Screens from '@/screens/chatgpt/v1';
import Constants from '@/constants';
import Functtions from '@/utils';
import { ThemeType } from '@/types/athena';

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

const TabChatGptBottom = createBottomTabNavigator();
export const ChatGptBottomTab = () => {
  const { theme } = useSelector((state: StateType) => state.athena);

  return (
    <TabChatGptBottom.Navigator
      initialRouteName='ChatGptHomeStack'
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: theme.FORECOLOR,
        },
        tabBarActiveTintColor: theme.PRIMARY,
        tabBarInactiveTintColor: theme.BACKCOLOR,
      })}
    >
      <TabChatGptBottom.Screen
        name='ChatGptHomeStack'
        component={ChatGptHomeStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarActiveBackgroundColor: theme.BACKCOLOR,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              type='ionicon'
              name='chatbubble-ellipses-outline'
              size={30}
              color={focused ? theme.PRIMARY : theme.BACKCOLOR} />
          ),
        }}
      />
      <TabChatGptBottom.Screen
        name='ChatGptSaved'
        component={Screens.Saved}
        options={{
          headerShown: false,
          tabBarLabel: 'Saved',
          tabBarActiveBackgroundColor: theme.BACKCOLOR,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              type='ionicon'
              name='bookmark-outline'
              size={30}
              color={focused ? theme.PRIMARY : theme.BACKCOLOR} />
          ),
        }}
      />
      <TabChatGptBottom.Screen
        name='ChatGptProfile'
        component={Screens.Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarActiveBackgroundColor: theme.BACKCOLOR,
          tabBarIcon: ({ color, focused }) => (
            <Icon
              type='ionicon'
              name='person-outline'
              size={30}
              color={focused ? theme.PRIMARY : theme.BACKCOLOR} />
          ),
        }}
      />
    </TabChatGptBottom.Navigator>
  );
};