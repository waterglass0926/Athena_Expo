import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Constants from '@/constants';
import Device from '@/utils/device';

export const HeaderManage = ({ backText, navigation, save, saveActive, title }) => {
  const saveColor = saveActive ? { color: Constants.COLORS.DISNEY.V1.white } : {};

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.goBack(null)}
        style={styles.back}
      >
        <Text style={styles.backText}>{backText}</Text>
      </TouchableOpacity>

      {title && (
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{title}</Text>
        </View>
      )}

      {!save && <View style={Constants.STYLES.DISNEY.V1.flex1} />}

      {save && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack(null)}
          style={styles.save}
        >
          <Text style={[styles.saveText, saveColor]}>Save</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: Constants.COLORS.DISNEY.V1.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 4,
    paddingHorizontal: 16,
    paddingTop: Device.iPhoneNotch ? 54 : 30
  },
  back: {
    alignItems: 'flex-start',
    flex: 1,
    height: 35,
    justifyContent: 'center'
  },
  backText: {
    color: Constants.COLORS.DISNEY.V1.white,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY
  },
  containerTitle: {
    flex: 4,
    height: 35,
    justifyContent: 'flex-end'
  },
  title: {
    color: Constants.COLORS.DISNEY.V1.heading,
    fontSize: 18,
    paddingBottom: 4,
    textAlign: 'center'
  },
  save: {
    alignItems: 'flex-end',
    flex: 1,
    height: 35,
    justifyContent: 'center'
  },
  saveText: {
    color: Constants.COLORS.DISNEY.V1.moreSaveText,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY
  }
});