import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import SvgEdit from '@/assets/svgs/disney/v1/Svg.Edit';
import SvgPlus from '@/assets/svgs/disney/v1/Svg.Plus';
import Components from '@/components/disney/v1';
import Constants from '@/constants';

export const ModalManageProfiles = ({ navigation }) => (
  <View style={[Constants.STYLES.DISNEY.V1.container, { backgroundColor: Constants.COLORS.DISNEY.V1.black }]}>
    <Components.HeaderManage navigation={navigation} />

    <View style={styles.container}>
      <View style={styles.containerUser}>
        <Image source={Constants.IAMGES.DISNEY.V1.robot} style={styles.avatar} />
        <Text style={styles.text}>Caleb</Text>
        <View style={styles.overlay} />
        <View style={styles.containerSvg}>
          <SvgEdit active size={40} />
        </View>
      </View>

      <View style={styles.containerUser}>
        <Image source={Constants.IAMGES.DISNEY.V1.penguin} style={styles.avatar} />
        <Text style={styles.text}>Kim</Text>
        <View style={styles.overlay} />
        <View style={styles.containerSvg}>
          <SvgEdit active size={40} />
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('DisneyV1ModalAddProfile')}
        style={styles.containerUser}
      >
        <View style={styles.containerPlus}>
          <View style={styles.plusBackground}>
            <SvgPlus active size={40} />
          </View>
        </View>
        <Text style={styles.text}>Add Profile</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const BLOCK_SIZE = 108;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 60,
    width: 280
  },
  containerUser: {
    marginBottom: 16
  },
  containerSvg: {
    alignItems: 'center',
    height: BLOCK_SIZE,
    justifyContent: 'center',
    position: 'absolute',
    width: BLOCK_SIZE
  },
  overlay: {
    backgroundColor: Constants.COLORS.DISNEY.V1.black50,
    height: BLOCK_SIZE,
    position: 'absolute',
    top: 0,
    width: BLOCK_SIZE
  },
  avatar: {
    height: BLOCK_SIZE,
    resizeMode: 'contain',
    width: BLOCK_SIZE
  },
  text: {
    color: Constants.COLORS.DISNEY.V1.white,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY,
    fontSize: 16,
    marginTop: 8,
    textAlign: 'center'
  },
  containerPlus: {
    alignItems: 'center',
    height: BLOCK_SIZE,
    justifyContent: 'center',
    width: BLOCK_SIZE
  },
  plusBackground: {
    alignItems: 'center',
    backgroundColor: Constants.COLORS.DISNEY.V1.moreAddProfileBg,
    borderRadius: 34,
    height: 68,
    justifyContent: 'center',
    width: 68
  }
});