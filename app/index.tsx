import 'react-native-reanimated';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { LogBox, StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

import { AppContainer } from '@/routes';
import Components from '@/components';
import Functions from '@/utils';
import store, { persistor } from '@/stores';
import { HistoryProvider } from '@/contexts/translator/HistoryContext';
import { CardSequenceProvider } from '@/contexts/translator/CardSequenceContext';
import { TranslateProvider } from '@/contexts/translator/TranslateContext';
import { SpotifyProvider } from '@/contexts/spotify/SpotifyContext';

LogBox.ignoreLogs([
  'Warning: ...',
  '[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!',
]);
LogBox.ignoreAllLogs(true);

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default App = () => {
  const [loaded] = useFonts({
    SpaceMono: require('@/assets/fonts/athena/SpaceMono-Regular.ttf'),
    Urbanist: require('@/assets/fonts/athena/Urbanist-Regular.ttf'),
    PoppinsRegular: require('@/assets/fonts/chatgpt/v1/Poppins-Regular.ttf'),
    PoppinsBold: require('@/assets/fonts/chatgpt/v1/Poppins-Bold.ttf'),
    TinderV1: require('@/assets/fonts/tinder/v1/Tinder-Regular.ttf'),
    Ubuntu: require('@/assets/fonts/paper/Ubuntu.ttf'),
    ShadowsIntoLight: require('@/assets/fonts/paper/ShadowsIntoLight.ttf'),
    spotifyLight: require('@/assets/fonts/spotify/spotify-light.ttf'),
    spotifyRegular: require('@/assets/fonts/spotify/spotify-regular.ttf'),
    spotifyBold: require('@/assets/fonts/spotify/spotify-bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    };
  }, [loaded]);

  if (!loaded) {
    return null;
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle='light-content' hidden />
        <HistoryProvider>
          <CardSequenceProvider>
            <TranslateProvider>
              <SpotifyProvider>
                <AppContainer />
              </SpotifyProvider>
            </TranslateProvider>
          </CardSequenceProvider>
        </HistoryProvider>
        <Components.Loading />
        <Toast />
      </PersistGate>
    </Provider>
  );
};