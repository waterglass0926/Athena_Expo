import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/dating/v3';
// import Components from '@/components/dating/v3';
import { navOptionHandler } from '@/utils';

const StackDatingV3Events = createStackNavigator();
export const DatingV3EventsStack = () => {
  return (
    <StackDatingV3Events.Navigator
      initialRouteName='DatingV3EventsHome'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackDatingV3Events.Screen
        name='DatingV3EventsHome'
        component={Screens.EventsHome}
        options={navOptionHandler}
      />
    </StackDatingV3Events.Navigator>
  );
};