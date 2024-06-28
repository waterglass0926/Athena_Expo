import React, { useState } from 'react';

import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import tailwind from 'tailwind-react-native-classnames';

import {
  View,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions from '@/utils';

const RestaurantItemCard = ({ item, onPress }) => {
  const [loved, setLoved] = useState(false);

  return (
    <TouchableOpacity style={tailwind`mx-4 mb-4`} onPress={onPress}>
      <Image
        source={{ uri: item.image_url }}
        style={tailwind`w-full h-48 rounded-lg`}
      />
      <TouchableOpacity style={tailwind`absolute top-2 right-2`} onPress={() => setLoved(e => !e)}>
        <Icon type='entypo' name={`${loved ? 'heart' : 'heart-outlined'}`} size={28} color={Constants.COLORS.DEFAULT.WHITE} />
      </TouchableOpacity>
      <View style={tailwind`flex-row items-center mt-1`}>
        <View style={tailwind`flex-grow`}>
          <Text style={tailwind`font-bold text-lg`} numberOfLines={1}>{item.name}</Text>
          <View style={tailwind`flex-row items-center`}>
            <Icon type='material-community' name='clock-time-four' size={13} color='#06C167' />
            <Text style={tailwind`text-xs text-gray-700`}> 20-30 • min • {item.price}</Text>
          </View>
        </View>
        <View style={tailwind`w-8 h-8 justify-center items-center bg-gray-100 rounded-full`}>
          <Text style={tailwind`text-gray-600 text-xs`}>{item.rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const RestaurantItem = ({ restaurantData }) => {
  const navigation = useNavigation();

  const handlePress = (item) => {
    navigation.navigate('UberEatsDetails', {
      item: { ...item }
    });
  };

  return (
    <View>
      {restaurantData?.map((item, index) => (
        <RestaurantItemCard key={index} item={item} onPress={() => handlePress(item)} />
      ))}
    </View>
  );
};