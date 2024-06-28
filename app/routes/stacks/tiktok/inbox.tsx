import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/tiktok';
import { navOptionHandler } from '@/utils';

const StackTikTokInbox = createStackNavigator();
export default TikTokInboxStack = () => {
  return (
    <StackTikTokInbox.Navigator
      initialRouteName='TikTokInbox'
      screenOptions={{ gestureEnabled: false }}>
      <StackTikTokInbox.Screen
        name='TikTokInbox'
        component={Screens.Inbox}
        options={navOptionHandler}
      />
    </StackTikTokInbox.Navigator>
  );
};