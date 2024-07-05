import React from 'react';
import { Chip } from 'react-native-paper';

import { View, ViewProps } from 'react-native';

interface Props {
  style?: ViewProps;
  liked: boolean;
  onPress(): void;
};

export const Follow = ({
  style,
  liked,
  onPress,
}: Props) => {
  return (
    <View style={[style, { justifyContent: 'center', alignItems: 'center' }]}>
      {liked ? (
        <Chip mode='outlined' onPress={onPress}>
          Following
        </Chip>
      ) : (
        <Chip icon='plus' mode='outlined' onPress={onPress}>
          Follow
        </Chip>
      )}
    </View>
  );
};