import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/fitness/v1';
import { navOptionHandler } from '@/utils';

const StackFitnessV1Auth = createStackNavigator();
export const FitnessV1AuthStack = () => {
  return (
    <StackFitnessV1Auth.Navigator
      initialRouteName='FitnessV1SignIn'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackFitnessV1Auth.Screen
        name='FitnessV1SignIn'
        component={Screens.SignIn}
        options={navOptionHandler}
      />
      <StackFitnessV1Auth.Screen
        name='FitnessV1SignUp'
        component={Screens.SignUp}
        options={navOptionHandler}
      />
      {/* <StackFitnessV1Auth.Screen
        name='FitnessV1Forgot'
        component={Screens.Forgot}
        options={navOptionHandler}
      /> */}
    </StackFitnessV1Auth.Navigator>
  );
};