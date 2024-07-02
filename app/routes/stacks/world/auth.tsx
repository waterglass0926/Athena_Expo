import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/world';
import { navOptionHandler } from '@/utils';

const StackWorldAuth = createStackNavigator();
export const WorldAuthStack = () => {
  return (
    <StackWorldAuth.Navigator
      initialRouteName='WorldSignIn'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackWorldAuth.Screen
        name='WorldSignIn'
        component={Screens.SignIn}
        options={navOptionHandler}
      />
      <StackWorldAuth.Screen
        name='WorldSignUp'
        component={Screens.SignUp}
        options={navOptionHandler}
      />
      {/* <StackWorldAuth.Screen
        name='WorldForgot'
        component={Screens.Forgot}
        options={navOptionHandler}
      /> */}
    </StackWorldAuth.Navigator>
  );
};