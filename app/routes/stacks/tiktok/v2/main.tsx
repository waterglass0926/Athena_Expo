import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TikTokV2BottomTab } from '@/routes/tabs/tiktok/v2/bottom';
import Screens from '@/screens/tiktok/v2';
import Components from '@/components/tiktok/v2';
import { userAuthStateListener } from '@/stores/tiktok/v2/auth'; // Make sure the path is correct

const StackTikTokV2Main = createNativeStackNavigator();

export function TikTokV2MainStack() {
  const currentUserObj = useSelector(state => state.tiktokV2Auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAuthStateListener());
  }, [dispatch]);

  // if (!currentUserObj?.loaded) {
  //   return <View></View>;
  // };

  return (
    <StackTikTokV2Main.Navigator>
      {currentUserObj.currentUser == null ? (
        <StackTikTokV2Main.Screen
          name='TikTokV2Auth'
          component={Screens.Auth}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <StackTikTokV2Main.Screen
            name='TikTokV2BottomTab'
            component={TikTokV2BottomTab}
            options={{ headerShown: false }}
          />
          <StackTikTokV2Main.Screen
            name='TikTokV2SavePost'
            component={Screens.SavePost}
            options={{ headerShown: false }}
          />
          <StackTikTokV2Main.Screen
            name='TikTokV2UserPosts'
            component={Screens.Feed}
            options={{ headerShown: false }}
          />
          <StackTikTokV2Main.Screen
            name='TikTokV2ProfileOther'
            component={Screens.Profile}
            options={{ headerShown: false }}
          />
          <StackTikTokV2Main.Screen
            name='TikTokV2EditProfile'
            component={Screens.EditProfile}
            options={{ headerShown: false }}
          />
          <StackTikTokV2Main.Screen
            name='TikTokV2EditProfileField'
            component={Screens.EditProfileField}
            options={{ headerShown: false }}
          />
          <StackTikTokV2Main.Screen
            name='TikTokV2ChatSingle'
            component={Screens.ChatSingle}
            options={{ headerShown: false }}
          />
        </>
      )}
    </StackTikTokV2Main.Navigator>
  );
};
