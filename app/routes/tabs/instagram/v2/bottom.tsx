import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

import { View, Text, ScrollView } from 'react-native';

import { InstagramV2ExploreStack } from '@/routes/stacks/instagram/v2/explore';
import Screens from '@/screens/instagram/v2';
import Components from '@/components/instagram/v2';
import Constants from '@/constants';
import Functions, { navOptionHandler } from '@/utils';

const tabIconSize = 25;
const colorFocused = '#F88925';
const iconColor = '#222';

const TabInstagramV2Bottom = createBottomTabNavigator();
export const InstagramV2BottomTab = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <TabInstagramV2Bottom.Navigator
      screenOptions={{
        headerShown: false,
        keyboardHidesTabBar: true,

        showLabel: false,
        style: {
          elevation: 0,
          // paddingVertical: 5,
          backgroundColor: '#ffffff00',
          borderTopWidth: 0,
        },
      }}
    >
      <TabInstagramV2Bottom.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            <Icon
              type='entypo'
              name='home'
              size={tabIconSize}
              color={focused ? colorFocused : iconColor}
            />
          ),
        }}
        name='InstagramV2Home'
        component={Screens.Home}
      />
      <TabInstagramV2Bottom.Screen
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ focused }) => (
            <Icon
              type='antdesign'
              name='search1'
              size={tabIconSize}
              color={focused ? colorFocused : iconColor}
            />
          ),
        }}
        name='InstagramV2ExploreStack'
        component={InstagramV2ExploreStack}
      />
      <TabInstagramV2Bottom.Screen
        options={{
          tabBarLabel: 'New Post',
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                marginTop: -40,
                elevation: 4,
              }}>
              <LinearGradient
                style={{
                  borderRadius: 100,
                  height: 60,
                  width: 60,
                }}
                colors={['#E5197E', colorFocused]}>
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 2,
                    borderColor: '#fff',
                    elevation: 1,
                    borderRadius: 100,
                  }}>
                  <Icon
                    type='antdesign'
                    name='plus'
                    size={tabIconSize}
                    color={focused ? colorFocused : iconColor}
                    color='#fff'
                  />
                </View>
              </LinearGradient>
            </View>
          ),
        }}
        name='InstagramV2AddNewPost'
        component={Screens.AddNewPost}
      />
      <TabInstagramV2Bottom.Screen
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ focused }) => (
            <Icon
              type='antdesign'
              name='hearto'
              size={tabIconSize}
              color={focused ? colorFocused : iconColor}
            />
          ),
        }}
        name='InstagramV2Notifications'
        component={Screens.Notifications}
      />
      <TabInstagramV2Bottom.Screen
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Icon
              type='feather'
              name='user'
              size={tabIconSize}
              color={focused ? colorFocused : iconColor}
            />
          ),
        }}
        name='InstagramV2Profile'
        component={Screens.Profile}
      />
    </TabInstagramV2Bottom.Navigator>
  );
};