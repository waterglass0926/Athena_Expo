import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';

import { UberEatsHomeStack } from '@/routes/stacks/ubereats/home';
import Screens from '@/screens/ubereats';
import Components from '@/components/ubereats/others';
import Constants from '@/constants';
import Functtions from '@/utils';

const TabUberEatsBottom = createBottomTabNavigator();
export const UberEatsBottomTab = ({ navigation }) => {

  return (
    <TabUberEatsBottom.Navigator
      initialRouteName='UberEatsHomeStack'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
          paddingTop: 10,
          paddingBottom: 10,
          height: 60,
        },
        tabBarActiveTintColor: Constants.COLORS.UBEREATS.activeTintColor,
        tabBarInactiveTintColor: Constants.COLORS.UBEREATS.inActiveTintColor,
      })}
    >
      <TabUberEatsBottom.Screen
        name='UberEatsHomeStack'
        component={UberEatsHomeStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              type='ant-design'
              name='home'
              size={size}
              color={color} />
          ),
        }}
      />
      <TabUberEatsBottom.Screen
        name='UberEatsBrowser'
        component={Screens.Browser}
        options={{
          headerShown: false,
          tabBarLabel: 'Browser',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              type='ionicon'
              name='search-sharp'
              size={size}
              color={color} />
          ),
        }}
      />
      <TabUberEatsBottom.Screen
        name='UberEatsCart'
        component={Screens.Cart}
        options={{
          headerShown: false,
          tabBarLabel: 'Cart',
          tabBarButton: () => <Components.TabCartButton onPress={() => navigation.navigate('UberEatsCart')} />,
        }}
      />
      <TabUberEatsBottom.Screen
        name='UberEatsGrocery'
        component={Screens.Grocery}
        options={{
          headerShown: false,
          tabBarLabel: 'Grocery',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              type='entypo'
              name='shopping-bag'
              size={size}
              color={color} />
          ),
        }}
      />
      <TabUberEatsBottom.Screen
        name='UberEatsAccount'
        component={Screens.Account}
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
          tabBarIcon: ({ color, size, focused }) => (
            <Icon
              type='feather'
              name='user'
              size={size}
              color={color} />
          ),
        }}
      />
    </TabUberEatsBottom.Navigator>
  );
};