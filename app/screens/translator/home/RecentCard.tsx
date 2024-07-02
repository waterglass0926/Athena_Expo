import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Icon } from 'react-native-elements';

import { StyleSheet, View } from 'react-native';

import Components from '@/components/translator';
import Constants from '@/constants';
import Functions from '@/utils';
import { TranslateContext } from '@/contexts/translator/TranslateContext';
import { History } from '@/types/translator';
import { ThemeType } from '@/types/athena';

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const RecentCard: React.FC<History> = props => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: StateType) => state.athena);

  const { applyHistory } = useContext(TranslateContext);
  const { text } = props;

  return (
    <View style={{
      ...styles.container,
      backgroundColor: Constants.COLORS.DEFAULT.GRAY,
    }}>
      <Components.TypoGraphy style={styles.title}>Recent Search</Components.TypoGraphy>
      <Components.TypoGraphy style={styles.text}>{text}</Components.TypoGraphy>
      <View style={styles.footer}>
        <Components.ButtonBorderLess
          onPress={() => applyHistory(props)}
          style={styles.icon}>
          <Icon type='materail' color={Constants.COLORS.DEFAULT.WHITE} size={24} name='arrow-forward' />
        </Components.ButtonBorderLess>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 160,
    borderRadius: 16,
    ...Constants.STYLES.TRANSLATOR.SHADOW,
  },
  title: {
    marginLeft: 16,
    marginTop: 16,
    fontSize: 20,
    fontWeight: 'bold',
    color: Constants.COLORS.DEFAULT.WHITE,
  },
  text: {
    flex: 1,
    margin: 16,
    marginBottom: 8,
    fontSize: 16,
    color: Constants.COLORS.DEFAULT.WHITE,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: 48,
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
  },
});