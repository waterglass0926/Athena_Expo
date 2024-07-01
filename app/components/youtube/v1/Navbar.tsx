import React from 'react';

import { View, Text, SafeAreaView, Image } from 'react-native';

import {
  TvIcon,
  BellAlertIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from 'react-native-heroicons/solid';

export const Navbar = () => {
  return (
    <SafeAreaView className='flex items-center justify-between flex-row bg-black mt-9 p-5'>
      <View className='flex flex-row items-center '>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/2584/2584659.png',
          }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <Text className='text-white text-2xl ml-2 '>YouTube</Text>
      </View>
      <View className='flex flex-row space-x-6'>
        <TvIcon color='white' className='h-7 w-7' />
        <BellAlertIcon color='white' className='h-7 w-7' />
        <MagnifyingGlassIcon color='white' className='h-7 w-7' />
        <UserIcon color='white' className='h-7 w-7' />
      </View>
    </SafeAreaView>
  );
};