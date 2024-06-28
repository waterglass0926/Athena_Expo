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
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/ubereats/others';
import Constants from '@/constants';
import Functions from '@/utils';

export const Grocery = () => {
  return (
    <Components.Screen style={tailwind`flex-1 bg-white`}>
      <View style={tailwind`flex-1 justify-center items-center`}>
        <Image source={require('@/assets/images/ubereats/store-open.gif')} style={tailwind`w-72 h-72`} />
        <View style={tailwind`w-3/4`}>
          <Text style={tailwind`text-lg text-center`}>Sorry, Grocery is not available right now</Text>
          <Text style={tailwind`text-lg text-center text-xs text-gray-600 mt-3`}>Go to you near Grocery shop and buy 🙃😉</Text>
        </View>
      </View>
    </Components.Screen>
  );
};

const styles = StyleSheet.create({});