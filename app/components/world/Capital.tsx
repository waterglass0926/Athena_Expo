import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ImageModal from 'react-native-image-modal';

import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  View,
  Text,
  Image,
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/world';
import Constants from '@/constants';
import Functions from '@/utils';

export const Capital = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <View style={[styles.container, { backgroundColor: theme.BACKCOLOR, borderColor: theme.PRIMARY }]}>
      <ScrollView
        key='scroll001'
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {props.item?.images?.map((image, index) => (
          <ImageModal
            key={`image${props.item?.name}${index}`}
            source={{
              uri:
                Functions.isEmpty(image)
                  ? Constants.IAMGES.ATHENA.DEFAULT
                  : image
            }}
            style={styles.imageOne}
            resizeMode='cover'
            modalImageResizeMode='contain'
            overlayBackgroundColor='#000000E0'
          />
        ))}
      </ScrollView>
      <View style={styles.viewBottom}>
        <Image source={{
          uri:
            Functions.isEmpty(props.item?.image)
              ? Constants.IAMGES.ATHENA.DEFAULT
              : props.item?.image
        }} style={[styles.imageFlag, { borderColor: theme.SECONDARY }]} />
        <View style={styles.viewRight}>
          <TouchableOpacity onPress={props.onPress}>
            <Text style={[styles.textTitle, { color: theme.PRIMARY }]}>{props.item?.name}</Text>
          </TouchableOpacity>
          <Text style={[styles.textCountry, { color: Constants.COLORS.DEFAULT.GRAY }]}>{props.item?.country}</Text>
          <Text style={[styles.textPopulation, { color: theme.FORECOLOR }]}>{props.item?.population}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
    width: '100%',
    height: 180,
    borderWidth: 0.5,
    borderRadius: 5,
    shadowColor: Constants.COLORS.DEFAULT.BLACK,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  imageOne: {
    marginRight: 10,
    width: 150,
    height: 95,
    borderRadius: 5,
  },
  viewBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
  },
  imageFlag: {
    marginTop: -50,
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
  },
  viewRight: {
    marginLeft: 15,
    width: 150,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  textCountry: {
    fontSize: 13,
    fontWeight: '500',
  },
  textPopulation: {
    fontSize: 12,
    fontWeight: '500',
  },
});