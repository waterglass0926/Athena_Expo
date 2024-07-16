import React from 'react';
import { View, Dimensions } from 'react-native';
import * as Progress from 'react-native-progress';
import tailwind from 'tailwind-react-native-classnames';

import Constants from '@/constants';

const { width, height } = Dimensions.get('window');

export function Loading() {
  return (
    <View style={[{ height, width }, tailwind`absolute flex-row justify-center items-center`]}>
      <Progress.CircleSnail thickness={12} size={160} color={Constants.COLORS.MOVIES.V2.background} />
    </View>
  )
};