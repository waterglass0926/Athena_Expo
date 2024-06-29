import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Screens from '@/screens/translator';

export type DrawerParamList = {
  Home: undefined;
};

const TranslatorDrawerHome = createDrawerNavigator<DrawerParamList>();
export default TranslatorHomeDrawer = () => {
  return (
    <TranslatorDrawerHome.Navigator
      initialRouteName='Home'
      drawerContent={Screens.HomeDrawerContent}
      screenOptions={{
        drawerPosition: 'left',
        drawerType: 'front',
        headerShown: false,
      }}>
      <TranslatorDrawerHome.Screen name='Home' component={Screens.Home} />
    </TranslatorDrawerHome.Navigator>
  );
};