import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Icon } from 'react-native-elements';

import { StyleSheet, View } from 'react-native';

import Components from '@/components/translator';
import Constants from '@/constants';
import Functions from '@/utils';
import { t } from '@/utils/translate';
import { History } from '@/types/translator';
import { TranslateContext } from '@/contexts/translator/TranslateContext';
import { HistoryContext } from '@/contexts/translator/HistoryContext';
import { useNavigation } from '@/hooks/translator/useNavigation';
import { ThemeType } from '@/types/athena';

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const HistoryCard: React.FC<History> = props => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: StateType) => state.athena);
  const { navigate } = useNavigation();
  const { applyHistory } = useContext(TranslateContext);
  const { removeHistory } = useContext(HistoryContext);
  const { id, text, toLanguage } = props;

  return (
    <View style={{
      ...styles.container,
      backgroundColor: theme.PRIMARY,
    }}>
      <Components.TypoGraphy style={{ ...styles.title, color: Constants.COLORS.DEFAULT.WHITE }}>
        {`To ${t(toLanguage)}`}
      </Components.TypoGraphy>
      <Components.TypoGraphy style={{ ...styles.text, color: Constants.COLORS.DEFAULT.WHITE }}>{text}</Components.TypoGraphy>
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
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 160,
    marginBottom: 16,
    width: '100%',
    borderRadius: 16,
    ...Constants.STYLES.TRANSLATOR.SHADOW,
  },
  title: {
    marginLeft: 16,
    marginTop: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    flex: 1,
    margin: 16,
    marginBottom: 8,
    fontSize: 16,
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