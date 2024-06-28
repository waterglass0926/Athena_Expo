import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Icon } from 'react-native-elements';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions from '@/utils';

export const AppHead = ({ title, icon = null }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.topBar}>
      <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
        <Icon type='ionicon' name='arrow-back' size={26} color={Constants.COLORS.UBEREATS.black} />
      </TouchableOpacity>
      <View style={styles.center}>
        {icon && <Icon type='ionicon' style={styles.icon2} name={icon} size={27} color='black' />}
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 15,
    backgroundColor: Constants.COLORS.UBEREATS.white,
    borderColor: Constants.COLORS.UBEREATS.medium,
    borderBottomWidth: 1,
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    zIndex: 100,
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 17,
    color: Constants.COLORS.UBEREATS.black,
  },
  icon2: {
    marginRight: 10
  }
});