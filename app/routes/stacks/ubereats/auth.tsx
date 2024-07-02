import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/ubereats';
import { navOptionHandler } from '@/utils';

const StackUberEatsAuth = createStackNavigator();
export const UberEatsAuthStack = () => {
  return (
    <StackUberEatsAuth.Navigator
      initialRouteName='UberEatsSignUp'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackUberEatsAuth.Screen
        name='UberEatsSignUp'
        component={Screens.SignUp}
        options={navOptionHandler}
      />
      <StackUberEatsAuth.Screen
        name='UberEatsSignIn'
        component={Screens.SignIn}
        options={navOptionHandler}
      />
    </StackUberEatsAuth.Navigator>
  );
};