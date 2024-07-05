import React, { useRef, useEffect } from 'react';
import LottieView from 'lottie-react-native';
import { useTheme } from 'react-native-paper';
import { usePlaybackState } from 'react-track-player';

import { StyleProp, View, ViewStyle } from 'react-native';

import Constants from '@/constants';

interface ActiveTrackIconProps {
  style: StyleProp<ViewStyle>;
};

export const ActiveTrackIcon = ({ style }: ActiveTrackIconProps) => {
  const animatedRef = useRef<LottieView>(null);
  const { colors } = useTheme();
  const status = usePlaybackState();

  useEffect(() => {
    if (status === 'playing') {
      animatedRef.current?.play();
    } else {
      animatedRef.current?.pause();
    };
  }, [status]);

  return (
    <View style={[style, { justifyContent: 'center', alignItems: 'center' }]}>
      <LottieView
        ref={animatedRef}
        source={Constants.IAMGES.SERENITY.PLAYERANIMATION}
        colorFilters={[
          {
            keypath: 'Shape',
            color: colors.primary,
          },
        ]}
      />
    </View>
  );
};