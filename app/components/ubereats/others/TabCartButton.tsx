import React from 'react';

import { Icon } from 'react-native-elements';

import {
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions, { fetchPublishableKey } from '@/utils';

export const TabCartButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon type='ionicon' name='cart-sharp' color={Constants.COLORS.UBEREATS.primary} size={27} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30,
    height: 60,
    width: 60,
    borderWidth: 5,
    borderRadius: 30,
    borderColor: Constants.COLORS.UBEREATS.light,
    backgroundColor: Constants.COLORS.UBEREATS.white,
  }
});