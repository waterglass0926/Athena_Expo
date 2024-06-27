import 'react-native-reanimated';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import React, { FC, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { LogBox, StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

import AppContainer from '@/routes';
import Components from '@/components';
import store, { persistor } from '@/stores';

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
        <AppContainer />
        <Components.Loading />
        <Toast />
      </PersistGate>
    </Provider>
  );
};