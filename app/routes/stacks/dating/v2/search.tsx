import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SearchMain } from '@/screens/dating/v2/Search/Main';
import { EventsDetail } from '@/screens/dating/v2/Events/Detail';

const StackDatingV2Search = createStackNavigator();
export function DatingV2SearchStack() {
  return (
    <StackDatingV2Search.Navigator
      initialRouteName='DatingV2SearchMain'
      screenOptions={{ headerShown: false }}
    >
      <StackDatingV2Search.Screen name='DatingV2SearchMain' component={SearchMain} />
      <StackDatingV2Search.Screen
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
    </StackDatingV2Search.Navigator>
  );
};