import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/disney/v1';
import { navOptionHandler } from '@/utils';

const StackDisneyV1Profile = createStackNavigator();
export const DisneyV1ProfileStack = () => {
  return (
    <StackDisneyV1Profile.Navigator
      initialRouteName='DisneyV1Profile'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackDisneyV1Profile.Screen
        name='DisneyV1Profile'
        component={Screens.Profile}
        options={navOptionHandler}
      />
      <StackDisneyV1Profile.Screen
        name='DisneyV1ProfileAppSettings'
        component={Screens.ProfileAppSettings}
        options={navOptionHandler}
      />
      <StackDisneyV1Profile.Screen
        name='DisneyV1ProfileWatchlist'
        component={Screens.ProfileWatchlist}
        options={navOptionHandler}
      />
    </StackDisneyV1Profile.Navigator>
  );
};