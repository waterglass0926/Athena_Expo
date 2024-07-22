import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeMain } from '@/screens/dating/v2/Home/Main';
import { EventsDetail } from '@/screens/dating/v2/Events/Detail';

const StackDatingV2Home = createStackNavigator();

export function DatingV2HomeStack() {
  return (
    <StackDatingV2Home.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <StackDatingV2Home.Screen name='DatingV2HomeMain' component={HomeMain} />
      <StackDatingV2Home.Screen
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
    </StackDatingV2Home.Navigator>
  );
};