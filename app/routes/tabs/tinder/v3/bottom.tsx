import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Matches from '@/screens/tinder/v3/Matches';
import Messages from '@/screens/tinder/v3/Messages';
import Profile from '@/screens/tinder/v3/Profile';
import Swipe from '@/screens/tinder/v3/Swipe';

const TabTinderV3Bottom = createBottomTabNavigator();
export const TinderV3BottomTab = () => {
  return (
    <TabTinderV3Bottom.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#e94057',
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'TinderV3Swipe') {
            iconName = 'cards';
          } else if (route.name === 'TinderV3Matches') {
            iconName = 'heart';
          } else if (route.name === 'TinderV3Messages') {
            iconName = 'chat';
          } else if (route.name === 'TinderV3Profile') {
            iconName = 'account';
          } else {
            iconName = 'cards';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <TabTinderV3Bottom.Screen name='TinderV3Swipe' component={Swipe} />
      <TabTinderV3Bottom.Screen name='TinderV3Matches' component={Matches} />
      <TabTinderV3Bottom.Screen name='TinderV3Messages' component={Messages} />
      <TabTinderV3Bottom.Screen name='TinderV3Profile' component={Profile} />
    </TabTinderV3Bottom.Navigator>
  );
}