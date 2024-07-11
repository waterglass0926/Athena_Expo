import * as React from 'react';
import { View } from 'react-native';

import SvgBackground from '@/assets/svgs/disney/v1/Svg.Background';
import Components from '@/components/disney/v1';
import Constants from '@/constants';

export const ProfileWatchlist = ({ navigation }) => (
  <View style={Constants.STYLES.DISNEY.V1.container}>
    <View style={Constants.STYLES.DISNEY.V1.posAbsolute}>
      <SvgBackground />
    </View>

    <Components.Header showBack title='Watchlist' navigation={navigation} />
  </View>
);
