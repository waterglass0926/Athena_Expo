import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { FitnessV1AuthStack } from './auth';
import { FitnessV1BottomTab } from '@/routes/tabs/fitness/v1/bottom';
import Screens from '@/screens/fitness/v1';
import { navOptionHandler } from '@/utils';

const StackFitnessV1 = createStackNavigator();
export const FitnessV1Stack = () => {
  return (
    <StackFitnessV1.Navigator
      initialRouteName='FitnessV1Splash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackFitnessV1.Screen
        name='FitnessV1Splash'
        component={Screens.Start}
        options={navOptionHandler}
      />
      <StackFitnessV1.Screen
        name='FitnessV1AuthStack'
        component={FitnessV1AuthStack}
        options={navOptionHandler}
      />
      <StackFitnessV1.Screen
        name='FitnessV1BottomTab'
        component={FitnessV1BottomTab}
        options={navOptionHandler}
      />
    </StackFitnessV1.Navigator>
  );
};