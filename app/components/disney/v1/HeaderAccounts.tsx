import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';

import SvgPlus from '@/assets/svgs/disney/v1/Svg.Plus';
import Constants from '@/constants';
import Device from '@/utils/device';

const ICON_SIZE = 74;

export const HeaderAccounts = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.containerAccounts}>
      <View style={styles.containerUser}>
        <Image source={Constants.IAMGES.DISNEY.V1.stormtrooper} style={styles.avatar} />
        <Text style={[styles.username, styles.usernameActive]}>Caleb</Text>
        <View style={styles.avatarActive} />
      </View>

      <View style={styles.containerUser}>
        <Image source={Constants.IAMGES.DISNEY.V1.elsa} style={styles.avatar} />
        <Text style={styles.username}>Kim</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('DisneyV1ModalAddProfile')}
        style={styles.containerUser}
      >
        <View style={styles.containerPlus}>
          <SvgPlus size={40} />
        </View>
        <Text style={styles.username}>Add Profile</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('DisneyV1ModalManageProfiles')}
      style={styles.containerEditProfiles}
    >
      <Text style={styles.editProfilesText}>Edit Profiles</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%'
  },
  containerAccounts: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 30,
    paddingTop: Device.iPhoneNotch ? 64 : 40,
    width: '100%'
  },
  containerUser: {
    alignItems: 'center',
    marginHorizontal: 10
  },
  avatar: {
    borderRadius: ICON_SIZE / 2,
    height: ICON_SIZE,
    marginBottom: 6,
    overflow: 'hidden',
    resizeMode: 'contain',
    width: ICON_SIZE
  },
  avatarActive: {
    ...Constants.STYLES.DISNEY.V1.posAbsolute,
    borderColor: Constants.COLORS.DISNEY.V1.white,
    borderRadius: ICON_SIZE / 2,
    borderWidth: 2,
    height: ICON_SIZE,
    width: ICON_SIZE
  },
  username: {
    color: Constants.COLORS.DISNEY.V1.inactiveGrey,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY,
    fontSize: 12,
    marginTop: 4
  },
  usernameActive: {
    color: Constants.COLORS.DISNEY.V1.white,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY
  },
  containerPlus: {
    alignItems: 'center',
    backgroundColor: Constants.COLORS.DISNEY.V1.profileBackground,
    borderRadius: ICON_SIZE / 2,
    height: ICON_SIZE,
    justifyContent: 'center',
    marginBottom: 4,
    width: ICON_SIZE
  },
  containerEditProfiles: {
    alignItems: 'center',
    backgroundColor: Constants.COLORS.DISNEY.V1.profileEditBackground,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 24
  },
  editProfilesText: {
    color: Constants.COLORS.DISNEY.V1.white,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY,
    paddingHorizontal: 16,
    paddingVertical: 8,
    textTransform: 'uppercase'
  }
});