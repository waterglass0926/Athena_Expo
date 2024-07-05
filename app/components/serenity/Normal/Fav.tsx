import * as React from 'react';
import { IconButton } from 'react-native-paper';

import { StyleProp, ViewStyle, View } from 'react-native';

interface FavProps {
  style?: StyleProp<ViewStyle>;
  liked: boolean;
  onPress(): void;
};

export const Fav = ({
  style,
  liked = false,
  onPress
}: FavProps) => (
  <View style={[style, { justifyContent: 'center', alignItems: 'center' }]}>
    {liked ? (
      <IconButton
        animated
        icon='heart'
        onPress={onPress}
        color='#f64f59'
      />
    ) : (
      <IconButton animated icon='heart-outline' onPress={onPress} />
    )}
  </View>
);