import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import { DatingV2HomeStack } from '@/routes/stacks/dating/v2/home';
import { DatingV2CategoriesStack } from '@/routes/stacks/dating/v2/categories';
import { DatingV2SearchStack } from '@/routes/stacks/dating/v2/search';

const TabDatingV2Bottom = createBottomTabNavigator();
export function DatingV2BottomTab() {
  return (
    <TabDatingV2Bottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 5,
          left: 20,
          right: 20,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },

        tabBarShowLabel: false,
      }}
    >
      <TabDatingV2Bottom.Screen
        name='DatingV2HomeStack'
        component={DatingV2HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FontAwesome
                name='home'
                size={24}
                color={focused ? '#76468F' : '#748c94'}
              />
              <Text
                style={{
                  color: focused ? '#76468F' : '#748c94',
                  fontSize: 12,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <TabDatingV2Bottom.Screen
        name='DatingV2SearchStack'
        component={DatingV2SearchStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FontAwesome
                name='search'
                size={18}
                color={focused ? '#76468F' : '#748c94'}
              />
              <Text
                style={{
                  color: focused ? '#76468F' : '#748c94',
                  fontSize: 12,
                }}
              >
                Search
              </Text>
            </View>
          ),
        }}
      />
      <TabDatingV2Bottom.Screen
        name='DatingV2CategoriesStack'
        component={DatingV2CategoriesStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FontAwesome
                name='bars'
                size={18}
                color={focused ? '#76468F' : '#748c94'}
              />
              <Text
                style={{
                  color: focused ? '#76468F' : '#748c94',
                  fontSize: 12,
                }}
              >
                Categories
              </Text>
            </View>
          ),
        }}
      />
    </TabDatingV2Bottom.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});