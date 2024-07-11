import * as React from 'react';
import { View, WebView } from 'react-native';

import Components from '@/components/disney/v1';
import Constants from '@/constants';

export const ModalWebView = ({ navigation }) => (
  <View style={Constants.STYLES.DISNEY.V1.container}>
    <Components.Header close closeText='Close' navigation={navigation} />

    <WebView
      bounces={false}
      javaScriptEnabled
      scalesPageToFit
      source={{ uri: navigation.getParam('url', 'https://www.disneyplus.com') }}
      startInLoadingState
    />
  </View>
);