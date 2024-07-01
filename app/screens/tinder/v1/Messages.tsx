import React from 'react';

import {
  ScrollView,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import Demo from '@/assets/data/tinder/v1/demo';
import Components from '@/components/tinder/v1';
import Styles from '@/styles/tinder/v1';

export const Messages = () => {
  return (
    <ImageBackground
      source={require('@/assets/images/tinder/v1/bg.png')}
      style={Styles.bg}
    >
      <View style={Styles.containerMessages}>
        <ScrollView>
          <View style={Styles.top}>
            <Text style={Styles.title}>Messages</Text>
            <TouchableOpacity>
              <Text style={Styles.icon}>
                <Components.Icon name='optionsV' />
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={Demo}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Components.Message
                  image={item.image}
                  name={item.name}
                  lastMessage={item.message}
                />
              </TouchableOpacity>
            )}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};