import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';
import { RenderItemParams } from 'react-native-draggable-flatlist';

import { Pressable, StyleSheet } from 'react-native';

import Components from '@/components/translator';
import Constants from '@/constants';
import Functions from '@/utils';
import { TranslatorType } from '@/types/translator';
import { ThemeType } from '@/types/athena';

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const TranslatorCard: React.FC<
  RenderItemParams<TranslatorType>
> = props => {
  const { item, drag, isActive } = props;
  const dispatch = useDispatch();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  return (
    <Components.ButtonBase
      style={[
        styles.container,
        { backgroundColor: isActive ? '#ffffff88' : 'transparent' },
      ]}>
      <Components.TypoGraphy style={styles.textItem}>{item.toUpperCase()}</Components.TypoGraphy>
      <Pressable style={styles.buttonIcon} onPressIn={drag}>
        <Icon type='material' name='drag-handle' size={20} color={theme.FORECOLOR} />
      </Pressable>
    </Components.ButtonBase>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 16,
    width: '100%',
    height: 56,
  },
  textItem: {
    fontSize: 16,
  },
  buttonIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
  },
});