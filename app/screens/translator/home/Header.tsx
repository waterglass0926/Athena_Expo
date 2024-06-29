import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

import Components from '@/components/translator';
import Constants, { STATUSBAR_HEIGHT } from '@/constants';
import Functions from '@/utils';
import { useNavigation } from '@/hooks/translator/useNavigation';

export const HomeHeader = () => {
  const { openDrawer }: any = useNavigation();

  return (
    <View style={styles.container}>
      <Components.ButtonBorderLess onPress={() => openDrawer()} style={styles.menuBtn}>
        <Icon type='material' name='menu' color={Constants.COLORS.DEFAULT.WHITE} size={24} />
      </Components.ButtonBorderLess>
      <Components.TypoGraphy style={styles.title}>Compare 3 Translator</Components.TypoGraphy>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 56 + STATUSBAR_HEIGHT,
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: Constants.COLORS.DEFAULT.RED,
    zIndex: 99,
  },
  menuBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
  },
  title: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: 'bold',
    color: Constants.COLORS.DEFAULT.WHITE,
  },
});