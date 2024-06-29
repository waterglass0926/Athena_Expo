import React, { useContext, useState } from 'react';
import { Icon } from 'react-native-elements';
import { Menu, MenuItem } from 'react-native-material-menu';
import { LanguageCode } from 'react-native-translator';

import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Components from '@/components/translator';
import Constants, { LANGUAGES_CODES } from '@/constants';
import Functions from '@/utils';
import { t } from '@/utils/translate';
import { TranslateContext } from '@/contexts/translator/TranslateContext';

export const LanguageSelector = () => {
  const {
    toLanguage,
    fromLanguage,
    reverseLanguage,
    updateToLanguage,
    updateFromLanguage,
  } = useContext(TranslateContext);

  const [fromMenuVisible, setFromMenuVisible] = useState(false);
  const [toMenuVisible, setToMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setFromMenuVisible(true)}
        style={styles.languageButton}>
        <LanguageSelectMenu
          visible={fromMenuVisible}
          onRequestClose={() => setFromMenuVisible(false)}
          onSelect={updateFromLanguage}>
          <View style={styles.languageContainer}>
            <Components.TypoGraphy>{t(fromLanguage)}</Components.TypoGraphy>
            <Icon type='material' size={24} color={Constants.COLORS.DEFAULT.RED} name='arrow-drop-down' />
          </View>
        </LanguageSelectMenu>
      </Pressable>

      <Components.ButtonBorderLess onPress={reverseLanguage} style={styles.reverseButton}>
        <Icon type='material' size={24} color={Constants.COLORS.DEFAULT.RED} name='compare-arrows' />
      </Components.ButtonBorderLess>

      <Pressable
        onPress={() => setToMenuVisible(true)}
        style={styles.languageButton}>
        <LanguageSelectMenu
          visible={toMenuVisible}
          onRequestClose={() => setToMenuVisible(false)}
          onSelect={updateToLanguage}>
          <View style={styles.languageContainer}>
            <Components.TypoGraphy>{t(toLanguage)}</Components.TypoGraphy>
            <Icon type='material' size={24} color={Constants.COLORS.DEFAULT.RED} name='arrow-drop-down' />
          </View>
        </LanguageSelectMenu>
      </Pressable>
    </View>
  );
};

interface LanguageSelectMenu {
  visible: boolean;
  onRequestClose: () => void;
  onSelect: (language: LanguageCode<'google'>) => void;
}

const LanguageSelectMenu: React.FC<LanguageSelectMenu> = ({
  visible,
  onRequestClose,
  onSelect,
  children,
}) => {
  return (
    <Menu visible={visible} anchor={children} onRequestClose={onRequestClose}>
      {LANGUAGES_CODES.map(language => (
        <MenuItem
          key={language}
          onPress={() => {
            onSelect(language);
            onRequestClose();
          }}>
          {t(language)}
        </MenuItem>
      ))}
    </Menu>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 48,
    backgroundColor: Constants.COLORS.DEFAULT.WHITE,
    ...Constants.STYLES.TRANSLATOR.SHADOW,
  },
  languageButton: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  reverseButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
  },
});