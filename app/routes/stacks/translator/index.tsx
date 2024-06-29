import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TranslatorHomeStack from './home';
import Screens from '@/screens/translator';
import { navOptionHandler } from '@/utils';

const StackTranslator = createStackNavigator();
export default TranslatorStack = () => {
  return (
    <StackTranslator.Navigator
      initialRouteName='TranslatorSplash'
      screenOptions={{ gestureEnabled: false }}
    >
      <StackTranslator.Screen
        name='TranslatorSplash'
        component={Screens.Splash}
        options={navOptionHandler}
      />
      <StackTranslator.Screen
        name='TranslatorHomeStack'
        component={TranslatorHomeStack}
        options={navOptionHandler}
      />
    </StackTranslator.Navigator>
  );
};