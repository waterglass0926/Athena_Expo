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
  TouchableOpacity,
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/ubereats/others';
import Constants from '@/constants';
import Functions from '@/utils';
import { selectTotalItems, selectTotalPrice } from '@/stores/ubereats/basket';

export const Details = ({ route, navigation }) => {
  const { categories, coordinates, image_url, name, price, rating, review_count } = route?.params?.item;
  const totalPrice = useSelector(selectTotalPrice);
  const getAllItems = useSelector(selectTotalItems);

  const [mapActive, setMapActive] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={tailwind`absolute top-9 left-4 z-30 w-9 h-9 rounded-full bg-white justify-center items-center shadow`} onPress={() => navigation.goBack()}>
        <Icon type='ionicon' name='arrow-back' size={18} color={Constants.COLORS.UBEREATS.black} />
      </TouchableOpacity>
      <View style={styles.mapImageWrpper}>
        {mapActive ? (
          <Components.RestaurantMap coordinates={coordinates} title={name} />
        ) : (
          <Image source={{ uri: image_url }} style={styles.image} />
        )}
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={tailwind`z-20`}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{name}</Text>
            <TouchableOpacity onPress={() => setMapActive(e => !e)}>
              <Icon type='entypo' name='location' size={24} color={`${mapActive ? Constants.COLORS.UBEREATS.primary : Constants.COLORS.DEFAULT.BLACK}`} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <View style={styles.info}>
              <View style={styles.infoItem}>
                <Icon type='ant-design' name='star' size={12} color='#FFC238' />
                <Text style={styles.infoText}>{rating} • ({review_count})</Text>
              </View>
              <View style={styles.infoItem}>
                <Icon type='ant-design' name='clockcircleo' size={10} color={Constants.COLORS.UBEREATS.black} />
                <Text style={styles.infoText}>20-30 min</Text>
              </View>
              <View style={styles.infoItem}>
                <Icon type='foundation' name='dollar' size={16} color={Constants.COLORS.UBEREATS.primary} />
                <Text style={styles.infoText}>• {price}</Text>
              </View>
            </View>
          </View>
          <View style={tailwind`mt-3`}>
            <Text style={[tailwind`text-gray-800 font-bold border-b w-1/3 mb-2 pb-1`, { borderBottomColor: Constants.COLORS.UBEREATS.primary, fontSize: 17 }]}>Categories</Text>
            {categories.map(({ title }, index) => (
              <Text key={index} style={tailwind`text-xs text-gray-700`}><Text style={{ color: Constants.COLORS.UBEREATS.primary }}>•</Text> {title}</Text>
            ))}
          </View>
          {/* MenuItems */}
          <Components.MenuItems resName={name} resImage={image_url} />
        </View>
      </ScrollView>
      <Components.ViewCart total={totalPrice} count={getAllItems.length} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: Constants.COLORS.UBEREATS.white,
  },
  mapImageWrpper: {
    position: 'absolute',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 260,
    resizeMode: 'cover',
  },
  content: {
    position: 'relative',
    marginTop: 220,
    paddingVertical: 25,
    paddingHorizontal: 25,
    paddingBottom: 10,
    backgroundColor: Constants.COLORS.UBEREATS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8
  },
  title: {
    fontSize: 23,
    fontWeight: '700',
    color: Constants.COLORS.UBEREATS.title,
    maxWidth: '80%'
  },
  price: {
    fontSize: 20,
    color: Constants.COLORS.UBEREATS.primary,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 7,
    paddingHorizontal: 6,
    paddingVertical: 3,
    backgroundColor: Constants.COLORS.UBEREATS.light,
    borderRadius: 5,
  },
  infoText: {
    marginLeft: 4,
    fontSize: 12
  },
});