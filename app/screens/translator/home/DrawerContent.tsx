import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

import Components from '@/components/translator';
import Constants, { STATUSBAR_HEIGHT } from '@/constants';
import Functions from '@/utils';
import { useNavigation } from '@/hooks/translator/useNavigation';

export const DrawerContent = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Icon type='material' name='translate' color={Constants.COLORS.DEFAULT.RED} size={40} />
        </View>
      </View>
      <Components.ButtonBase
        onPress={() => navigate('CardSequence')}
        style={styles.tabContainer}>
        <Icon type='material'
          name='edit'
          color={Constants.COLORS.DEFAULT.RED}
          size={16}
          style={{ marginRight: 16 }}
        />
        <Components.TypoGraphy>Change Card Index</Components.TypoGraphy>
      </Components.ButtonBase>
      <Components.ButtonBase
        onPress={() => navigate('History')}
        style={styles.tabContainer}>
        <Icon type='material'
          name='library-books'
          color={Constants.COLORS.DEFAULT.RED}
          size={16}
          style={{ marginRight: 16 }}
        />
        <Components.TypoGraphy>Translation History</Components.TypoGraphy>
      </Components.ButtonBase>
      <Components.ButtonBase
        onPress={() => navigate('Credit')}
        style={styles.tabContainer}>
        <Icon type='material'
          name='subtitles'
          color={Constants.COLORS.DEFAULT.RED}
          size={16}
          style={{ marginRight: 16 }}
        />
        <Components.TypoGraphy>Credit</Components.TypoGraphy>
      </Components.ButtonBase>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.COLORS.DEFAULT.WHITE,
  },
  header: {
    justifyContent: 'center',
    marginBottom: 8,
    paddingTop: STATUSBAR_HEIGHT,
    paddingHorizontal: 24,
    width: '100%',
    height: 120 + STATUSBAR_HEIGHT,
    backgroundColor: Constants.COLORS.DEFAULT.RED,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Constants.COLORS.DEFAULT.WHITE,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
    height: 48,
  },
});