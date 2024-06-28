import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';
import tailwind from 'tailwind-react-native-classnames';

import { View, Image, Text, TouchableOpacity } from 'react-native';

import '@/utils/i18n';
import Components from '@/components/ubereats/others';
import Constants from '@/constants';
import Functions from '@/utils';
import { auth } from '@/utils/firebase';
import { selectUser } from '@/stores/ubereats/auth';

const SavedPlaces = ({ title, text, Icon }) => (
  <TouchableOpacity style={tailwind`flex-row items-center my-3`}>
    <Icon />
    <View style={tailwind`ml-5`}>
      <Text style={tailwind`text-gray-800`}>{title}</Text>
      <Text style={tailwind`text-gray-600 text-xs mt-1`}>{text}</Text>
    </View>
  </TouchableOpacity>
);

export const Account = () => {
  const user = useSelector(selectUser);

  return (
    <Components.Screen style={tailwind`flex-1 bg-white`}>
      <Components.AppHead title={`Account`} icon='settings-outline' />
      <View style={tailwind`justify-center items-center`}>
        <View style={tailwind`rounded-full overflow-hidden w-48 h-48 mt-4`}>
          <Image source={require('@/assets/images/ubereats/avatar.gif')} style={tailwind`w-48 h-48`} />
        </View>
        <Text style={tailwind`mt-4 text-3xl font-bold`}>{user?.name}</Text>
        <Text style={tailwind`text-lg text-indigo-900`}>{user?.email}</Text>
      </View>
      <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
        <Text style={tailwind`text-gray-800 mt-2 text-lg mb-2`}>Saved places</Text>
        <SavedPlaces
          title='Home'
          text='Add home'
          Icon={() => <Icon type='ant-design' name='home' size={24} color={Constants.COLORS.DEFAULT.BLACK} />}
        />
        <SavedPlaces
          title='Word'
          text='Add work'
          Icon={() => <Icon type='ionicon' name='briefcase-outline' size={24} color={Constants.COLORS.DEFAULT.BLACK} />}
        />
      </View>
      <View style={tailwind`mx-4 border-t border-t-2 mt-5 border-gray-100`}>
        <Text style={tailwind`text-gray-800 mt-2 text-lg`}>Other options</Text>
        <TouchableOpacity onPress={() => auth.signOut()}>
          <Text style={tailwind`text-green-900 mt-2`}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </Components.Screen>
  );
};