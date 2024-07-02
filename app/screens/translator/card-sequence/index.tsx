import React, { useCallback, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DraggableFlatList, { DragEndParams } from 'react-native-draggable-flatlist';

import { StyleSheet, View } from 'react-native';

import { CardSequenceHeader } from './Header';
import { TranslatorCard } from './TranslatorCard';
import Constants from '@/constants';
import { CardSequenceContext } from '@/contexts/translator/CardSequenceContext';
import { TranslatorType } from '@/types/translator';
import { ThemeType } from '@/types/athena';

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const CardSequence = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: StateType) => state.athena);

  const { cardSequence, updateCardSequence } = useContext(CardSequenceContext);

  const onDragEnd = useCallback(
    ({ data }: DragEndParams<TranslatorType>) => {
      updateCardSequence(data);
    },
    [updateCardSequence],
  );

  return (
    <View style={{
      ...styles.container,
      backgroundColor: theme.BACKCOLOR,
    }}>
      <CardSequenceHeader />
      <DraggableFlatList
        data={cardSequence}
        renderItem={props => <TranslatorCard {...props} />}
        keyExtractor={item => item}
        onDragEnd={onDragEnd}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});