import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import tailwind from 'tailwind-react-native-classnames';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { View, StyleSheet, Text, Image } from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions from '@/utils';
import { foods } from '@/assets/data/ubereats/foods';
import { selectCartItems, selectTotalPrice, updateBasket } from '@/stores/ubereats/basket';

export const MenuItems = ({ resName, resImage }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const match = id => {
    const resIndex = cartItems.findIndex(item => item.resName === resName);
    if (resIndex >= 0) {
      const menuIndex = cartItems[resIndex].foods.findIndex(item => item.id === id);
      if (menuIndex >= 0) return true;
      return false;
    };

    return false;
  };

  const handleAddRemove = (id) => {
    const indexFromFood = foods.findIndex(x => x.id === id);
    const resIndex = cartItems.findIndex(item => item.resName === resName);
    const foodItem = foods[indexFromFood];

    if (resIndex >= 0) {
      const menuIndex = cartItems[resIndex].foods.findIndex(item => item.id === id);
      if (menuIndex >= 0) {
        let oldArrays = [...cartItems];
        let oldfoods = [...oldArrays[resIndex].foods];
        oldfoods.splice(menuIndex, 1);
        oldArrays.splice(resIndex, 1);
        let newArray = [...oldArrays, { foods: oldfoods, resName, resImage }];
        dispatch(updateBasket(newArray));
      } else {
        let oldArrays = [...cartItems];
        let newFoodArray = [...oldArrays[resIndex].foods, foodItem];
        oldArrays.splice(resIndex, 1);
        let updatedResArray = [...oldArrays, { foods: newFoodArray, resName, resImage }];
        dispatch(updateBasket(updatedResArray));
      }
    } else {
      let oldArrays = [...cartItems];
      let newResFoodArray = [...oldArrays, {
        foods: [{ ...foodItem }],
        resName,
        resImage
      }];
      dispatch(updateBasket(newResFoodArray));
    };
  };

  return (
    <View style={tailwind`mt-5 mb-12`}>
      {foods?.map(({ title, description, image, price, id }, index) => (
        <View style={[tailwind`mb-3 flex-row justify-between items-center pb-3 border-b border-gray-100`, { height: 70 }]} key={index} >
          <View style={tailwind`flex-1 pr-3 flex-row items-center`}>
            {match(id) ? (
              <BouncyCheckbox style={{ width: 40 }} fillColor={Constants.COLORS.UBEREATS.black} isChecked={true} onPress={() => handleAddRemove(id)} />
            ) : (
              <BouncyCheckbox style={{ width: 40 }} fillColor={Constants.COLORS.UBEREATS.black} isChecked={false} onPress={() => handleAddRemove(id)} />
            )}
            <View style={tailwind`flex-1 pl-2`}>
              <Text style={[tailwind`text-gray-900 font-bold mb-1`, { fontSize: 16 }]}>{title}</Text>
              <Text style={tailwind`text-gray-800 text-xs`}>${price}</Text>
              <Text style={tailwind`text-gray-600 text-xs`}>{description}</Text>
            </View>
          </View>
          <View style={tailwind``} >
            <Image style={tailwind`h-16 w-16 rounded-lg`} source={{ uri: image }} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({});