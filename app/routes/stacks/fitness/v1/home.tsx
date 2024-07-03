import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/fitness/v1';
import { navOptionHandler } from '@/utils';

const StackFitnessV1Home = createStackNavigator();
export const FitnessV1HomeStack = () => {
  return (
    <StackFitnessV1Home.Navigator
      initialRouteName='FitnessV1Home'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackFitnessV1Home.Screen
        name='FitnessV1Home'
        component={Screens.Home}
        options={navOptionHandler}
      />
      {/* <StackFitnessV1Home.Screen
        name='FitnessV1Continents'
        component={Screen.Continents}
        options={navOptionHandler}
      /> */}
    </StackFitnessV1Home.Navigator>
  );
};