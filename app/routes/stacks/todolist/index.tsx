import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Screens from '@/screens/todolist';
import { navOptionHandler } from '@/utils';

const StackToDoList = createStackNavigator();
export const ToDoListStack = () => {
  return (
    <StackToDoList.Navigator
      initialRouteName='ToDoListSplash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackToDoList.Screen
        name='ToDoListSplash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackToDoList.Screen
        name='ToDoListHome'
        component={Screens.ToDoList}
        options={navOptionHandler}
      />
    </StackToDoList.Navigator>
  );
};