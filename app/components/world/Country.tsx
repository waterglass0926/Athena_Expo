import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Image,
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/world';
import Constants from '@/constants';
import Functions from '@/utils';

export const Country = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: theme.BACKCOLOR }]}
      onPress={props.onPress}
    >
      <Image source={{
        uri:
          Functions.isEmpty(props.item.image)
            ? Constants.IAMGES.ATHENA.DEFAULT
            : props.item.image
      }} style={styles.imageFlag} />
      <View style={styles.viewInfo}>
        <Text style={[styles.textName, { color: theme.PRIMARY }]}>{props.item.name}</Text>
        <Text style={[styles.textCapital, { color: Constants.COLORS.DEFAULT.GRAY }]}>{props.item.capital}</Text>
        <Text style={[styles.textPopulation, { color: theme.FORECOLOR }]}>{props.item.population}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  imageFlag: {
    width: 80,
    height: 60,
    borderRadius: 5,
    shadowColor: Constants.COLORS.DEFAULT.BLACK,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  viewInfo: {
    marginLeft: 10,
  },
  textName: {
    fontSize: 18,
    fontWeight: '800',
  },
  textCapital: {
    fontSize: 15,
    fontWeight: '500',
  },
  textPopulation: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: '500',
  },
});