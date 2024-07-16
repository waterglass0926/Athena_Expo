import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import { Button } from './Button';
import { Text } from './Text';

export function HintLayout({ message, actionLabel, actionFn }) {
  const { theme } = useSelector(state => state.athena);

  return (
    <View style={styles.root}>
      <Text style={[styles.message, { color: theme.FORECOLOR }]}>{message}</Text>
      {actionLabel && actionFn && (
        <Button
          type='primary'
          style={styles.action}
          onPress={actionFn}
          label={actionLabel}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 10,
    height: '100%',
  },
  message: {
    textAlign: 'center',
  },
  action: {
    marginTop: 10,
  },
});