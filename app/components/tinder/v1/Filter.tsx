import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import { Icon } from './Icon';
import Styles from '@/styles/tinder/v1';

export const Filter = () => {
  return (
    <TouchableOpacity style={Styles.filters}>
      <Text style={Styles.filtersText}>
        <Icon name='filter' /> Filters
      </Text>
    </TouchableOpacity>
  );
};