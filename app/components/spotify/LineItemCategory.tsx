import * as React from 'react';
import {
  Feather,
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Constants from '@/constants';

export function LineItemCategory({
  icon,
  onPress,
  title,
  disableRightSide,
  iconLibrary
}) {
  let iconDisplay;

  switch (iconLibrary) {
    case 'Entypo':
      iconDisplay = (
        <Entypo color={Constants.COLORS.SPOTIFY.greyInactive} name={icon} size={24} />
      );
      break;
    case 'MaterialIcons':
      iconDisplay = (
        <MaterialIcons color={Constants.COLORS.SPOTIFY.greyInactive} name={icon} size={24} />
      );
      break;
    case 'MaterialCommunityIcons':
      iconDisplay = (
        <MaterialCommunityIcons
          color={Constants.COLORS.SPOTIFY.greyInactive}
          name={icon}
          size={24}
        />
      );
      break;
    case 'FontAwesome':
      iconDisplay = (
        <FontAwesome color={Constants.COLORS.SPOTIFY.greyInactive} name={icon} size={24} />
      );
      break;
    case 'Feather':
    default:
      iconDisplay = (
        <Feather color={Constants.COLORS.SPOTIFY.greyInactive} name={icon} size={24} />
      );
      break;
  };

  return (
    <TouchableOpacity
      activeOpacity={Constants.STYLES.SPOTIFY.activeOpacity}
      onPress={onPress}
      style={styles.container}
    >
      <View style={Constants.STYLES.SPOTIFY.flexRowCenterAlign}>
        {iconDisplay}
        <Text style={styles.title}>{title}</Text>
      </View>

      {disableRightSide ? null : (
        <View style={styles.containerRight}>
          <Feather color={Constants.COLORS.SPOTIFY.greyInactive} name='chevron-right' size={20} />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 10,
    width: '100%'
  },
  title: {
    ...Constants.STYLES.SPOTIFY.textSpotify14,
    color: Constants.COLORS.SPOTIFY.white,
    marginLeft: 16
  },
  containerRight: {
    alignItems: 'flex-end',
    flex: 1
  },
});