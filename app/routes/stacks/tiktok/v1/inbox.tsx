import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/tiktok/v1';
import { navOptionHandler } from '@/utils';

const StackTikTokV1Inbox = createStackNavigator();
export const TikTokV1InboxStack = () => {
  return (
    <StackTikTokV1Inbox.Navigator
      initialRouteName='TikTokV1Inbox'
      screenOptions={{ gestureEnabled: false }}>
      <StackTikTokV1Inbox.Screen
        name='TikTokV1Inbox'
        component={Screens.Inbox}
        options={navOptionHandler}
      />
    </StackTikTokV1Inbox.Navigator>
  );
};