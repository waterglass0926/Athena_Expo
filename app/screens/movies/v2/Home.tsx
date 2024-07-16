import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import tailwind from 'tailwind-react-native-classnames';

import Components from '@/components/movies/v2';
import Constants from '@/constants';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '@/services/apis/movies/v2/moviedb';

const ios = Platform.OS === 'ios';

export function Home() {
  const { theme } = useSelector(state => state.athena);

  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    if (data && data.results) setTrending(data.results);
    setLoading(false)
  };

  const getUpcomingMovies = async () => {
    const data = await fetchUpcomingMovies();
    if (data && data.results) setUpcoming(data.results);
  };

  const getTopRatedMovies = async () => {
    const data = await fetchTopRatedMovies();
    if (data && data.results) setTopRated(data.results);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.BACKCOLOR }}>
      {/* search bar */}
      <SafeAreaView style={{ marginTop: 30 }}>
        <StatusBar style='light' />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: Constants.SIZE.S16 }}>
          <Bars3CenterLeftIcon size='30' strokeWidth={2} color={theme.FORECOLOR} />
          <Text style={{ ...Constants.STYLES.TEXT_HEADER, color: theme.FORECOLOR }}>
            <Text style={Constants.STYLES.MOVIES.V2.text}>M</Text>ovies
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('MoviesV2Search')}>
            <MagnifyingGlassIcon size='30' strokeWidth={2} color={theme.FORECOLOR} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {
        loading ? (
          <Components.Loading />
        ) : (
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
          >
            {/* Trending Movies Carousel */}
            {trending.length > 0 && <Components.TrendingMovies data={trending} />}

            {/* upcoming movies row */}
            {upcoming.length > 0 && <Components.MovieList title='Upcoming' data={upcoming} />}

            {/* top rated movies row */}
            {topRated.length > 0 && <Components.MovieList title='Top Rated' data={topRated} />}
          </ScrollView>
        )
      }
    </View>
  )
};
