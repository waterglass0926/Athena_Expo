import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import tailwind from 'tailwind-react-native-classnames';

import {
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';

import '@/utils/i18n';
import { YELP_API_KEY } from '@env';
import { restaurants } from '@/assets/data/ubereats/restaurants';
import Components from '@/components/ubereats/others';
import Constants from '@/constants';
import Functions from '@/utils';

export const Home = () => {
  const [restaurantData, setRestaurantData] = useState(restaurants);
  const [city, setCity] = useState('San Francisco');
  const [activeTab, setActiveTab] = useState('Delivery');
  const [loading, setLoading] = useState(false);

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    setLoading(true);
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        if (json.error) return Alert.alert('Sorry', json.error.description);
        setRestaurantData(
          json?.businesses?.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase()),
          ),
        );
      });
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <Components.Screen style={tailwind`bg-white flex-1`}>
      <Components.HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Components.SearchBar setCity={setCity} city={city} />
      <ScrollView style={tailwind`flex-1`} showsVerticalScrollIndicator={false}>
        <Components.Categories />
        {loading && <ActivityIndicator size='large' color={Constants.COLORS.UBEREATS.primary} style={tailwind`mt-2 mb-6`} />}
        <Components.RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
    </Components.Screen>
  );
};