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
import Serenity from '@/components/serenity';
import store, { persistor } from '@/stores';
import { HistoryProvider } from '@/contexts/translator/HistoryContext';
import { CardSequenceProvider } from '@/contexts/translator/CardSequenceContext';
import { TranslateProvider } from '@/contexts/translator/TranslateContext';

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
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle='light-content' hidden />
        <HistoryProvider>
          <CardSequenceProvider>
            <TranslateProvider>
              <AppContainer />
            </TranslateProvider>
          </CardSequenceProvider>
        </HistoryProvider>
        <Components.Loading />
        <Serenity.NotificationBar />
        <Toast />
      </PersistGate>
    </Provider>
  );
};