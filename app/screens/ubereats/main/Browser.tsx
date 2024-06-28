import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';
import tailwind from 'tailwind-react-native-classnames';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import '@/utils/i18n';
import { meals } from '@/assets/data/ubereats/meals';
import Components from '@/components/ubereats/others';
import Constants from '@/constants';
import Functions from '@/utils';

export const Browser = () => {
  return (
    <Components.Screen style={tailwind`flex-1 bg-white`}>
      <ScrollView style={tailwind`flex-1`} showsVerticalScrollIndicator={false}>
        <View style={tailwind`mt-2 mx-4 mb-1 relative justify-center`}>
          <Icon type='ionicon' name='search-sharp' size={20} color='#B1B1B3' style={tailwind`absolute left-4 z-10 self-center`} />
          <TextInput style={[tailwind`rounded-full py-2 px-5 pl-10 bg-gray-100`, styles.input]} placeholder='Search anything' />
        </View>
        <Text style={tailwind`text-lg mt-2 ml-4`}>Top meals</Text>
        <View style={tailwind`flex-row mx-2 flex-wrap justify-between`}>
          {meals?.map(({ title, image, id }) => (
            <TouchableOpacity key={id} style={tailwind`w-1/2 my-2 px-2`}>
              <View style={tailwind`rounded-lg overflow-hidden justify-center items-center`}>
                <Image source={{ uri: image }} style={tailwind`w-full h-40`} />
                <View style={[tailwind`absolute top-0 left-0 w-full h-full bg-black rounded-lg z-10`, { opacity: 0.5 }]} />
                <Text style={tailwind`absolute self-center text-white w-3/4 text-center z-20`} numberOfLines={2}>{title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </Components.Screen>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Constants.COLORS.UBEREATS.medium,
  },
});