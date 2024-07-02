import React from 'react';

import tailwind from 'tailwind-react-native-classnames';

import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions from '@/utils';
import { categories } from '@/assets/data/ubereats/categories';

export const Categories = () => {
  return (
    <View style={tailwind`mx-3`}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map(({ image, text }, index) => (
          <TouchableOpacity key={index} style={tailwind`mx-1 my-3 items-center bg-gray-50 px-3 py-2 rounded-lg`}>
            <Image
              source={image}
              style={tailwind`w-10 h-10`}
            />
            <Text style={tailwind`text-center mt-1 text-xs`}>{text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};