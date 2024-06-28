import 'react-native-reanimated';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as SecureStore from 'expo-secure-store';

import React, { FC, useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';

import { LogBox, StatusBar, ActivityIndicator, TouchableOpacity } from 'react-native';
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

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
// Cache the Clerk JWT
const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    };
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    };
  },
};

export default App = () => {
  const [loaded] = useFonts({
    SpaceMono: require('@/assets/fonts/athena/SpaceMono-Regular.ttf'),
    Urbanist: require('@/assets/fonts/athena/Urbanist-Regular.ttf'),
    PoppinsRegular: require('@/assets/fonts/chatgpt/version1.0/Poppins-Regular.ttf'),
    PoppinsBold: require('@/assets/fonts/chatgpt/version1.0/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  };

  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle='light-content' hidden />
          <AppContainer />
          <Components.Loading />
          <Toast />
        </PersistGate>
      </Provider>
    </ClerkProvider>
  );
};