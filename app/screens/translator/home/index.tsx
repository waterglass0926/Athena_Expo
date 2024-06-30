import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Keyboard, ScrollView, StyleSheet, View } from 'react-native';

import { HomeHeader } from './Header';
import { HomeInput } from './Input';
import { LanguageSelector } from './LanguageSelector';
import { RecentCard } from './RecentCard';
import { TranslatedCard } from './TranslatedCard';
import Constants from '@/constants';
import { TranslateContext } from '@/contexts/translator/TranslateContext';
import { HistoryContext } from '@/contexts/translator/HistoryContext';
import { CardSequenceContext } from '@/contexts/translator/CardSequenceContext';
import { ThemeType } from '@/types/athena';

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const Home = () => {
  const dispatch = useDispatch();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  const { scrollViewRef } = useContext(TranslateContext);
  const { historys } = useContext(HistoryContext);
  const { cardSequence } = useContext(CardSequenceContext);
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={{
      ...styles.container,
      backgroundColor: theme.BACKCOLOR
    }}>
      <HomeHeader />
      <LanguageSelector />
      <ScrollView
        ref={scrollViewRef}
        style={{ paddingHorizontal: 16, backgroundColor: theme.BACKCOLOR }}
        overScrollMode='never'
        showsVerticalScrollIndicator={false}>
        <HomeInput />
        {cardSequence.map(translatorType => (
          <TranslatedCard
            key={translatorType}
            translatorType={translatorType}
          />
        ))}
        {!!historys.length && <RecentCard {...historys[0]} />}
        <View style={{ height: bottom + 56 + 48 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.SIZE.S48
  },
});