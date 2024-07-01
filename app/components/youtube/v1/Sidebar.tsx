import React from 'react';

import { XMarkIcon, FireIcon, ShoppingBagIcon, MusicalNoteIcon, FilmIcon, NewspaperIcon } from 'react-native-heroicons/solid';

import { View, Text, Touchable, TouchableOpacity, Image } from 'react-native';

export const Sidebar = ({ explore, setExplore }) => {
  return (
    <View className='absolute z-50 w-[40vw] bg-black text-white h-full'>
      <TouchableOpacity
        className='mt-5 mb-5'
        onPress={(e) => {
          if (!explore) {
            setExplore(true);
          } else {
            setExplore(false);
          }
        }}
      >
        <XMarkIcon color='white' />
      </TouchableOpacity>
      <View className='flex-row items-center mb-10 space-x-3 ml-1'>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/2584/2584659.png',
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <Text className='text-white text-xl'>YouTube</Text>
      </View>
      <View className='flex text-white space-y-4 ml-2 '>
        <View className='flex-row items-center space-x-3'>
          <FireIcon color='white' />
          <Text className='text-white text-xl'>Trending</Text>
        </View>
        <View className='flex-row items-center space-x-4'>
          <ShoppingBagIcon color='white' />
          <Text className='text-white text-xl'>Shoping</Text>
        </View>
        <View className='flex-row items-center space-x-4'>
          <MusicalNoteIcon color='white' />
          <Text className='text-white text-xl'>Music</Text>
        </View>
        <View className='flex-row items-center space-x-4'>
          <FilmIcon color='white' />
          <Text className='text-white text-xl'>Films</Text>
        </View>
        <View className='flex-row items-center space-x-4'>
          <NewspaperIcon color='white' />
          <Text className='text-white text-xl'>News</Text>
        </View>

      </View>
    </View>
  );
};