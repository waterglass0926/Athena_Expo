import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Icon } from 'react-native-elements';

import { StyleSheet, View } from 'react-native';

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

export const DrawerContent = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const { theme } = useSelector((state: StateType) => state.athena);

  return (
    <View style={{
      ...styles.container,
      backgroundColor: theme.BACKCOLOR,
    }}>
      <View style={{
        ...styles.header,
        backgroundColor: theme.PRIMARY,
      }}>
        <View style={{
          ...styles.iconContainer,
          backgroundColor: theme.BACKCOLOR,
        }}>
          <Icon type='material' name='translate' color={theme.PRIMARY} size={40} />
        </View>
      </View>
      <Components.ButtonBase
        onPress={() => navigate('CardSequence')}
        style={styles.tabContainer}>
        <Icon type='material'
          name='edit'
          color={theme.PRIMARY}
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
          color={theme.PRIMARY}
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
          color={theme.PRIMARY}
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
  },
  header: {
    justifyContent: 'center',
    marginBottom: 8,
    paddingHorizontal: 24,
    width: '100%',
    height: 120,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    width: '100%',
    height: 48,
  },
});