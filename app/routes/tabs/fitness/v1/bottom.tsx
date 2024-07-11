import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';

import { Text } from 'react-native';

import { FitnessV1HomeStack } from '@/routes/stacks/fitness/v1/home';

import Screens from '@/screens/fitness/v1';
import Components from '@/components/fitness/v1';
import Constants from '@/constants';
import Functions, { navOptionHandler } from '@/utils';

const TabFitnessV1Bottom = createBottomTabNavigator();
export const FitnessV1BottomTab = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <TabFitnessV1Bottom.Navigator
      initialRouteName='FitnessV1HomeStack'
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: theme.PRIMARY,
          paddingTop: 8,
          shadowColor: Constants.COLORS.DEFAULT.BLACK,
          shadowOffset: { width: 1, height: 1 },
          shadowOpacity: 0.9,
          shadowRadius: 1,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName, iconColor;
          if (route.name === 'FitnessV1HomeStack') {
            iconType = 'material-community';
            iconName = focused ? 'home-lightbulb' : 'home-lightbulb-outline';
            iconColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
          }
          return <Icon type={iconType} name={iconName} size={25} color={iconColor} />;
        },
        tabBarLabel: ({ focused, color, size }) => {
          let labelName, labelColor, fontWeight;
          if (route.name === 'FitnessV1HomeStack') {
            labelName = 'Home';
            labelColor = focused ? Constants.COLORS.DEFAULT.WHITE : theme.QUATERNARY;
            fontWeight = focused ? '700' : '500';
          }
          return <Text style={{ fontSize: 12, fontWeight: fontWeight, color: labelColor }}>{labelName}</Text>;
        },
        activeTintColor: Constants.COLORS.DEFAULT.WHITE,
        inactiveTintColor: theme.QUATERNARY,
      })}
    >
      <TabFitnessV1Bottom.Screen
        name='FitnessV1HomeStack'
        component={FitnessV1HomeStack}
        options={navOptionHandler}
        tabBarLabel='Home'
      />
    </TabFitnessV1Bottom.Navigator>
  );
};