import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';

import Constants from '@/constants';
import Functions from '@/utils';

export const Category = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: theme.SECONDARY, borderColor: theme.PRIMARY }]}
      onPress={props.onPress}
    >
      <Image source={props.item?.image} style={styles.imageCategory} />
      <Text style={[styles.textTitle, { color: Constants.COLORS.DEFAULT.BLACK }]}>{props.item?.title.toUpperCase()}</Text>
      <Text style={[styles.textCount, { color: theme.PRIMARY }]}>{`(${props.item?.count} Jobs)`}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    padding: 8,
    width: 100,
    borderWidth: 1,
    borderRadius: 4
  },
  imageCategory: {
    width: 40,
    height: 40,
  },
  textTitle: {
    marginTop: 4,
    fontSize: 9,
    fontWeight: '700'
  },
  textCount: {
    marginTop: 4,
    fontSize: 7,
    fontWeight: '600'
  }
});