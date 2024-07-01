import React from 'react';

import { Text, View, Image } from 'react-native';

import Styles from '@/styles/tinder/v1';

export const Message = ({ image, lastMessage, name }) => {
  return (
    <View style={Styles.containerMessage}>
      <Image source={image} style={Styles.avatar} />
      <View style={Styles.content}>
        <Text>{name}</Text>
        <Text style={Styles.message}>{lastMessage}</Text>
      </View>
    </View>
  );
};