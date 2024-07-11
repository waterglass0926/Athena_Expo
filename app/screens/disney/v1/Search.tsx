import * as React from 'react';
import { ScrollView, View } from 'react-native';

import SvgBackground from '@/assets/svgs/disney/v1/Svg.Background';
import Constants from '@/constants';

export const Search = () => (
  <View style={Constants.STYLES.DISNEY.V1.container}>
    <View style={Constants.STYLES.DISNEY.V1.posAbsolute}>
      <SvgBackground />
    </View>

    <ScrollView scrollEventThrottle={16} showsVerticalScrollIndicator={false}>
      <View />
    </ScrollView>
  </View>
);