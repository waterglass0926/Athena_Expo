import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';

import { Text } from 'react-native';

import Screens from '@/screens/slack';
import Components from '@/components/slack';
import Constants from '@/constants';
import Functtions, { navOptionHandler } from '@/utils';

const TabSlackBottom = createBottomTabNavigator();
export const SlackBottomTab = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <TabSlackBottom.Navigator
      initialRouteName='SlackHome'
      tabBar={props => <Components.BottomTabs {...props} />}
    >
      <TabSlackBottom.Screen
        name='SlackHome'
        component={Screens.ChannelList}
        options={navOptionHandler}
        tabBarLabel='Home'
      />
      <TabSlackBottom.Screen
        name='SlackDirectMessages'
        component={Screens.DirectMessages}
        options={navOptionHandler}
        tabBarLabel='Direct Messages'
      />
      <TabSlackBottom.Screen
        name='SlackMentions'
        component={Screens.Mentions}
        options={navOptionHandler}
        tabBarLabel='Mentions'
      />
      <TabSlackBottom.Screen
        name='SlackProfile'
        component={Screens.Profile}
        options={navOptionHandler}
        tabBarLabel='Profile'
      />
    </TabSlackBottom.Navigator>
  );
};