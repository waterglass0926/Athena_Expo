import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Toast from 'react-native-toast-message';

import {
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  View,
} from 'react-native';

import { populars } from '@/assets/data/fitness/v1/populars';
import { trainers } from '@/assets/data/fitness/v1/traniers';
import Athena from '@/components/athena';
import Components from '@/components/fitness/v1';
import Constants from '@/constants';
import Functions from '@/utils';
import { getWorkouts } from '@/stores/fitness/v1/main';

export const Home = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);
  const { workouts } = useSelector(state => state.fitnessV1Main);

  useEffect(() => {
    dispatch(getWorkouts({}));
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.BACKCOLOR }]}>
      <StatusBar barStyle='light-content' />

      <Athena.Header
        mode
        search
        title='Athena Hein'
        onHome={() => props.navigation.popToTop()}
        onSearch={() => Toast.show({ type: 'success', text1: 'Got To', text2: 'Search' })}
      />

      <ScrollView
        key='scroll00'
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Components.Status
          onPress={() => Toast.show({ type: 'success', text1: 'Go To', text2: 'All Status' })}
        />

        <Athena.Title
          key='title01'
          title='Continue Workout'
          seeAll
          onPress={() => Toast.show({ type: 'success', text1: 'See All', text2: 'Continue Workout' })}
        />
        <ScrollView
          key='scroll01'
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {workouts.map((item, index) => (
            <Components.Workout
              key={`workout_${index}`}
              item={item}
              onPress={() => Toast.show({ type: 'success', text1: 'Category', text2: item.title })}
            />
          ))}
        </ScrollView>

        <Image
          key='image02'
          source={Constants.IAMGES.FITNESS.V1.F100}
          style={styles.imageFirst}
          blurRadius={30}
        />

        <Athena.Title
          key='title02'
          title='Popular Workout'
          seeAll
          onPress={() => Toast.show({ type: 'success', text1: 'See All', text2: 'Popular Workout' })}
        />
        <ScrollView
          key='scroll02'
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {populars.map((item, index) => (
            <Components.Popular
              key={`popular${index}`}
              item={item}
              onPress={() => Toast.show({ type: 'success', text1: 'Category', text2: item.title })}
            />
          ))}
        </ScrollView>

        <Athena.Title
          key='title03'
          title='Featured Trainers'
          seeAll
          onPress={() => Toast.show({ type: 'success', text1: 'See All', text2: 'Featured Trainers' })}
        />
        <ScrollView
          key='scroll03'
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {trainers.map((item, index) => (
            <Components.Trainer
              key={`trainer${index}`}
              item={item}
              onPress={() => Toast.show({ type: 'success', text1: 'Category', text2: item.name })}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    width: wp('100%'),
    padding: 16
  },
  imageFirst: {
    marginTop: 16,
    width: '100%',
    height: 150,
    borderRadius: 16,
    shadowColor: Constants.COLORS.DEFAULT.BLACK,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    opacity: 0.9
  }
});