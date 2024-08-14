import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/dating/v3';
// import Components from '@/components/dating/v3';
import { navOptionHandler } from '@/utils';

const StackDatingV3Profile = createStackNavigator();
export const DatingV3ProfileStack = () => {
  return (
    <StackDatingV3Profile.Navigator
      initialRouteName='DatingV3ProfileHome'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackDatingV3Profile.Screen
        name='DatingV3ProfileHome'
        component={Screens.ProfileHome}
        options={navOptionHandler}
      />
    </StackDatingV3Profile.Navigator>
  );
};