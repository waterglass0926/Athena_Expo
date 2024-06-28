import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';
import tailwind from 'tailwind-react-native-classnames';

import {
  StyleSheet,
  View,
  Text,
  Modal,
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/ubereats/others';
import Constants from '@/constants';
import Functions from '@/utils';
import { selectTotalItems, selectTotalPrice } from '@/stores/ubereats/basket';

export const Cart = () => {
  const totalPrice = useSelector(selectTotalPrice);
  const getAllItems = useSelector(selectTotalItems);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Components.Screen style={tailwind`flex-1 bg-white`}>
      <Components.AppHead title={`Your cart (${getAllItems.length})`} icon='basket-outline' />
      <View style={tailwind`flex-1`}>
        <Components.CartItems />
      </View>
      {!!getAllItems.length && (
        <View style={tailwind`flex-row items-center px-5 pb-5`}>
          <View style={styles.left}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.totalAmount}>${totalPrice}</Text>
          </View>
          <View style={styles.right}>
            <Components.AppButton title='Checkout' onPress={() => setModalVisible(true)} color={Constants.COLORS.DEFAULT.BLACK} />
          </View>
        </View>
      )}
      <Modal visible={modalVisible} animationType='slide' transparent={true}>
        <Components.CheckoutModal setModalVisible={setModalVisible} />
      </Modal>
    </Components.Screen>
  );
};

const styles = StyleSheet.create({
  left: {
    marginRight: 20
  },
  right: {
    flex: 1
  },
  total: {
    fontSize: 14,
    color: Constants.COLORS.UBEREATS.title
  },
  totalAmount: {
    fontSize: 23,
  },
});