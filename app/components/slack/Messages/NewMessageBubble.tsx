import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation, useTheme } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import Constants from '@/constants';

export const NewMessageBubble = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('NewMessage');
      }}
      style={[
        styles.container,
        {
          backgroundColor: colors.primary,
        },
      ]}>
      <SvgXml
        xml={Constants.SVGS.SLACK.CHANNEL.NewMessageBubbleIcon}
        width={51}
        height={51}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
