import * as React from 'react';
import LottieView from 'lottie-react-native';
import { Headline } from 'react-native-paper';
import { Screen } from '@serenity/components';

import { View, ViewStyle } from 'react-native';

import Constants from '@/constants';

const CONTAINER: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 24,
};

export const EmptyPlaylist = () => {
  return (
    <Screen>
      <View style={CONTAINER}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 150,
            width: '100%',
          }}
        >
          <LottieView
            source={Constants.IAMGES.SERENITY.EMPTYPLAYLISTANIMATION}
            autoPlay
            loop
          />
        </View>
        <Headline style={{ textAlign: 'center' }}>Empty playlist</Headline>
      </View>
    </Screen>
  );
};