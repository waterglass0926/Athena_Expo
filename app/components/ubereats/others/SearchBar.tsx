import React from 'react';

import { Icon } from 'react-native-elements';
import tailwind from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions from '@/utils';

export const SearchBar = ({ setCity, city }) => {
  return (
    <View style={tailwind`flex-row mt-3 px-4 pb-3 border-b border-gray-100 border-b-2`}>
      <GooglePlacesAutocomplete
        placeholder={city || 'Search'}
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
        onPress={data => setCity(data.structured_formatting.main_text)}
        minLength={2}
        fetchDetails={true}
        returnKeyType={'search'}
        onFail={error => console.error(error)}
        query={{
          key: process.env.GOOGLE_MAP_API_KEY,
          language: 'en',
        }}
        styles={{
          container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          textInput: {
            marginTop: 4,
            fontSize: 15,
            fontWeight: '700',
            backgroundColor: '#F3F4F6',
          },
          textInputContainer: {
            justifyContent: 'center',
            backgroundColor: '#F3F4F6',
            borderRadius: 40,
          }
        }}
        enablePoweredByContainer={false}
        renderLeftButton={() => (
          <View style={tailwind`self-center ml-3`}>
            <Icon type='ionicon' name='location-sharp' size={24} color='#CCCCCC' />
          </View>
        )}
        renderRightButton={() => (
          <TouchableOpacity style={tailwind`self-center ml-3 flex-row items-center bg-white py-2 px-3 rounded-full mr-3`}>
            <Icon type='material-community' name='clock-time-four' size={13} color={Constants.COLORS.DEFAULT.BLACK} />
            <Text style={tailwind`ml-1`}>Search</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});