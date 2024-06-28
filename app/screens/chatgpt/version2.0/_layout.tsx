import { Slot, SplashScreen, Stack, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-expo';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { ActivityIndicator, TouchableOpacity, View } from 'react-native';

const ChatGptV2AuthStack = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (isSignedIn && !inAuthGroup) {
      router.replace('/screens/chatgpt/version2.0/(auth)/(drawer)/(chat)/new');
    } else if (!isSignedIn) {
      router.replace('/screens/chatgpt/version2.0/');
    }
  }, [isSignedIn]);

  if (!loaded || !isLoaded) {
    return <Slot />;
  }

  return (
    <Stack>
      <Stack.Screen
        name='screens/chatgpt/version2.0/index'
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='screens/chatgpt/version2.0/login'
        options={{
          presentation: 'modal',
          title: '',
          headerTitleStyle: {
            fontFamily: 'mon-sb',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name='close-outline' size={28} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name='screens/chatgpt/version2.0/(auth)' options={{ headerShown: false }} />
    </Stack>
  );
};