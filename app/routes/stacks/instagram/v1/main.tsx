import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { InstagramV1BottomTab } from '@/routes/tabs/instagram/v1/bottom';
import Screens from '@/screens/instagram/v1';
import Components from '@/components/instagram/v1';
import { navOptionHandler } from '@/utils';

const StackInstagramV1Main = createStackNavigator();
export const InstagramV1MainStack = () => {
  return (
    <StackInstagramV1Main.Navigator
      initialRouteName='InstagramV1BottomTab'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackInstagramV1Main.Screen
        name='InstagramV1BottomTab'
        component={InstagramV1BottomTab}
        options={navOptionHandler}
      />
      <StackInstagramV1Main.Screen
        name='InstagramV1Status'
        component={Components.Status}
        options={navOptionHandler}
      />
      <StackInstagramV1Main.Screen
        name='InstagramV1FriendProfile'
        component={Components.FriendProfile}
        options={navOptionHandler}
      />
      <StackInstagramV1Main.Screen
        name='InstagramV1EditProfile'
        component={Components.EditProfile}
        options={navOptionHandler}
      />
    </StackInstagramV1Main.Navigator>
  );
};