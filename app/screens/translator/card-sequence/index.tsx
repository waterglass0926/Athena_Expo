import React, { useCallback, useContext } from 'react';

import DraggableFlatList, { DragEndParams } from 'react-native-draggable-flatlist';

import { StyleSheet, Text, View } from 'react-native';

import { CardSequenceHeader } from './Header';
import { TranslatorCard } from './TranslatorCard';
import Constants, { STATUSBAR_HEIGHT } from '@/constants';
import { CardSequenceContext } from '@/contexts/translator/CardSequenceContext';
import { TranslatorType } from '@/types/translator';

export const CardSequence = () => {
  const { cardSequence, updateCardSequence } = useContext(CardSequenceContext);

  const onDragEnd = useCallback(
    ({ data }: DragEndParams<TranslatorType>) => {
      updateCardSequence(data);
    },
    [updateCardSequence],
  );

  return (
    <View style={styles.container}>
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
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: Constants.COLORS.DEFAULT.RED,
  },
});