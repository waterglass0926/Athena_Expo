import React, { useEffect, useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';
import { snapToItem } from 'react-native-snap-carousel';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Constants from '@/constants';
import { labelSwitch } from '@/utils/translate';

const INTRO_INDEX = 1;
const GHOST_INDEX = 5;
const TOOLS_INDEX = 25;
const EVIDENCE_INDEX = 34;

export const BottomBar = ({ carouselRef, activeIndex, language }) => {
  const labels = labelSwitch(language);
  const [currSection, setCurrSection] = useState(0);

  useEffect(() => {
    if (
      carouselRef.current.currentIndex >= 0 &&
      carouselRef.current.currentIndex < GHOST_INDEX
    ) {
      setCurrSection(1);
    } else if (
      carouselRef.current.currentIndex < TOOLS_INDEX &&
      carouselRef.current.currentIndex >= GHOST_INDEX
    ) {
      setCurrSection(2);
    } else if (
      carouselRef.current.currentIndex < EVIDENCE_INDEX &&
      carouselRef.current.currentIndex >= TOOLS_INDEX
    ) {
      setCurrSection(3);
    } else {
      setCurrSection(4);
    }
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          setCurrSection(1);
          carouselRef.current.snapToItem(INTRO_INDEX);
        }}>
        <Icon
          type='font-awesome-5'
          name='info-circle'
          style={{
            ...styles.icon,
            color: currSection == 1 ? Constants.COLORS.PAPER.PRIMARY : Constants.COLORS.DEFAULT.WHITE,
          }}
          size={wp('100%') / 20}
        />
        <Text
          style={{
            ...styles.iconFooter,
            color: currSection == 1 ? Constants.COLORS.PAPER.PRIMARY : Constants.COLORS.DEFAULT.WHITE,
          }}>
          {labels.introduction}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          setCurrSection(2);
          carouselRef.current.snapToItem(GHOST_INDEX);
        }}>
        <Icon
          type='font-awesome-5'
          name='ghost'
          style={{
            ...styles.icon,
            color: currSection == 2 ? Constants.COLORS.PAPER.PRIMARY : Constants.COLORS.DEFAULT.WHITE,
          }}
          size={wp('100%') / 20}
        />
        <Text
          style={{
            ...styles.iconFooter,
            color: currSection == 2 ? Constants.COLORS.PAPER.PRIMARY : Constants.COLORS.DEFAULT.WHITE,
          }}>
          {labels.ghosts}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          setCurrSection(3);
          carouselRef.current.snapToItem(TOOLS_INDEX);
        }}>
        <Icon
          type='font-awesome-5'
          name='tools'
          style={{
            ...styles.icon,
            color: currSection == 3 ? Constants.COLORS.PAPER.PRIMARY : Constants.COLORS.DEFAULT.WHITE,
          }}
          size={wp('100%') / 20}
        />
        <Text
          style={{
            ...styles.iconFooter,
            color: currSection == 3 ? Constants.COLORS.PAPER.PRIMARY : Constants.COLORS.DEFAULT.WHITE,
          }}>
          {labels.tools}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => {
          setCurrSection(4);
          carouselRef.current.snapToItem(EVIDENCE_INDEX);
        }}>
        <Icon
          type='font-awesome-5'
          name='angle-double-right'
          style={{
            ...styles.icon,
            color: currSection == 4 ? Constants.COLORS.PAPER.PRIMARY : Constants.COLORS.DEFAULT.WHITE,
          }}
          size={wp('100%') / 20}
        />
        <Text
          style={{
            ...styles.iconFooter,
            color: currSection == 4 ? Constants.COLORS.PAPER.PRIMARY : Constants.COLORS.DEFAULT.WHITE,
          }}>
          {labels.evidence}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: wp('100%'),
    height: hp('100%') / 16,
    backgroundColor: Constants.COLORS.PAPER.SECONDARY,
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: Constants.COLORS.DEFAULT.WHITE,
  },
  iconFooter: {
    fontFamily: Constants.FONTS.PAPER.UBUNTU.REGULAR,
    color: Constants.COLORS.DEFAULT.WHITE,
  },
});