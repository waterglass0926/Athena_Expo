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

export const Continent = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: theme.BACKCOLOR, borderColor: Constants.COLORS.DEFAULT.GRAY }]}
      onPress={props.onPress}
    >
      <Image source={{
        uri:
          Functions.isEmpty(props.item?.image)
            ? Constants.IAMGES.ATHENA.DEFAULT
            : props.item?.image
      }} style={styles.imageMap} />
      <View style={styles.viewInfo}>
        <Text style={[styles.textName, { color: theme.PRIMARY }]}>{`${props.item?.name}  (${props.item?.countries})`}</Text>
        <Text style={[styles.textPopulation, { color: Constants.COLORS.DEFAULT.GRAY }]}>{`Population: ${props.item?.population}`}</Text>
        <Text style={[styles.textCities, { color: theme.FORECOLOR }]}>{`Cities: ${props.item?.cities}`}</Text>
      </View>
      <View style={styles.viewRight}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={{
            uri:
              Functions.isEmpty(props.item?.photos[0])
                ? Constants.IAMGES.ATHENA.DEFAULT
                : props.item?.photos[0]
          }} style={styles.imageFlag} />
          <Image source={{
            uri:
              Functions.isEmpty(props.item?.photos[1])
                ? Constants.IAMGES.ATHENA.DEFAULT
                : props.item?.photos[1]
          }} style={styles.imageFlag} />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={{
            uri:
              Functions.isEmpty(props.item?.photos[2])
                ? Constants.IAMGES.ATHENA.DEFAULT
                : props.item?.photos[2]
          }} style={styles.imageFlag} />
          <Image source={{
            uri:
              Functions.isEmpty(props.item?.photos[3])
                ? Constants.IAMGES.ATHENA.DEFAULT
                : props.item?.photos[3]
          }} style={styles.imageFlag} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    width: '100%',
    borderBottomWidth: 0.5,
  },
  imageMap: {
    width: 50,
    height: 50,
    shadowColor: Constants.COLORS.DEFAULT.BLACK,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  viewInfo: {
    width: 200,
  },
  textName: {
    fontSize: 15,
    fontWeight: '700',
  },
  textPopulation: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: '500',
  },
  textCities: {
    marginTop: 2,
    fontSize: 12,
    fontWeight: '600',
  },
  viewRight: {
    alignItems: 'flex-end',
    // width: wp('100%') - 300,
  },
  imageRight: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  imageFlag: {
    margin: 2,
    width: 25,
    height: 20,
    borderRadius: 2,
  },
});