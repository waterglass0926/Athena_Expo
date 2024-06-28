import React from 'react';

import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions from '@/utils';

export const PaymentButton = ({ title, variant = 'default', disabled, loading, onPress, ...props }) => {
  return (
    <View style={disabled && styles.disabled}>
      <TouchableOpacity
        disabled={disabled}
        style={[
          styles.container,
          variant === 'primary' && styles.primaryContainer,
        ]}
        onPress={onPress}
        {...props}
      >
        {loading ? (
          <ActivityIndicator color={Constants.COLORS.UBEREATS.white} size='small' />
        ) : (
          <Text style={[styles.text, variant === 'primary' && styles.textPrimary]}>
            {title}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderRadius: 12,
  },
  primaryContainer: {
    alignItems: 'center',
    backgroundColor: Constants.COLORS.UBEREATS.slate,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: Constants.COLORS.UBEREATS.slate,
  },
  textPrimary: {
    color: Constants.COLORS.UBEREATS.white,
  },
  disabled: {
    opacity: 0.3,
  },
});