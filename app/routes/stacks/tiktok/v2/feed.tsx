import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Screens from '@/screens/tiktok/v2';

interface CurrentUserProfileItemInViewContextType {
  currentUserProfileItemInView: string | null;
  setCurrentUserProfileItemInView: Dispatch<SetStateAction<string | null>>;
};

const { Screen, Navigator } = createMaterialTopTabNavigator();

export const CurrentUserProfileItemInViewContext =
  createContext<CurrentUserProfileItemInViewContextType>({
    currentUserProfileItemInView: null,
    setCurrentUserProfileItemInView: () => { },
  });

export const TikTokV2FeedStack = () => {
  const [currentUserProfileItemInView, setCurrentUserProfileItemInView] =
    useState<string | null>(null);

  return (
    <CurrentUserProfileItemInViewContext.Provider
      value={{
        currentUserProfileItemInView,
        setCurrentUserProfileItemInView,
      }}
    >
      <Navigator initialRouteName='TikTokV2FeedList' tabBar={() => <></>}>
        <Screen
          name='TikTokV2FeedList'
          component={Screens.Feed}
          initialParams={{ profile: false }}
        />
        <Screen
          name='TikTokV2FeedProfile'
          component={Screens.Profile}
          initialParams={{ initialUserId: '' }}
        />
      </Navigator>
    </CurrentUserProfileItemInViewContext.Provider>
  );
};