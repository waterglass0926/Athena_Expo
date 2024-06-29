import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

import Components from '@/components/translator';
import Constants from '@/constants';
import Functions from '@/utils';
import { useNavigation } from '@/hooks/translator/useNavigation';

export const OssHeader = () => {
  const { goBack } = useNavigation();

  return (
    <Components.ButtonBase onPress={() => goBack()} style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon type='material' name='keyboard-backspace' size={20} color={Constants.COLORS.DEFAULT.WHITE} />
      </View>
      <Text style={styles.text}>Back</Text>
    </Components.ButtonBase>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 56,
  },
  iconContainer: {
    alignItems: 'center',
    width: 56,
  },
  text: {
    fontSize: 16,
    color: Constants.COLORS.DEFAULT.WHITE,
  },
});