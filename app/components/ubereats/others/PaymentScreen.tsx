import React, { useEffect, useState } from 'react';

import { initStripe } from '@stripe/stripe-react-native';
import tailwind from 'tailwind-react-native-classnames';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions, { fetchPublishableKey } from '@/utils';

export const PaymentScreen = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initialize() {
      const publishableKey = await fetchPublishableKey();
      if (publishableKey) {
        await initStripe({
          publishableKey,
          merchantIdentifier: 'merchant.com.stripe.react.native',
          urlScheme: 'stripe-example',
          setUrlSchemeOnAndroid: true,
        });
        setLoading(false);
      };
    };

    initialize();
  }, []);

  return loading ? (
    <View style={tailwind`flex-1 bg-white items-center justify-center`}>
      <ActivityIndicator size='large' color={Constants.COLORS.DEFAULT.BLACK} />
    </View>
  ) : (
    <ScrollView
      accessibilityLabel='payment-screen'
      style={styles.container}
      keyboardShouldPersistTaps='handled'>
      {children}
      <Text style={{ opacity: 0 }}>appium fix</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: Constants.COLORS.UBEREATS.white,
  },
});