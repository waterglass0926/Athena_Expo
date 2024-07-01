import React, { useCallback, useContext, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';
// import Clipboard from '@react-native-community/clipboard';
import { Menu, MenuItem } from 'react-native-material-menu';
import * as Speech from 'expo-speech';
import Translator, { languageCodeConverter, TranslatorType } from 'react-native-translator';

import { Share, StyleSheet, Text, View } from 'react-native';

import Components from '@/components/translator';
import Constants from '@/constants';
import Functions from '@/utils';
import { ttsLanguage } from '@/utils/translate';
import { TranslateContext } from '@/contexts/translator/TranslateContext';
import { useNavigation } from '@/hooks/translator/useNavigation';
import { ThemeType } from '@/types/athena';

interface PropsType {
  translatorType: TranslatorType;
};

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const TranslatedCard: React.FC<PropsType> = ({
  translatorType,
}) => {
  const dispatch = useDispatch();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  const { navigate } = useNavigation();
  const { reverseTranslate, fromLanguage, toLanguage, text } =
    useContext(TranslateContext);
  const [moreVisible, setMoreVisible] = useState(false);
  const [result, setResult] = useState('');

  const onTTS = useCallback(async () => {
    // const languageCode = ttsLanguage(toLanguage);
    const languageCode = languageCodeConverter('google', translatorType, toLanguage) || 'en-US';
    Speech.speak(result, { language: languageCode });
  }, [result, toLanguage, translatorType]);

  return (
    <View style={[styles.container, { backgroundColor: Constants.COLORS.TRANLSATOR[translatorType.toUpperCase()] }]}>
      <Translator
        type={translatorType}
        value={text}
        onTranslated={t => setResult(t)}
        from={
          languageCodeConverter('google', translatorType, fromLanguage) || 'en'
        }
        to={languageCodeConverter('google', translatorType, toLanguage) || 'en'}
      />
      <Components.TypoGraphy style={styles.title}>
        {translatorType.toUpperCase()}
      </Components.TypoGraphy>
      <Components.TypoGraphy selectable style={styles.result}>
        {result}
      </Components.TypoGraphy>
      <View style={styles.footer}>
        <Components.ButtonBorderLess onPress={onTTS} style={styles.icon}>
          <Icon type='material' color={Constants.COLORS.DEFAULT.WHITE} size={22} name='volume-up' />
        </Components.ButtonBorderLess>
        <Components.ButtonBorderLess
          // onPress={() => Clipboard.setString(result)}
          style={styles.icon}>
          <Icon type='material' color={Constants.COLORS.DEFAULT.WHITE} size={20} name='content-copy' />
        </Components.ButtonBorderLess>
        <Menu
          visible={moreVisible}
          style={{ backgroundColor: theme.BACKCOLOR }}
          anchor={
            <Components.ButtonBorderLess
              onPress={() => setMoreVisible(true)}
              style={styles.icon}>
              <Icon type='material' color={Constants.COLORS.DEFAULT.WHITE} size={24} name='more-vert' />
            </Components.ButtonBorderLess>
          }
          onRequestClose={() => setMoreVisible(false)}>
          <MenuItem
            textStyle={{ color: theme.FORECOLOR }}
            onPress={() => {
              setMoreVisible(false);
              setTimeout(() => {
                Share.share({ message: result });
              }, 1000);
            }}>
            Share
          </MenuItem>
          <MenuItem
            textStyle={{ color: theme.FORECOLOR }}
            onPress={() => {
              setMoreVisible(false);
              navigate('Full', {
                color: Constants.COLORS.TRANLSATOR[translatorType.toUpperCase()],
                content: result,
              });
            }}>
            Full Screen
          </MenuItem>
          <MenuItem
            textStyle={{ color: theme.FORECOLOR }}
            onPress={() => {
              setMoreVisible(false);
              reverseTranslate(result);
            }}>
            Swipe Tranlation
          </MenuItem>
        </Menu>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    minHeight: 160,
    width: '100%',
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
  result: {
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
    marginLeft: -4,
    width: 48,
    height: 48,
  },
});