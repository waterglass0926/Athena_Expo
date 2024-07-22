import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { CategoriesHome } from '@/screens/dating/v2/Categories/Home';
import { EventsHome } from '@/screens/dating/v2/Events/Home';
import { EventsDetail } from '@/screens/dating/v2/Events/Detail';

const StackDatingV2Categories = createStackNavigator();
export const DatingV2CategoriesStack = () => {
  return (
    <StackDatingV2Categories.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackDatingV2Categories.Screen name='DatingV2CategoriesHome' component={CategoriesHome} />
      <StackDatingV2Categories.Screen
        name='DatingV2EventsHome'
        component={EventsHome}
        options={({ route }) => ({
          title: route.params.title,
          headerShown: true,
          headerStyle: {
            backgroundColor: '#ffffff',
            shadowColor: '#ffffff',
            elevation: 0,
          },
          headerTintColor: '#76468F',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
      <StackDatingV2Categories.Screen
        name='DatingV2EventsDetail'
        component={EventsDetail}
        options={({ route }) => ({
          title: route.params.title,
          headerShown: true,
          headerStyle: {
            backgroundColor: '#ffffff',
            shadowColor: '#ffffff',
            elevation: 0,
          },
          headerTintColor: '#76468F',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </StackDatingV2Categories.Navigator>
  );
};