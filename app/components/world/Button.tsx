import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { LinearGradient } from 'expo-linear-gradient';

import {
  Text,
  TouchableOpacity,
} from 'react-native';

import Constants from '@/constants';
import Functions from '@/utils';
import { ThemeType } from '@/types/athena';

export const Button = (props) => {
  const { theme } = useSelector(state => state.athena);

  return (
    <TouchableOpacity
      style={[
        props.top && {
          position: 'absolute',
          top: props.top,
        },
        props.bottom && {
          position: 'absolute',
          bottom: props.bottom,
        },
        props.marginTop && {
          marginTop: props.marginTop,
        },
        {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: props.width || '100%',
          height: props.height || 50,
          borderRadius: props.borderRadius || 25,
          shadowColor: Constants.COLORS.DEFAULT.BLACK,
          shadowOffset: { width: 1, height: 1 },
          // shadowOpacity: 0.7,
          shadowRadius: 1,
          elevation: !props.outline ? 2 : 0,
        },
        props.outline && {
          borderWidth: 1.5,
          borderColor: props.borderColor || theme.PRIMARY,
        },
      ]}
      disabled={props.disabled}
      onPress={props.onPress}
      activeOpacity={0.5}
    >
      {!props.outline && (
        <LinearGradient
          start={{ x: 0.1, y: 0.5 }} end={{ x: 0.8, y: 1.0 }}
          colors={[props.oneColor || theme.PRIMARY, props.twoColor || theme.PRIMARY]}
          style={{
            position: 'absolute',
            width: props.width || '100%',
            height: props.height || 50,
            borderRadius: props.borderRadius || 25,
            opacity: props.disabled ? 0.8 : 1.0,
          }}
        />
      )}
      <Text style={{
        fontSize: props.fontSize || 20,
        fontWeight: props.weight || '600',
        color: props.foreColor || theme.FORECOLOR,
      }}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};