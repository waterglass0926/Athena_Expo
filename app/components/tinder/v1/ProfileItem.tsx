import React from 'react';

import { Text, View } from 'react-native';

import { Icon } from './Icon';
import Styles from '@/styles/tinder/v1';

export const ProfileItem = ({
  age,
  info1,
  info2,
  info3,
  info4,
  location,
  matches,
  name
}) => {
  return (
    <View style={Styles.containerProfileItem}>
      <View style={Styles.matchesProfileItem}>
        <Text style={Styles.matchesTextProfileItem}>
          <Icon name='heart' /> {matches}% Match!
        </Text>
      </View>

      <Text style={Styles.name}>{name}</Text>

      <Text style={Styles.descriptionProfileItem}>
        {age} - {location}
      </Text>

      <View style={Styles.info}>
        <Text style={Styles.iconProfile}>
          <Icon name='user' />
        </Text>
        <Text style={Styles.infoContent}>{info1}</Text>
      </View>

      <View style={Styles.info}>
        <Text style={Styles.iconProfile}>
          <Icon name='circle' />
        </Text>
        <Text style={Styles.infoContent}>{info2}</Text>
      </View>

      <View style={Styles.info}>
        <Text style={Styles.iconProfile}>
          <Icon name='hashtag' />
        </Text>
        <Text style={Styles.infoContent}>{info3}</Text>
      </View>

      <View style={Styles.info}>
        <Text style={Styles.iconProfile}>
          <Icon name='calendar' />
        </Text>
        <Text style={Styles.infoContent}>{info4}</Text>
      </View>
    </View>
  );
};