import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { useNavigation } from '@react-navigation/core';
import { Icon } from 'react-native-elements';
import tailwind from 'tailwind-react-native-classnames';
import { useStripe } from '@stripe/stripe-react-native';

import {
  StyleSheet,
  View,
  Text,
  Alert,
  Image,
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/ubereats/others';
import Constants from '@/constants';
import Functions from '@/utils';
import { db, timestamp } from '@/utils/firebase';
import { selectUser } from '@/stores/ubereats/auth';
import { selectCartItems, updateBasket } from '@/stores/ubereats/basket';

export const Checkout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const allCartItems = useSelector(selectCartItems);
  const navigation = useNavigation();
  const {
    initPaymentSheet,
    presentPaymentSheet,
    confirmPaymentSheetPayment,
  } = useStripe();

  const [paymentSheetEnabled, setPaymentSheetEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [loadingOrder, setLoadingOrder] = useState(false);

  const fetchPaymentSheetParams = async () => {
    const response = await fetch(`${Constants.URLS.UBEREATS.BASEURL}/payment-sheet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initialisePaymentSheet = async () => {
    setLoading(true);

    try {
      const {
        paymentIntent,
        ephemeralKey,
        customer,
      } = await fetchPaymentSheetParams();

      const { error, paymentOption } = await initPaymentSheet({
        customerId: customer,
        customerEphemeralKeySecret: ephemeralKey,
        paymentIntentClientSecret: paymentIntent,
        customFlow: true,
        merchantDisplayName: 'Example Inc.',
        applePay: false,
        merchantCountryCode: 'US',
        style: 'alwaysDark',
        googlePay: false,
        testEnv: true,
      });

      if (!error) {
        setPaymentSheetEnabled(true);
      };

      if (paymentOption) {
        setPaymentMethod(paymentOption);
      };

    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    };
  };

  const choosePaymentOption = async () => {
    const { error, paymentOption } = await presentPaymentSheet({
      confirmPayment: false,
    });

    if (error) {
      console.log('error', error);
    } else if (paymentOption) {
      setPaymentMethod({
        label: paymentOption?.label,
        image: paymentOption?.image,
      });
    } else {
      setPaymentMethod(null);
    };
  };

  const onPressBuy = async () => {
    setLoading(true);
    const { error } = await confirmPaymentSheetPayment();

    if (error) {
      Alert.alert('Payment faild', `Error code: ${error.code}`, error.message);
    } else {
      // Success;
      addOrder();
      setPaymentSheetEnabled(false);
    };

    setLoading(false);
  };

  useEffect(() => {
    // In your app’s checkout, make a network request to the backend and initialize PaymentSheet.
    // To reduce loading time, make this request before the Checkout button is tapped, e.g. when the screen is loaded.
    initialisePaymentSheet();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addOrder = () => {
    setLoadingOrder(true);
    db.collection('orders')
      .add({
        items: allCartItems,
        email: user?.email,
        timestamp
      })
      .then(() => {
        setTimeout(() => {
          setLoadingOrder(false);
          dispatch(updateBasket([]));
          navigation.navigate('UberEatsSuccess');
        }, 1500)
      })
      .catch(e => {
        setLoadingOrder(false);
        Alert.alert('Error', e.message);
      });
  };

  return (
    <>
      {loadingOrder ? (
        <View style={tailwind`h-full bg-white items-center justify-center`}>
          <Text style={tailwind`font-bold text-lg w-3/4 text-center`}>{'Congratulations!\nPayment successfully done!'}</Text>
          <Text style={tailwind`mt-4`}>Creating your order. please wait...</Text>
          <Image source={require('@/assets/images/ubereats/loaging.gif')} style={tailwind`w-72 h-72`} />
        </View>
      ) : (
        <>
          <Components.PaymentScreen>
            <Components.AppHead title={`Checkout`} />
            <View style={tailwind`mt-5`}>
              <Components.PaymentButton
                variant='primary'
                loading={loading}
                title={
                  paymentMethod ? (
                    <View style={styles.row}>
                      <Image
                        source={{
                          uri: `data:image/png;base64,${paymentMethod?.image}`,
                        }}
                        style={styles.image}
                      />
                      <Text style={styles.text}>{paymentMethod?.label}</Text>
                    </View>
                  ) : (
                    'Choose payment method'
                  )
                }
                disabled={!paymentSheetEnabled}
                onPress={choosePaymentOption}
              />
            </View>

            <View style={styles.section}>
              <Components.PaymentButton
                variant='primary'
                loading={loading}
                disabled={!paymentMethod || !paymentSheetEnabled}
                title='Pay'
                onPress={onPressBuy}

              />
            </View>
          </Components.PaymentScreen>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    marginTop: 20,
  },
  title: {
    marginBottom: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentMethodTitle: {
    fontWeight: 'bold',
    color: Constants.COLORS.UBEREATS.slate,
  },
  image: {
    width: 26,
    height: 20,
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '600',
    color: Constants.COLORS.UBEREATS.white,
  },
});