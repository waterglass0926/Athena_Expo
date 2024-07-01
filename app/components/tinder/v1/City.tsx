import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import { Icon } from './Icon';
import Styles from '@/styles/tinder/v1';

export const City = () => {
  return (
    <TouchableOpacity style={Styles.city}>
      <Text style={Styles.cityText}>
        <Icon name='marker' /> New York
      </Text>
    </TouchableOpacity>
  );
};