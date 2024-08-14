import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/dating/v3';
// import Components from '@/components/dating/v3';
import { navOptionHandler } from '@/utils';

const StackDatingV3Match = createStackNavigator();
export const DatingV3MatchStack = () => {
  return (
    <StackDatingV3Match.Navigator
      initialRouteName='DatingV3MatchHome'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackDatingV3Match.Screen
        name='DatingV3MatchHome'
        component={Screens.MatchHome}
        options={navOptionHandler}
      />
    </StackDatingV3Match.Navigator>
  );
};