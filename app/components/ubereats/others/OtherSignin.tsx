import React from 'react';

import { Icon } from 'react-native-elements';

import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions from '@/utils';

export const OtherSignin = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon type='ant-design' name={icon} size={24} color={Constants.COLORS.DEFAULT.BLACK} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 15,
    backgroundColor: Constants.COLORS.UBEREATS.light,
    borderWidth: 1,
    borderColor: Constants.COLORS.UBEREATS.medium,
    borderRadius: 10,
  },
  title: {
    marginLeft: 10,
  },
});