import React from 'react';

import tailwind from 'tailwind-react-native-classnames';

import { View, Text, TouchableOpacity } from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions from '@/utils';

const HeaderButton = ({ text, onPress, active }) => (
  <TouchableOpacity style={tailwind`bg-white px-7 py-2 rounded-full ${active && 'bg-black'}`} onPress={onPress}>
    <Text style={tailwind`text-black font-bold ${active && 'text-white'}`}>{text}</Text>
  </TouchableOpacity>
);

export const HeaderTabs = ({ activeTab, setActiveTab }) => {
  return (
    <View style={tailwind`flex-row justify-center mt-3`}>
      <HeaderButton text='Delivery' active={activeTab === 'Delivery'} onPress={() => setActiveTab('Delivery')} />
      <HeaderButton text='Pickup' active={activeTab === 'Pickup'} onPress={() => setActiveTab('Pickup')} />
    </View>
  );
};