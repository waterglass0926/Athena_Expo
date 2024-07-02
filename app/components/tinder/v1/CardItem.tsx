import React from 'react';

import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';

import { Icon } from './Icon';
import Styles from '@/styles/tinder/v1';

export const CardItem = ({
  actions,
  description,
  image,
  matches,
  name,
  onPressLeft,
  onPressRight,
  status,
  variant,
}) => {
  // Custom styling
  const fullWidth = Dimensions.get('window').width;
  const imageStyle = [
    {
      borderRadius: 8,
      width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: variant ? 170 : 350,
      margin: variant ? 0 : 20,
    },
  ];

  const nameStyle = [
    {
      paddingTop: variant ? 10 : 15,
      paddingBottom: variant ? 5 : 7,
      color: '#363636',
      fontSize: variant ? 15 : 30,
    },
  ];

  return (
    <View style={Styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={image} style={imageStyle} />

      {/* MATCHES */}
      {matches && (
        <View style={Styles.matchesCardItem}>
          <Text style={Styles.matchesTextCardItem}>
            <Icon name='heart' /> {matches}% Match!
          </Text>
        </View>
      )}

      {/* NAME */}
      <Text style={nameStyle}>{name}</Text>

      {/* DESCRIPTION */}
      {description && (
        <Text style={Styles.descriptionCardItem}>{description}</Text>
      )}

      {/* STATUS */}
      {status && (
        <View style={Styles.status}>
          <View style={status === 'Online' ? Styles.online : Styles.offline} />
          <Text style={Styles.statusText}>{status}</Text>
        </View>
      )}

      {/* ACTIONS */}
      {actions && (
        <View style={Styles.actionsCardItem}>
          <TouchableOpacity style={Styles.miniButton}>
            <Text style={Styles.star}>
              <Icon name='star' />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.button} onPress={() => onPressLeft()}>
            <Text style={Styles.like}>
              <Icon name='like' />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.button}
            onPress={() => onPressRight()}
          >
            <Text style={Styles.dislike}>
              <Icon name='dislike' />
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.miniButton}>
            <Text style={Styles.flash}>
              <Icon name='flash' />
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};