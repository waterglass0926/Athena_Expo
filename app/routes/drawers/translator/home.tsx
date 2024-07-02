import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Screens from '@/screens/translator';

export type DrawerParamList = {
  Home: undefined;
};

const TranslatorDrawerHome = createDrawerNavigator<DrawerParamList>();
export const TranslatorHomeDrawer = () => {
  return (
    <TranslatorDrawerHome.Navigator
      initialRouteName='Home'
      drawerContent={Screens.DrawerContent}
      screenOptions={{
        drawerPosition: 'left',
        drawerType: 'front',
        headerShown: false,
      }}>
      <TranslatorDrawerHome.Screen name='Home' component={Screens.Home} />
    </TranslatorDrawerHome.Navigator>
  );
};