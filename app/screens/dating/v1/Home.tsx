import React, { useEffect, useState } from 'react';
import {
  LayoutAnimation,
  TouchableOpacity,
  Alert,
  Dimensions,
  View,
  StatusBar
} from 'react-native';
import Svg, { Stop, Defs, LinearGradient, Circle } from 'react-native-svg';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import Slider from '@/components/dating/v1/Slider';
import Constants from '@/constants';
import { BAR_HEIGHT } from '@/constants/styles';

const { height, width } = Dimensions.get('window');

export default Home = (props) => {

  useEffect(() => {
    LayoutAnimation.spring();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Slider navigation={props.navigation} />
      <View
        style={{
          flex: 0.35,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            width: width - 40
          }}>
          <AButton size={65} color={'#D834FF'} icon={'share'} />
          <AButton size={90} color={'#FF00FF'} icon={'star'} />
          <AButton size={90} color={'#FF00EC'} icon={'happy'} />
          <AButton size={65} color={'#FF50B0'} icon={'sad'} />
        </View>
      </View>
    </View>
  );
};

const AButton = (props) => {
  const stroke = 3;
  return (
    <TouchableOpacity
      onPress={() => Alert.alert(`${props.icon} pressed`)}
      style={{
        width: props.size,
        height: props.size,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
      <Svg
        height={props.size}
        width={props.size}
        style={{
          shadowColor: props.color,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.29,
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1
        }}>
        <Defs>
          <LinearGradient id='buttonGrad' x1='0%' y1='0%' x2='10%' y2='100%'>
            <Stop offset='0' stopColor={props.color} stopOpacity='.5' />
            <Stop offset='1' stopColor={props.color} stopOpacity='1' />
          </LinearGradient>
        </Defs>
        <Circle
          cx={props.size / 2}
          cy={props.size / 2}
          r={props.size / 2 - stroke * 2}
          stroke='url(#buttonGrad)'
          strokeWidth={stroke}
          fill='#fff'
        />
      </Svg>
      <Ionicons
        name={`${props.icon}`}
        size={props.size * 0.45}
        style={{ backgroundColor: 'transparent', position: 'absolute' }}
        color={props.color}
      />
    </TouchableOpacity>
  );
};