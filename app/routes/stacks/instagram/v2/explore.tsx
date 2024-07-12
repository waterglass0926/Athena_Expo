import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/instagram/v2';
import Components from '@/components/instagram/v2';
import { navOptionHandler } from '@/utils';

const StackInstagramV2Explore = createStackNavigator();
export const InstagramV2ExploreStack = () => {
  return (
    <StackInstagramV2Explore.Navigator
      initialRouteName='InstagramV2Explore'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackInstagramV2Explore.Screen
        name='InstagramV2Explore'
        component={Screens.Explore}
        options={navOptionHandler}
      />
      <StackInstagramV2Explore.Screen
        name='InstagramV2ExploreDetail'
        component={Screens.ExploreDetail}
        options={navOptionHandler}
      />
    </StackInstagramV2Explore.Navigator>
  );
};