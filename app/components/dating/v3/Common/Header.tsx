import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Constants from '@/constants';
import Functions from '@/utils';

export const Header = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  return (
    <View style={styles.container}>
      <TouchableOpacity />
      <Text style={{ ...styles.textTitle, color: Constants.COLORS.DATING.V3.WHITE0 }}>{props.title}</Text>
      <TouchableOpacity />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 15,
    width: wp('100%'),
    height: 80,
  },
  textTitle: {
    height: 25,
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewRight: {
    flexDirection: 'row',
  },
  buttonIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
  },
});