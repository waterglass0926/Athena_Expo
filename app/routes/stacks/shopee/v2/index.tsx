import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ShopeeV2Main from './main';
import { navOptionHandler } from '@/utils';

const StackShopeeV2 = createStackNavigator();
export const ShopeeV2Stack = () => {
  return (
    <StackShopeeV2.Navigator
      initialRouteName='ShopeeV2Main'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackShopeeV2.Screen
        name='ShopeeV2Main'
        component={ShopeeV2Main}
        options={navOptionHandler}
      />
    </StackShopeeV2.Navigator>
  );
};