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
import { ThemeType } from '@/types/athena';
import { setTheme } from '@/stores/athena';

export const Header = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);

  const onMode = () => {
    dispatch(setTheme({
      MODE: theme.MODE == 'LIGHT' ? 'NIGHT' : 'LIGHT',
      NAME: theme.NAME,
      PRIMARY: theme.PRIMARY,
      SECONDARY: theme.SECONDARY,
      TERTIARY: theme.TERTIARY,
      QUATERNARY: theme.QUATERNARY,
      BACKCOLOR: theme.FORECOLOR,
      FORECOLOR: theme.BACKCOLOR,
    }));
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.PRIMARY, shadowColor: theme.PRIMARY }]}>
      {props.left && <View style={styles.buttonIcon} />}

      {props.back &&
        <TouchableOpacity style={styles.buttonIcon} onPress={props.onBack}>
          <Icon type='material' name='arrow-back' size={25} color={Constants.COLORS.DEFAULT.WHITE} />
        </TouchableOpacity>}

      {props.menu &&
        <TouchableOpacity style={styles.buttonIcon} onPress={props.onMenu}>
          <Icon type='material-community' name='menu' size={25} color={Constants.COLORS.DEFAULT.WHITE} />
        </TouchableOpacity>}

      {props.title && (
        <TouchableOpacity onPress={props.onTitle}>
          <Text style={[styles.textTitle, { color: Constants.COLORS.DEFAULT.WHITE }]}>{props.title}</Text>
        </TouchableOpacity>
      )}

      <View style={styles.viewRight}>
        {props.setting &&
          <TouchableOpacity style={styles.buttonIcon} onPress={props.onSetting}>
            <Icon type='material' name='settings' size={25} color={Constants.COLORS.DEFAULT.WHITE} />
          </TouchableOpacity>}
        {props.search &&
          <TouchableOpacity style={styles.buttonIcon} onPress={props.onSearch}>
            <Icon type='material' name='search' size={25} color={Constants.COLORS.DEFAULT.WHITE} />
          </TouchableOpacity>}
        {props.mode &&
          <TouchableOpacity style={styles.buttonIcon} onPress={() => onMode()}>
            <Icon type='font-awesome' name={theme.MODE === 'NIGHT' ? 'eercast' : 'ravelry'} size={20} color={Constants.COLORS.DEFAULT.WHITE} />
          </TouchableOpacity>}
        {props.right && <View style={styles.buttonIcon} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 15,
    width: wp('100%'),
    height: 100,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    zIndex: 9999,
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