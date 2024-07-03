import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Icon } from 'react-native-elements';

import {
  StyleSheet,
  View,
} from 'react-native';

import Constants from '@/constants';
import Functions from '@/utils';

export const Rating = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <View style={[styles.container, { backgroundColor: theme.BACKCOLOR }]}>
      <Icon type='material-comunity' name={props.rating < 0.5 ? 'star-outline' : props.rating < 1 ? 'star-half' : 'star'} size={props.size} color={props.color} />
      <Icon type='material-comunity' name={props.rating < 1.5 ? 'star-outline' : props.rating < 2 ? 'star-half' : 'star'} size={props.size} color={props.color} />
      <Icon type='material-comunity' name={props.rating < 2.5 ? 'star-outline' : props.rating < 3 ? 'star-half' : 'star'} size={props.size} color={props.color} />
      <Icon type='material-comunity' name={props.rating < 3.5 ? 'star-outline' : props.rating < 4 ? 'star-half' : 'star'} size={props.size} color={props.color} />
      <Icon type='material-comunity' name={props.rating < 4.5 ? 'star-outline' : props.rating < 5 ? 'star-half' : 'star'} size={props.size} color={props.color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});