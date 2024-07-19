import React from 'react';
import { Alert, Dimensions, StatusBar, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Home from '@/screens/dating/v1/Home'; // Adjust the import path as needed
import Detail from '@/screens/dating/v1/Detail'; // Adjust the import path as needed
import Header from '@/components/dating/v1/Header';
import TopHeader from '@/components/dating/v1/TopHeader'; // Adjust the import path as needed
import ConstantsForDatingV1 from '@/constants';
import { BAR_HEIGHT } from '@/constants/styles';

const StackDatingV1 = createStackNavigator();
export const DatingV1Stack = () => {
  return (
    <StackDatingV1.Navigator
      initialRouteName='DatingV1Home'
      screenOptions={{
        headerTintColor: '#FFF',
        headerStyle: { backgroundColor: '#FF0088' },
        headerTitleStyle: { fontWeight: 'bold' },
        headerLeft: () => (
          <Ionicons
            name='menu'
            size={34}
            onPress={() => Alert.alert('Menu button pressed')}
            style={[
              ConstantsForDatingV1.STYLES.DATING.V1.shadow,
              {
                backgroundColor: 'transparent',
                marginTop: 4,
                marginLeft: 14,
                shadowColor: '#000'
              }
            ]}
            color='#FFF'
          />
        ),
        headerRight: () => (
          <Ionicons
            name='options'
            onPress={() => Alert.alert('Options button pressed')}
            size={30}
            style={[
              ConstantsForDatingV1.STYLES.DATING.V1.shadow,
              {
                backgroundColor: 'transparent',
                marginTop: 8,
                marginRight: 14
              }
            ]}
            color='#FFF'
          />
        ),
        headerBackground: () => <TopHeader />
      }}
    >
      <StackDatingV1.Screen
        name='DatingV1Home'
        component={Home}
        options={{ headerTitle: props => <Header {...props} /> }}
      />
      <StackDatingV1.Screen
        name='DatingV1Detail'
        component={Detail}
        options={({ route }) => ({ headerTitle: route.params.title })}
      />
    </StackDatingV1.Navigator>
  );
};