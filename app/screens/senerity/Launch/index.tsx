import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from 'react-native-paper';
import { selectIntroSlides, useAppSelector } from '@serenity/core';

import { View } from 'react-native';

export function Launch() {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const introSlidesShown = useAppSelector(selectIntroSlides);

  useEffect(() => {
    isSignedIn();
  }, []);

  const isSignedIn = () => {
    if (introSlidesShown) {
      navigation.navigate('App');
    } else {
      navigation.navigate('Intro');
    };
  };

  return <View style={{ flex: 1, backgroundColor: colors.background }} />;
};
