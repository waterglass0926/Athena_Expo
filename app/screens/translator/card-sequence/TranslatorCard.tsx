import React from 'react';

import { Icon } from 'react-native-elements';
import { RenderItemParams } from 'react-native-draggable-flatlist';

import { Pressable, StyleSheet } from 'react-native';

import Components from '@/components/translator';
import Constants from '@/constants';
import Functions from '@/utils';
import { TranslatorType } from '@/types/translator';

export const TranslatorCard: React.FC<
  RenderItemParams<TranslatorType>
> = props => {
  const { item, drag, isActive } = props;

  return (
    <Components.ButtonBase
      style={[
        styles.container,
        { backgroundColor: isActive ? '#ffffff88' : 'transparent' },
      ]}>
      <Components.TypoGraphy style={styles.text}>{item.toUpperCase()}</Components.TypoGraphy>
      <Pressable style={styles.iconContainer} onPressIn={drag}>
        <Icon type='material' name='drag-handle' size={20} color={Constants.COLORS.DEFAULT.WHITE} />
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
  text: {
    fontSize: 16,
    color: Constants.COLORS.DEFAULT.WHITE,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
  },
});