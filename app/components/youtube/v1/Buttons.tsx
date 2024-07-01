import React from 'react';
import { View, Text } from 'react-native';

export const Buttons = (props) => {
  return (
    <View className>
      <Text className={props.active ? 'bg-white text-black rounded-full px-2 py-1 text-center ' : 'bg-slate-900 text-white rounded-full px-2 py-1 '}>{props.text}</Text>
    </View>
  );
};