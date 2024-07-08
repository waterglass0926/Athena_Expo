import 'react-native-reanimated';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { LogBox, StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

import { StreamChat } from 'stream-chat';
import { CopilotProvider, copilot } from 'react-native-copilot';

import { AppContainer } from '@/routes';
import Components from '@/components';
import { DarkTheme, LightTheme } from '@/constants/themes';
import store, { persistor } from '@/stores';
import { HistoryProvider } from '@/contexts/translator/HistoryContext';
import { CardSequenceProvider } from '@/contexts/translator/CardSequenceContext';
import { TranslateProvider } from '@/contexts/translator/TranslateContext';

import {
  ChatUserContext,
  ChatClientService,
  USER_TOKENS,
  USERS,
} from '@/utils/slack';

LogBox.ignoreLogs([
  'Warning: ...',
  '[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!',
]);
LogBox.ignoreAllLogs(true);

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default App = (props) => {
  const [connecting, setConnecting] = useState(true);
  const [user, setUser] = useState(USERS.vishal);

  const [loaded] = useFonts({
    SpaceMono: require('@/assets/fonts/athena/SpaceMono-Regular.ttf'),
    Urbanist: require('@/assets/fonts/athena/Urbanist-Regular.ttf'),
    PoppinsRegular: require('@/assets/fonts/chatgpt/v1/Poppins-Regular.ttf'),
    PoppinsBold: require('@/assets/fonts/chatgpt/v1/Poppins-Bold.ttf'),
    TinderV1: require('@/assets/fonts/tinder/v1/Tinder-Regular.ttf'),
    Ubuntu: require('@/assets/fonts/paper/Ubuntu.ttf'),
    ShadowsIntoLight: require('@/assets/fonts/paper/ShadowsIntoLight.ttf'),
  });

  // useEffect(() => {
  //   props.start();
  // }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    let client;

    // Initializes Stream's chat client.
    // Documentation: https://getstream.io/chat/docs/init_and_users/?language=js
    const initChat = async () => {
      client = StreamChat.getInstance('q95x9hkbyd6p', {
        timeout: 10000,
      });

      await client.connectUser(user, USER_TOKENS[user.id]);

      // We are going to store chatClient in following ChatClientService, so that it can be
      // accessed in other places. Ideally one would store client in a context provider, so that
      // component can re-render if client is updated. But in our case, client only gets updated
      // when chat user is switched - and which case we re-render the entire chat application.
      // So we don't need to worry about re-rendering every component on updating client.
      ChatClientService.setClient(client);
      setConnecting(false);
    };

    setConnecting(true);
    initChat();

    return () => {
      client && client.disconnect();
    };
  }, [user]);

  if (!loaded || connecting) {
    return null;
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle='light-content' hidden />
        <HistoryProvider>
          <CardSequenceProvider>
            <TranslateProvider>
              <CopilotProvider>
                <ChatUserContext.Provider
                  value={{
                    switchUser: userId => setUser(USERS[userId]),
                  }}>
                  <AppContainer />
                </ChatUserContext.Provider>
              </CopilotProvider>
            </TranslateProvider>
          </CardSequenceProvider>
        </HistoryProvider>
        <Components.Loading />
        <Toast />
      </PersistGate>
    </Provider>
  );
};