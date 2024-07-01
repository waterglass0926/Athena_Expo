import React from 'react';

import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import Demo from '@/assets/data/tinder/v1/demo';
import Components from '@/components/tinder/v1';
import Styles from '@/styles/tinder/v1';

export const Profile = () => {
  const {
    age,
    image,
    info1,
    info2,
    info3,
    info4,
    location,
    match,
    name
  } = Demo[7];

  return (
    <ImageBackground
      source={require('@/assets/images/tinder/v1/bg.png')}
      style={Styles.bg}
    >
      <ScrollView style={Styles.containerProfile}>
        <ImageBackground source={image} style={Styles.photo}>
          <View style={Styles.top}>
            <TouchableOpacity>
              <Text style={Styles.topIconLeft}>
                <Components.Icon name='chevronLeft' />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={Styles.topIconRight}>
                <Components.Icon name='optionsV' />
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <Components.ProfileItem
          matches={match}
          name={name}
          age={age}
          location={location}
          info1={info1}
          info2={info2}
          info3={info3}
          info4={info4}
        />

        <View style={Styles.actionsProfile}>
          <TouchableOpacity style={Styles.circledButton}>
            <Text style={Styles.iconButton}>
              <Components.Icon name='optionsH' />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.roundedButton}>
            <Text style={Styles.iconButton}>
              <Components.Icon name='chat' />
            </Text>
            <Text style={Styles.textButton}>Start chatting</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};