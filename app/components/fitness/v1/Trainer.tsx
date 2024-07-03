import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ImageModal from 'react-native-image-modal';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Constants from '@/constants';
import Functions from '@/utils';

export const Trainer = (props) => {
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
    //   <Text style={[styles.textTitle, { color: theme.FORECOLOR }]}>{props.item?.name}</Text>
    //   <Text style={[styles.textCount, { color: theme.QUATERNARY }]}>{props.item?.type}</Text>
    // </View>
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Image source={props.item.image} style={[styles.imageWorkout, { borderColor: theme.PRIMARY }]} blurRadius={30} />
      <Text style={[styles.textTitle, { color: theme.FORECOLOR }]}>{props.item.name}</Text>
      <Text style={[styles.textCount, { color: theme.QUATERNARY }]}>{props.item.type}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    width: 100,
    height: 110,
    borderRadius: 8
  },
  imageWorkout: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderRadius: 35,
    // opacity: 0.9
  },
  textTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '700',
    shadowColor: Constants.COLORS.DEFAULT.BLACK,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  textCount: {
    marginTop: 4,
    fontSize: 10,
    fontWeight: '600'
  }
});