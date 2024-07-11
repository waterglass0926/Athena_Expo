import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SvgBackground from '@/assets/svgs/disney/v1/Svg.Background';
import SvgDownloads from '@/assets/svgs/disney/v1/Svg.Downloads';
import Components from '@/components/disney/v1';
import Constants from '@/constants';

export const Downloads = ({ navigation }) => (
  <View style={Constants.STYLES.DISNEY.V1.container}>
    <View style={Constants.STYLES.DISNEY.V1.posAbsolute}>
      <SvgBackground />
    </View>

    <Components.Header title='Downloads' navigation={navigation} />

    <View style={styles.containerContent}>
      <View style={styles.containerIcon}>
        <SvgDownloads fill={Constants.COLORS.DISNEY.V1.profileBackground} size={48} />
      </View>

      <Text style={styles.heading}>You have no downloads</Text>

      <Text style={styles.description}>
        Movies and series you download will appear here.
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  containerContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  containerIcon: {
    alignItems: 'center',
    borderColor: Constants.COLORS.DISNEY.V1.profileBackground,
    borderRadius: 50,
    borderWidth: 2,
    height: 100,
    justifyContent: 'center',
    marginBottom: 32,
    marginTop: 48,
    width: 100
  },
  heading: {
    color: Constants.COLORS.DISNEY.V1.white,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY,
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
    width: 300
  },
  description: {
    color: Constants.COLORS.DISNEY.V1.heading,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY,
    fontSize: 16,
    marginBottom: 48,
    textAlign: 'center',
    width: 300
  }
});