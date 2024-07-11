import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import SvgBackground from '@/assets/svgs/disney/v1/Svg.Background';
import SvgDisneyPlusLogo from '@/assets/svgs/disney/v1/Svg.DisneyPlusLogo';
import Components from '@/components/disney/v1';
import Constants from '@/constants';
import Device from '@/utils/device';

export const Home = () => (
  <View style={Constants.STYLES.DISNEY.V1.container}>
    <View style={Constants.STYLES.DISNEY.V1.posAbsolute}>
      <SvgBackground />
    </View>

    <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
      <View style={styles.containerHeader}>
        <SvgDisneyPlusLogo />
      </View>

      <Components.SlideShow />

      <Components.Categories />

      <Text style={Constants.STYLES.DISNEY.V1.heading}>Originals</Text>
      <Components.MediaItemScroller dataset='originals' />

      <Text style={Constants.STYLES.DISNEY.V1.heading}>Recommended For You</Text>
      <Components.MediaItemScroller dataset='recommended' />

      <Text style={Constants.STYLES.DISNEY.V1.heading}>Hit Movies</Text>
      <Components.MediaItemScroller dataset='hits' />

      <Text style={Constants.STYLES.DISNEY.V1.heading}>Trending</Text>
      <Components.MediaItemScroller dataset='trending' />

      <Text style={Constants.STYLES.DISNEY.V1.heading}>Out of the Vault</Text>
      <Components.MediaItemScroller dataset='vault' />

      <Text style={Constants.STYLES.DISNEY.V1.heading}>Ultra HD and HDR</Text>
      <Components.MediaItemScroller dataset='hdr' />

      <View style={Constants.STYLES.DISNEY.V1.spacer24} />
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  containerHeader: {
    alignItems: 'center',
    marginBottom: 8,
    paddingTop: Device.iPhoneNotch ? 36 : 6
  }
});