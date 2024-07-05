import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme, IconButton } from 'react-native-paper';

import Screens from '@/screens/senerity';
import Functions, { getGreetingTime } from '@/utils';

const StackSenerityHome = createStackNavigator();

export const SenerityHomeStack = () => {
  const theme = useTheme();
  const { colors } = theme;

  return (
    <StackSenerityHome.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerTintColor: colors.text,
        safeAreaInsets: { top: 0, bottom: 0 },
        headerBackImage: () => (
          <IconButton style={{ marginLeft: 0 }} icon='arrow-back' />
        ),
        headerBackTitleVisible: false
      }}
    >
      <StackSenerityHome.Screen
        name='SenerityHome'
        component={Screens.Main}
        options={({ navigation }) => ({
          headerTitle: getGreetingTime(),
          headerTitleStyle: { fontFamily: 'Nunito-ExtraBold', fontSize: 24 },
          headerRight: () => (
            <IconButton
              icon='settings-outline'
              onPress={() => navigation.navigate('SeneritySettings')}
            />
          ),
        })}
      />
      <StackSenerityHome.Screen
        name='SeneritySettings'
        component={Screens.Settings}
        options={{
          headerTitleAlign: 'center',
          headerTitle: 'Settings',
        }}
      />
      <StackSenerityHome.Screen
        name='SenerityPlaylist'
        component={Screens.PlaylistSongs}
      />
      <StackSenerityHome.Screen
        name='SenerityFavorites'
        component={Screens.Favorites}
        options={{
          title: 'Liked Songs'
        }}
      />
      <StackSenerityHome.Screen
        name='SenerityHistory'
        component={Screens.History}
      />
      <StackSenerityHome.Screen
        name='SenerityMostPlayed'
        component={Screens.MostPlayed}
        options={{
          title: 'Most Played Songs'
        }}
      />
      <StackSenerityHome.Screen
        name='SenerityPodcast'
        component={Screens.Podcast}
      />
      <StackSenerityHome.Screen
        name='SenerityMeditation'
        component={Screens.Meditation}
      />
      <StackSenerityHome.Screen
        name='SeneritySongs'
        component={Screens.Playlist}
      />
    </StackSenerityHome.Navigator>
  );
};