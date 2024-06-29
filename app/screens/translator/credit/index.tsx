import React from 'react';

import { Icon } from 'react-native-elements';
// import DeviceInfo from 'react-native-device-info';
import InAppReview from 'react-native-in-app-review';

import { View, Text, Linking, ToastAndroid, StyleSheet } from 'react-native';

import Components from '@/components/translator';
import Constants, { STATUSBAR_HEIGHT } from '@/constants';
import Functions from '@/utils';
import { useNavigation } from '@/hooks/translator/useNavigation';

export const Credit = () => {
  const { goBack, navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <Components.ButtonBase
        onPress={() => Linking.openURL('mailto:starmastar1126@gmail.com')}
        style={[styles.itemContainer, { marginTop: 16 }]}>
        <View style={styles.iconContainer}>
          <Icon type='material' name='email' size={20} color='white' />
        </View>
        <Text style={styles.text}>coderhyun476@gmail.com</Text>
      </Components.ButtonBase>
      <Components.ButtonBase
        onPress={() => Linking.openURL('https://www.github.com/starmastar1126')}
        style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <Icon type='material' name='account-circle' size={20} color='white' />
        </View>
        <Text style={styles.text}>github.com/starmastar1126</Text>
      </Components.ButtonBase>
      <Components.ButtonBase onPress={() => navigate('Oss')} style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <Icon type='material' name='cloud' size={18} color='white' />
        </View>
        <Text style={styles.text}>open source librarys</Text>
      </Components.ButtonBase>
      <Components.ButtonBase
        onPress={() => InAppReview.RequestInAppReview()}
        style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <Icon type='material' name='star' size={20} color='white' />
        </View>
        <Text style={styles.text}>rate us</Text>
      </Components.ButtonBase>
      <Components.ButtonBase style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <Icon type='material' name='info' size={20} color='white' />
        </View>
        {/* <Text style={styles.text}>{DeviceInfo.getVersion()}</Text> */}
      </Components.ButtonBase>
      <Components.ButtonBase onPress={() => goBack()} style={styles.itemContainer}>
        <View style={styles.iconContainer}>
          <Icon type='material' name='keyboard-backspace' size={20} color='white' />
        </View>
        <Text style={styles.text}>Back</Text>
      </Components.ButtonBase>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: Constants.COLORS.DEFAULT.RED,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 56,
  },
  iconContainer: {
    alignItems: 'center',
    width: 56,
  },
  text: {
    fontSize: 16,
    color: Constants.COLORS.DEFAULT.WHITE,
  },
});