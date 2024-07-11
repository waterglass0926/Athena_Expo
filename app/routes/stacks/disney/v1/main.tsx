import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { DisneyV1BottomTab } from '@/routes/tabs/disney/v1/bottom';
import Screens from '@/screens/disney/v1';
import { navOptionHandler } from '@/utils';

const StackDisneyV1Main = createStackNavigator();
export const DisneyV1MainStack = () => {
  return (
    <StackDisneyV1Main.Navigator
      initialRouteName='DisneyV1BottomTab'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackDisneyV1Main.Screen
        name='DisneyV1BottomTab'
        component={DisneyV1BottomTab}
        options={navOptionHandler}
      />
      <StackDisneyV1Main.Screen
        name='DisneyV1ModalAddProfile'
        component={Screens.ModalAddProfile}
        options={{
          presentation: 'modal'
        }}
      />
      <StackDisneyV1Main.Screen
        name='DisneyV1ModalManageProfiles'
        component={Screens.ModalManageProfiles}
        options={{
          presentation: 'modal'
        }}
      />
      <StackDisneyV1Main.Screen
        name='DisneyV1ModalVideo'
        component={Screens.ModalVideo}
        options={{
          presentation: 'modal'
        }}
      />
      <StackDisneyV1Main.Screen
        name='DisneyV1ModalWebView'
        component={Screens.ModalWebView}
        options={{
          presentation: 'modal'
        }}
      />
    </StackDisneyV1Main.Navigator>
  );
};