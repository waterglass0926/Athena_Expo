import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';
import { SvgXml } from 'react-native-svg';

import { Text } from 'react-native';

import { DatingV3MatchStack } from '@/routes/stacks/dating/v3/match';
import { DatingV3ChatStack } from '@/routes/stacks/dating/v3/chat';
import { DatingV3EventsStack } from '@/routes/stacks/dating/v3/events';
import { DatingV3ProfileStack } from '@/routes/stacks/dating/v3/profile';

import Screens from '@/screens/dating/v3';
// import Components from '@/components/dating/v3';
import Constants from '@/constants';
import Functions, { navOptionHandler } from '@/utils';

const TabDatingV3Bottom = createBottomTabNavigator();
export const DatingV3BottomTab = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <TabDatingV3Bottom.Navigator
      initialRouteName='DatingV3MatchStack'
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 60,
          backgroundColor: Constants.COLORS.DATING.V3.BLUE90,
          paddingTop: 8,
          paddingBottom: 8,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'DatingV3MatchStack') {
            iconName = <SvgXml
              xml={focused ? Constants.SVGS.DATING.V3.TAB.MATCH2 : Constants.SVGS.DATING.V3.TAB.MATCH1}
            />
          } else if (route.name === 'DatingV3ChatStack') {
            iconName = <SvgXml
              xml={focused ? Constants.SVGS.DATING.V3.TAB.CHAT2 : Constants.SVGS.DATING.V3.TAB.CHAT1}
            />
          } else if (route.name === 'DatingV3EventsStack') {
            iconName = <SvgXml
              xml={focused ? Constants.SVGS.DATING.V3.TAB.EVENTS2 : Constants.SVGS.DATING.V3.TAB.EVENTS1}
            />
          } else if (route.name === 'DatingV3ProfileStack') {
            iconName = <SvgXml
              xml={focused ? Constants.SVGS.DATING.V3.TAB.PROFILE2 : Constants.SVGS.DATING.V3.TAB.PROFILE1}
            />
          }
          return iconName;
        },
        tabBarLabel: ({ focused, color, size }) => {
          let labelName, labelColor, fontWeight;
          if (route.name === 'DatingV3MatchStack') {
            labelName = 'Match';
            labelColor = focused ? Constants.COLORS.DATING.V3.ACTIVE : Constants.COLORS.DATING.V3.INACTIVE;
            fontWeight = focused ? '700' : '500';
          } else if (route.name === 'DatingV3ChatStack') {
            labelName = 'Chat';
            labelColor = focused ? Constants.COLORS.DATING.V3.ACTIVE : Constants.COLORS.DATING.V3.INACTIVE;
            fontWeight = focused ? '700' : '500';
          } else if (route.name === 'DatingV3EventsStack') {
            labelName = 'Events';
            labelColor = focused ? Constants.COLORS.DATING.V3.ACTIVE : Constants.COLORS.DATING.V3.INACTIVE;
            fontWeight = focused ? '700' : '500';
          } else if (route.name === 'DatingV3ProfileStack') {
            labelName = 'Profile';
            labelColor = focused ? Constants.COLORS.DATING.V3.ACTIVE : Constants.COLORS.DATING.V3.INACTIVE;
            fontWeight = focused ? '700' : '500';
          }
          return <Text style={{ fontSize: 12, fontWeight: fontWeight, color: labelColor }}>{labelName}</Text>;
        },
        activeTintColor: Constants.COLORS.DATING.V3.ACTIVE,
        inactiveTintColor: Constants.COLORS.DATING.V3.INACTIVE,
      })}
    >
      <TabDatingV3Bottom.Screen
        name='DatingV3MatchStack'
        component={DatingV3MatchStack}
        options={navOptionHandler}
        tabBarLabel='Match'
      />
      <TabDatingV3Bottom.Screen
        name='DatingV3ChatStack'
        component={DatingV3ChatStack}
        options={navOptionHandler}
        tabBarLabel='Chat'
      />
      <TabDatingV3Bottom.Screen
        name='DatingV3EventsStack'
        component={DatingV3EventsStack}
        options={navOptionHandler}
        tabBarLabel='Events'
      />
      <TabDatingV3Bottom.Screen
        name='DatingV3ProfileStack'
        component={DatingV3ProfileStack}
        options={navOptionHandler}
        tabBarLabel='Profile'
      />
    </TabDatingV3Bottom.Navigator>
  );
};