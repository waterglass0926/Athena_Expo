import React, { useRef } from 'react';

import MapView, { Marker } from 'react-native-maps'
import tailwind from 'tailwind-react-native-classnames';

import {
  StyleSheet,
  View,
  Image
} from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions from '@/utils';

export const RestaurantMap = ({ coordinates, title }) => {
  const mapRef = useRef(null);

  return (
    <View style={[tailwind`bg-blue-300 relative `, { height: 250 }]}>
      <MapView
        initialRegion={{
          ...coordinates,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        ref={mapRef}
        style={tailwind`h-full z-10`}
      >
        {coordinates && (
          <Marker
            coordinate={{
              ...coordinates
            }}
            identifier='shop'
            anchor={{ x: 0.5, y: 0.5 }}
            title={title}
          >
            <Image source={require('@/assets/images/ubereats/shop.png')} style={{ height: 27, width: 27 }} />
          </Marker>
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({});