import React from 'react';

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from 'react-native';

import Demo from '@/assets/data/tinder/v1/demo';
import Components from '@/components/tinder/v1';
import Styles from '@/styles/tinder/v1';

export const Matches = () => {
  return (
    <ImageBackground
      source={require('@/assets/images/tinder/v1/bg.png')}
      style={Styles.bg}
    >
      <View style={Styles.containerMatches}>
        <View style={Styles.top}>
          <Text style={Styles.title}>Matches</Text>
          <TouchableOpacity>
            <Text style={Styles.icon}>
              <Components.Icon name='optionsV' />
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          numColumns={2}
          data={Demo}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TouchableOpacity key={index}>
              <Components.CardItem
                image={item.image}
                name={item.name}
                status={item.status}
                variant
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </ImageBackground>
  );
};