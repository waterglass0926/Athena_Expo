import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Icon } from 'react-native-elements';
// import DeviceInfo from 'react-native-device-info';
import InAppReview from 'react-native-in-app-review';

import { StyleSheet, View, Text, Linking } from 'react-native';

import Components from '@/components/translator';
import Constants from '@/constants';
import Functions from '@/utils';
import { useNavigation } from '@/hooks/translator/useNavigation';
import { ThemeType } from '@/types/athena';

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const Credit = () => {
  const { goBack, navigate } = useNavigation();
  const dispatch = useDispatch();
  const { theme } = useSelector((state: StateType) => state.athena);

  return (
    <View style={{
      ...styles.container,
      backgroundColor: theme.BACKCOLOR,
    }}>
      <Components.ButtonBase onPress={() => goBack()} style={styles.buttonItem}>
        <View style={styles.viewIcon}>
          <Icon type='material' name='keyboard-backspace' size={20} color={theme.FORECOLOR} />
        </View>
        <Text style={{
          ...styles.textItem,
          color: theme.FORECOLOR,
        }}>Back</Text>
      </Components.ButtonBase>
      <Components.ButtonBase
        onPress={() => Linking.openURL('mailto:starmastar1126@gmail.com')}
        style={styles.buttonItem}>
        <View style={styles.viewIcon}>
          <Icon type='material' name='email' size={20} color={theme.FORECOLOR} />
        </View>
        <Text style={{
          ...styles.textItem,
          color: theme.FORECOLOR,
        }}>coderhyun476@gmail.com</Text>
      </Components.ButtonBase>
      <Components.ButtonBase
        onPress={() => Linking.openURL('https://www.github.com/starmastar1126')}
        style={styles.buttonItem}>
        <View style={styles.viewIcon}>
          <Icon type='material' name='account-circle' size={20} color={theme.FORECOLOR} />
        </View>
        <Text style={{
          ...styles.textItem,
          color: theme.FORECOLOR,
        }}>github.com/starmastar1126</Text>
      </Components.ButtonBase>
      <Components.ButtonBase onPress={() => navigate('Oss')} style={styles.buttonItem}>
        <View style={styles.viewIcon}>
          <Icon type='material' name='cloud' size={18} color={theme.FORECOLOR} />
        </View>
        <Text style={{
          ...styles.textItem,
          color: theme.FORECOLOR,
        }}>open source librarys</Text>
      </Components.ButtonBase>
      <Components.ButtonBase
        onPress={() => InAppReview.RequestInAppReview()}
        style={styles.buttonItem}>
        <View style={styles.viewIcon}>
          <Icon type='material' name='star' size={20} color={theme.FORECOLOR} />
        </View>
        <Text style={{
          ...styles.textItem,
          color: theme.FORECOLOR,
        }}>rate us</Text>
      </Components.ButtonBase>
      {/* <Components.ButtonBase style={styles.buttonItem}>
        <View style={styles.viewIcon}>
          <Icon type='material' name='info' size={20} color={theme.FORECOLOR} />
        </View>
        <Text style={{
        ...styles.textItem,
        color: theme.FORECOLOR
        }}>{DeviceInfo.getVersion()}</Text>
      </Components.ButtonBase> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.SIZE.S48,
  },
  buttonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 56,
  },
  viewIcon: {
    alignItems: 'center',
    width: 56,
  },
  textItem: {
    fontSize: 16,
  },
});