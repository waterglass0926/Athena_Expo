import React, { useContext } from 'react';

import { Icon } from 'react-native-elements';

import { Pressable, StyleSheet, Text, View } from 'react-native';

import Components from '@/components/translator';
import Constants from '@/constants';
import Functions from '@/utils';
import { t } from '@/utils/translate';
import { History } from '@/types/translator';
import { TranslateContext } from '@/contexts/translator/TranslateContext';
import { HistoryContext } from '@/contexts/translator/HistoryContext';
import { useNavigation } from '@/hooks/translator/useNavigation';

export const HistoryCard: React.FC<History> = props => {
  const { navigate } = useNavigation();
  const { applyHistory } = useContext(TranslateContext);
  const { removeHistory } = useContext(HistoryContext);
  const { id, text, toLanguage } = props;

  return (
    <View style={styles.container}>
      <Components.TypoGraphy style={styles.title}>
        {`To ${t(toLanguage)}`}
      </Components.TypoGraphy>
      <Components.TypoGraphy style={styles.text}>{text}</Components.TypoGraphy>
      <View style={styles.footer}>
        <Components.ButtonBorderLess onPress={() => removeHistory(id)} style={styles.icon}>
          <Icon type='material' name='close' color={Constants.COLORS.DEFAULT.WHITE} size={24} />
        </Components.ButtonBorderLess>
        <Components.ButtonBorderLess
          onPress={() => {
            applyHistory(props);
            navigate('Home');
          }}
          style={styles.icon}>
          <Icon type='material' name='arrow-forward' color={Constants.COLORS.DEFAULT.WHITE} size={24} />
        </Components.ButtonBorderLess>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 160,
    marginBottom: 16,
    width: '100%',
    backgroundColor: Constants.COLORS.DEFAULT.RED,
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: 48,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -4,
    width: 48,
    height: 48,
  },
});