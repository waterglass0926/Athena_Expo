import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { TikTokV2FeedStack } from '@/routes/stacks/tiktok/v2/feed';
import Screens from '@/screens/tiktok/v2';
import { useChats } from '@/hooks/tiktok/v2/useChats';
import { FIREBASE_AUTH } from '@/utils/firebase';

const TabTikTokV2Bottom = createMaterialBottomTabNavigator<HomeStackParamList>();

export function TikTokV2BottomTab() {
  useChats();

  return (
    <TabTikTokV2Bottom.Navigator
      barStyle={{ backgroundColor: 'black' }}
      initialRouteName='TikTokV2FeedStack'
    >
      <TabTikTokV2Bottom.Screen
        name='TikTokV2FeedStack'
        component={TikTokV2FeedStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name='home' size={24} color={color} />
          ),
        }}
      />
      <TabTikTokV2Bottom.Screen
        name='TikTokV2Discover'
        component={Screens.Search}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name='search' size={24} color={color} />
          ),
        }}
      />
      <TabTikTokV2Bottom.Screen
        name='TikTokV2Add'
        component={Screens.Cameras}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name='plus-square' size={24} color={color} />
          ),
        }}
      />
      <TabTikTokV2Bottom.Screen
        name='TikTokV2Inbox'
        component={Screens.Chats}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name='message-square' size={24} color={color} />
          ),
        }}
      />
      <TabTikTokV2Bottom.Screen
        name='TikTokV2Me'
        component={Screens.Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name='user' size={24} color={color} />
          ),
        }}
        initialParams={{ initialUserId: FIREBASE_AUTH.currentUser?.uid ?? '' }}
      />
    </TabTikTokV2Bottom.Navigator>
  );
}
