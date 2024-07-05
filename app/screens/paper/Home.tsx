import React, { useRef, useState, useEffect } from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import Carousel from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

import { cards } from '@/assets/data/paper/cards';
import Components from '@/components/paper';
import Constants from '@/constants';
import { getData, LANGUAGE_KEY } from '@/utils/storage';
import {
  introCardSwitch,
  ghostCardSwitch,
  toolCardSwitch,
} from '@/utils/translate';

const renderCard = (
  item,
  index,
  language,
  setLanguage,
  languageIndex,
  setLanguageIndex,
) => {
  let card = item;
  switch (item.type) {
    case 'intro':
      card = introCardSwitch(item, language);
      return <Components.IntroductionCard name={card.name} desc={card.desc} />;
    case 'ghost':
      card = ghostCardSwitch(item, language);
      return (
        <Components.GhostCard
          name={card.name}
          desc={card.desc}
          strength={card.strength}
          weakness={card.weakness}
          evidence={card.evidence}
          language={language}
        />
      );
    case 'tool':
      card = toolCardSwitch(item, language);
      return <Components.ToolCard name={card.name} desc={card.desc} language={language} />;
    case 'evidence':
      return <Components.EvidenceCard language={language} />;
    case 'timer':
      return <Components.TimerCard language={language} />;
    case 'settings':
      return (
        <Components.SettingsCard
          language={language}
          setLanguage={setLanguage}
          languageIndex={languageIndex}
          setLanguageIndex={setLanguageIndex}
        />
      );
    default:
      return null;
  };
};

export const Home = () => {
  const [language, setLanguage] = useState('en');
  const [languageIndex, setLanguageIndex] = useState(0);
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    getData(LANGUAGE_KEY, setLanguage, setLanguageIndex);
  }, []);

  return (
    <>
      <View style={styles.mainContainer}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={Constants.COLORS.DEFAULT.BLACK}
        />
        <Carousel
          initialNumToRender={cards.length}
          ref={carouselRef}
          data={cards}
          renderItem={({ item, index }) => {
            return renderCard(
              item,
              index,
              language,
              setLanguage,
              languageIndex,
              setLanguageIndex,
            );
          }}
          sliderWidth={wp('100%')}
          itemWidth={wp('100%') / 1.2}
          layout={'default'}
          containerCustomStyle={styles.carouselContainer}
          contentContainerCustomStyle={{ alignSelf: 'center' }}
          onSnapToItem={(index) => {
            setActiveIndex(index);
          }}
          removeClippedSubviews={true}
          firstItem={1}
        />
        <Components.BottomBar
          activeIndex={activeIndex}
          carouselRef={carouselRef}
          language={language}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: Constants.COLORS.DEFAULT.BLACK,
  },
  carouselContainer: {
    display: 'flex',
  },
});