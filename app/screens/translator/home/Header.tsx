import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';

import { Pressable, StyleSheet, Text, View } from 'react-native';

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

export const HomeHeader = () => {
  const dispatch = useDispatch();
  const { openDrawer }: any = useNavigation();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  return (
    <View style={{
      ...styles.container,
      backgroundColor: theme.PRIMARY
    }}>
      <Components.ButtonBorderLess onPress={() => openDrawer()} style={styles.menuBtn}>
        <Icon type='material' name='menu' color={Constants.COLORS.DEFAULT.WHITE} size={24} />
      </Components.ButtonBorderLess>
      <Components.TypoGraphy style={{
        ...styles.title,
        color: Constants.COLORS.DEFAULT.WHITE
      }}>Compare 3 Translator</Components.TypoGraphy>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 56,
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
  },
});