import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import TranslatorHomeDrawer, { DrawerParamList } from '@/routes/drawers/translator/home';
import Screens from '@/screens/translator';
import { FullProps } from '@/screens/translator/full';

export type RootStackParamList = {
  HomeDrawer: undefined;
  Full: FullProps;
  CardSequence: undefined;
  Credit: undefined;
  History: undefined;
  Oss: undefined;
};

export type NavigationParamList = RootStackParamList & DrawerParamList;

const StackTranslatorHome = createStackNavigator<RootStackParamList>();
export default TranslatorHomeStack = () => {
  return (
    <StackTranslatorHome.Navigator
      initialRouteName='HomeDrawer'
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <StackTranslatorHome.Screen name='HomeDrawer' component={TranslatorHomeDrawer} />
      <StackTranslatorHome.Screen name='Full' component={Screens.Full} />
      <StackTranslatorHome.Screen name='CardSequence' component={Screens.CardSequence} />
      <StackTranslatorHome.Screen name='Credit' component={Screens.Credit} />
      <StackTranslatorHome.Screen name='History' component={Screens.History} />
      <StackTranslatorHome.Screen name='Oss' component={Screens.Oss} />
    </StackTranslatorHome.Navigator>
  );
};