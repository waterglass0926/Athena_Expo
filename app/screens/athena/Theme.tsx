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
  TouchableOpacity,
} from 'react-native';

import '@/utils/i18n';
import Components from '@/components/athena';
import Constants from '@/constants';
import Functions from '@/utils';
import { setTheme } from '@/stores/athena';

type PropsType = {
  navigation: any;
};

export const Theme: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();

  const [mode, setMode] = useState('LIGHT');
  const [theme, _setTheme] = useState(Constants.COLORS.THEME[3]);
  const [action, setAction] = useState(Constants.COLORS.ACTION[1]);

  useEffect(() => {
    dispatch(setTheme({
      MODE: mode,
      NAME: action.NAME,
      PRIMARY: action.PRIMARY,
      SECONDARY: action.SECONDARY,
      TERTIARY: action.TERTIARY,
      QUATERNARY: action.QUATERNARY,
      BACKCOLOR: mode === 'LIGHT' ? theme.LIGHT : theme.NIGHT,
      FORECOLOR: mode === 'NIGHT' ? theme.LIGHT : theme.NIGHT,
    }));
  }, [mode, theme, action]);

  const onMode = () => mode === 'LIGHT' ? setMode('NIGHT') : setMode('LIGHT');

  const onNext = () => navigation.navigate('Language');

  const onTheme = (value: any) => _setTheme(value);

  const onAction = (value: any) => setAction(value);

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
          onPress={onMode}
        >
          <Icon
            type='material'
            name={mode === 'NIGHT' ? 'radio-button-checked' : 'radio-button-unchecked'}
            size={Constants.SIZE.S28}
            color={Constants.COLORS.DEFAULT.WHITE}
          />
        </TouchableOpacity>
        <Text style={{
          ...Constants.STYLES.TEXT_HEADER,
          color: Constants.COLORS.DEFAULT.WHITE,
        }}>
          {'MODE & THEME'}
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

  const RenderTheme = (value: any) => {
    return (
      <TouchableOpacity
        key={`theme${value.INDEX}`}
        activeOpacity={0.5}
        onPress={() => onTheme(value)}
        style={{
          ...Constants.STYLES.ALIGN_ROW_SPACE_BETWEEN,
          ...styles.buttonTheme,
          borderColor:
            value.INDEX === theme.INDEX
              ? Constants.COLORS.DEFAULT.BLUE
              : Constants.COLORS.DEFAULT.WHITE,
        }}
      >
        <View style={{
          ...Constants.STYLES.ALIGN_COL_CENTER,
          ...styles.viewTheme,
          borderTopLeftRadius: Constants.SIZE.S08,
          borderBottomLeftRadius: Constants.SIZE.S08,
          backgroundColor: value.LIGHT,
        }}>
          <Icon
            type='material'
            name='check'
            size={Constants.SIZE.S24}
            color={
              (value.INDEX === theme.INDEX && mode === 'LIGHT')
                ? Constants.COLORS.DEFAULT.BLACK
                : value.LIGHT
            }
          />
        </View>
        <View style={{
          ...Constants.STYLES.ALIGN_COL_CENTER,
          ...styles.viewTheme,
          borderTopRightRadius: Constants.SIZE.S08,
          borderBottomRightRadius: Constants.SIZE.S08,
          backgroundColor: value.NIGHT,
        }}>
          <Icon
            type='material'
            name='check'
            size={Constants.SIZE.S24}
            color={
              (value.INDEX === theme.INDEX && mode === 'NIGHT')
                ? Constants.COLORS.DEFAULT.WHITE
                : value.NIGHT
            }
          />
        </View>
      </TouchableOpacity>
    );
  };

  const RenderAction = (value: any) => {
    return (
      <View
        key={`action${value.INDEX}`}
        style={Constants.STYLES.ALIGN_COL_CENTER}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => onAction(value)}
          style={{
            ...Constants.STYLES.ALIGN_COL_CENTER,
            ...styles.buttonAction,
            borderColor:
              value.INDEX == action.INDEX
                ? Constants.COLORS.DEFAULT.BLUE
                : Constants.COLORS.DEFAULT.WHITE,
            backgroundColor: value.PRIMARY,
          }}
        >
          <Icon
            type='material'
            name='check'
            size={Constants.SIZE.S24}
            color={
              value.INDEX === action.INDEX
                ? Constants.COLORS.DEFAULT.WHITE
                : value.PRIMARY
            }
          />
        </TouchableOpacity>
        <Text style={{
          ...Constants.STYLES.TEXT_SUBTITLE,
          marginTop: Constants.SIZE.S04,
          color: action.QUATERNARY,
        }}>
          {value.NAME}
        </Text>
        <Text style={{
          ...Constants.STYLES.TEXT_DESCRIPTION,
          color: action.TERTIARY,
        }}>
          {value.PRIMARY}
        </Text>
      </View>
    );
  };

  return (
    <View style={{
      ...Constants.STYLES.CONTAINER,
      ...Constants.STYLES.ALIGN_COL_FLEX_START,
      backgroundColor: action.PRIMARY,
    }}>
      {RenderHeader()}
      <View style={{
        ...Constants.STYLES.CONTAINER,
        ...styles.viewContent,
        backgroundColor: mode === 'LIGHT' ? theme.LIGHT : theme.NIGHT,
      }}>
        <ScrollView
          key='scroll00'
          contentContainerStyle={Constants.STYLES.CONTENT}
          showsVerticalScrollIndicator={false}
        >
          <Text style={{
            ...Constants.STYLES.TEXT_TITLE,
            color: action.PRIMARY,
          }}>
            {'Theme'}
          </Text>
          <View style={{
            ...Constants.STYLES.ALIGN_ROW_SPACE_BETWEEN,
            flexWrap: 'wrap',
            marginBottom: Constants.SIZE.S16,
          }}>
            {Constants.COLORS.THEME.map((item) => RenderTheme(item))}
          </View>
          <Text style={{
            ...Constants.STYLES.TEXT_TITLE,
            color: action.PRIMARY,
          }}>
            {'Action'}
          </Text>
          <View style={{
            ...Constants.STYLES.ALIGN_ROW_SPACE_AROUND,
            flexWrap: 'wrap',
          }}>
            {Constants.COLORS.ACTION.map((item) => RenderAction(item))}
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
  buttonTheme: {
    marginTop: Constants.SIZE.S12,
    width: wp('43%'),
    borderWidth: Constants.SIZE.S02,
    borderRadius: Constants.SIZE.S08,
  },
  viewTheme: {
    width: '50%',
    height: 50,
  },
  buttonAction: {
    marginTop: Constants.SIZE.S12,
    width: wp('20%'),
    height: 50,
    borderWidth: Constants.SIZE.S02,
    borderRadius: Constants.SIZE.S08,
  },
});