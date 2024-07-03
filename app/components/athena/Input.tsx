import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';

import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Constants from '@/constants';
import Functions from '@/utils';
import { ThemeType } from '@/types/athena';

export const Input = (props) => {
  const { theme } = useSelector(state => state.athena);

  return (
    <View
      style={[styles.container, {
        marginTop: props.marginTop ? props.marginTop : 0,
        marginBottom: props.marginBottom ? props.marginBottom : 0,
      }]}
    >
      <Text
        style={[styles.textLabel, {
          color: props.labelColor ? props.labelColor : theme.PRIMARY,
        }]}
      >
        {props.label}
      </Text>
      <View
        style={[styles.viewInput, {
          borderColor: props.borderColor ? props.borderColor : theme.PRIMARY,
        }]}
      >
        <View style={styles.viewIcon}>
          <Icon
            type={props.leftIconType}
            name={props.leftIconName}
            size={props.leftIconSize ? props.leftIconSize : 20}
            color={props.leftIconColor ? props.leftIconColor : theme.PRIMARY}
          />
        </View>
        <TextInput
          value={props.value}
          autoCapitalize={props.autoCapitalize ? props.autoCapitalize : 'sentences'}
          secureTextEntry={props.secureTextEntry}
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
          style={[styles.textInput, { color: theme.FORECOLOR }]}
          onChangeText={props.onChangeText}
        />
        <TouchableOpacity style={styles.viewIcon} onPress={props.onRight}>
          <Icon
            type={props.rightIconType}
            name={props.rightIconName}
            size={props.rightIconSize ? props.rightIconSize : 20}
            color={props.rightIconColor ? props.rightIconColor : theme.PRIMARY}
          />
        </TouchableOpacity>
      </View>
      <Text
        style={[styles.textError, {
          color: props.errorColor ? props.errorColor : Constants.COLORS.DEFAULT.RED,
        }]}
      >
        {props.error}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  textLabel: {
    margin: 5,
    fontSize: 12,
    fontWeight: '600',
    shadowColor: Constants.COLORS.DEFAULT.BLACK,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  viewIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
  },
  viewInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    width: '100%',
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
  },
  textInput: {
    width: wp('100%') - 100,
    fontSize: 12,
    fontWeight: '500',
  },
  textError: {
    margin: 5,
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'right',
  },
});