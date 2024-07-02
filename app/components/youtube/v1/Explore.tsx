import React from 'react';

import { GlobeAltIcon } from 'react-native-heroicons/solid';

import {
  View,
  TouchableOpacity,
} from 'react-native';

import { Buttons } from './Buttons';

export const Explore = (props) => {
  return (
    <View className='bg-black text-white flex-row p-2 items-center space-x-4'>
      <View className='bg-slate-700 p-2'>
        <TouchableOpacity onPress={(e) => {
          props.setExplore(true);
        }}>
          <GlobeAltIcon color='white' />
        </TouchableOpacity>
      </View>
      <View className='border-slate-700 border h-10' />
      <View className='flex-row space-x-2 items-center'>
        <View>
          <Buttons text='News' active='true' />
        </View>
        <View>
          <Buttons text='Trending' />
        </View>
        <View>
          <Buttons text='Mixes' />
        </View>
        <View>
          <Buttons text='Music' />
        </View>
        <View>
          <Buttons text='Salman' />
        </View>
        <View>
          <Buttons text='Scene' />
        </View>
      </View>
    </View>
  );
};