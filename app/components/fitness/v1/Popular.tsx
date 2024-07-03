import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ImageModal from 'react-native-image-modal';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import Constants from '@/constants';
import Functions from '@/utils';

export const Popular = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    // <View style={styles.container}>
    //   <ImageModal
    //     source={props.item?.image}
    //     style={[styles.imageWorkout, { borderColor: theme.PRIMARY }]}
    //     resizeMode='cover'
    //     modalImageResizeMode='contain'
    //   />
    // </View>
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={props.item?.image} style={[styles.imageWorkout, { borderColor: theme.PRIMARY }]} blurRadius={30} />
      <Text style={[styles.textTitle, { color: theme.QUATERNARY }]}>{props.item?.title.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    width: 120,
    height: 100,
    borderRadius: 8
  },
  imageWorkout: {
    width: 120,
    height: 100,
    borderWidth: 1,
    borderRadius: 8,
    // opacity: 0.9
  },
  textTitle: {
    position: 'absolute',
    top: 60,
    paddingLeft: 8,
    width: '100%',
    fontSize: 10,
    fontWeight: '700',
    shadowColor: Constants.COLORS.DEFAULT.BLACK,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
});