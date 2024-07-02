import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/athena';
import Constants from '@/constants';
import Functions from '@/utils';
import { setLanguage } from '@/stores/athena';
import { ThemeType } from '@/types/athena';

type PropsType = {
  navigation: any;
};

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const Language: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const { theme } = useSelector((state: StateType) => state.athena);

  const [lang, setLang] = useState(Constants.DATA.LANGUAGES[0]);

  useEffect(() => {
    i18n.changeLanguage(lang.code);
    dispatch(setLanguage(lang));
  }, [lang]);

  const onBack = () => navigation.goBack();

  const onNext = () => navigation.navigate('Slides');

  const onLanguage = (value: any) => setLang(value);

  const RenderHeader = () => {
    return (
      <View style={{
        ...Constants.STYLES.CONTENT,
        ...Constants.STYLES.ALIGN_ROW_SPACE_BETWEEN,
        ...styles.viewHeader,
      }}>
        <TouchableOpacity
          style={{
            ...Constants.STYLES.ALIGN_COL_CENTER,
            width: 30,
            height: 30,
          }}
          onPress={onBack}
        >
          <Icon
            type='material-community'
            name='arrow-left-thin-circle-outline'
            size={Constants.SIZE.S28}
            color={Constants.COLORS.DEFAULT.WHITE}
          />
        </TouchableOpacity>
        <Text style={{
          ...Constants.STYLES.TEXT_HEADER,
          color: Constants.COLORS.DEFAULT.WHITE,
        }}>
          {t('Language').toUpperCase()}
        </Text>
        <TouchableOpacity
          style={{
            ...Constants.STYLES.ALIGN_COL_CENTER,
            width: 30,
            height: 30,
          }}
          onPress={onNext}
        >
          <Icon
            type='material-community'
            name='arrow-right-thin-circle-outline'
            size={Constants.SIZE.S28}
            color={Constants.COLORS.DEFAULT.WHITE}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const RenderLanguage = (item: any) => {
    return (
      <TouchableOpacity
        key={`language${item.key}`}
        style={{
          ...Constants.STYLES.ALIGN_ROW_SPACE_BETWEEN,
          marginVertical: Constants.SIZE.S08,
        }}
        activeOpacity={0.5}
        onPress={() => onLanguage(item)}
      >
        <View style={{
          ...Constants.STYLES.ALIGN_COL_CENTER,
          ...styles.viewFlag,
          backgroundColor: theme.SECONDARY,
        }}>
          <Image source={item.flag} style={styles.imageFlag} />
        </View>
        <View style={{
          ...Constants.STYLES.ALIGN_ROW_SPACE_BETWEEN,
          ...styles.viewDetail,
          backgroundColor: theme.SECONDARY,
        }}>
          <Text style={{
            ...Constants.STYLES.TEXT_TITLE,
            color: theme.FORECOLOR,
          }}>
            {`${item.language} (${item.country})`}
          </Text>
          <Icon
            type='material'
            name={lang.code === item.code ? 'radio-button-checked' : 'radio-button-unchecked'}
            size={Constants.SIZE.S28}
            color={lang.code === item.code ? theme.PRIMARY : theme.FORECOLOR}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{
      ...Constants.STYLES.CONTAINER,
      ...Constants.STYLES.ALIGN_COL_FLEX_START,
      backgroundColor: theme.PRIMARY,
    }}>
      {RenderHeader()}
      <View style={{
        ...Constants.STYLES.CONTAINER,
        ...styles.viewContent,
        backgroundColor: theme.BACKCOLOR,
      }}>
        <ScrollView
          key='scroll00'
          contentContainerStyle={Constants.STYLES.CONTENT}
          showsVerticalScrollIndicator={false}
        >
          <Text style={{
            ...Constants.STYLES.TEXT_TITLE,
            color: theme.FORECOLOR,
          }}>
            {t('Select Language')}
          </Text>
          <Text style={{
            ...Constants.STYLES.TEXT_SUBTITLE,
            color: theme.TERTIARY,
          }}>
            {'Please select your preferred language to facilitate communication.'}
          </Text>
          <View style={{
            marginVertical: Constants.SIZE.S16,
          }}>
            {Constants.DATA.LANGUAGES.map((item) => RenderLanguage(item))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewHeader: {
    paddingTop: 50,
    paddingBottom: 30,
    paddingHorizontal: Constants.SIZE.S16,
  },
  viewContent: {
    paddingVertical: Constants.SIZE.S20,
    borderTopLeftRadius: Constants.SIZE.S20,
    borderTopRightRadius: Constants.SIZE.S20,
  },
  viewFlag: {
    width: 50,
    height: 50,
    borderRadius: Constants.SIZE.S08,
  },
  imageFlag: {
    width: 30,
    height: 30,
    borderRadius: Constants.SIZE.S14,
  },
  viewDetail: {
    paddingHorizontal: Constants.SIZE.S16,
    width: wp('100%') - 80,
    height: 50,
    borderRadius: Constants.SIZE.S08,
  },
});