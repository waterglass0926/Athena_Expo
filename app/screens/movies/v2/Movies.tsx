import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeftIcon, ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import tailwind from 'tailwind-react-native-classnames';

import Components from '@/components/movies/v2';
import Constants from '@/constants';
import { fallbackMoviePoster, fetchMovieCredits, fetchMovieDetails, fetchSimilarMovies, image500 } from '@/services/apis/movies/v2/moviedb';

const ios = Platform.OS == 'ios';
const topMargin = ios ? '' : ' mt-3';
var { width, height } = Dimensions.get('window');

export function Movies() {
  const { theme } = useSelector(state => state.athena);

  const { params: item } = useRoute();
  const navigation = useNavigation();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([])
  const [similarMovies, setSimilarMovies] = useState([])
  const [isFavourite, toggleFavourite] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMovieDetials(item.id);
    getMovieCredits(item.id);
    getSimilarMovies(item.id);
  }, [item]);

  const getMovieDetials = async id => {
    const data = await fetchMovieDetails(id);
    setLoading(false);
    if (data) {
      setMovie({ ...movie, ...data });
    }
  }
  const getMovieCredits = async id => {
    const data = await fetchMovieCredits(id);
    if (data && data.cast) {
      setCast(data.cast);
    }

  }
  const getSimilarMovies = async id => {
    const data = await fetchSimilarMovies(id);
    if (data && data.results) {
      setSimilarMovies(data.results);
    }

  }
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 20 }}
      style={{ flex: 1, backgroundColor: theme.BACKCOLOR }}>

      {/* back button and movie poster */}
      <View style={tailwind`w-full`}>
        <SafeAreaView style={[{ marginTop: 16 }, tailwind`absolute z-20 w-full flex-row justify-between items-center px-4`]}>
          <TouchableOpacity style={[Constants.STYLES.MOVIES.V2.background, tailwind`rounded-xl p-1`]} onPress={() => navigation.goBack()}>
            <ChevronLeftIcon size='28' strokeWidth={2.5} color={Constants.COLORS.DEFAULT.WHITE} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
            <HeartIcon size='35' color={isFavourite ? Constants.COLORS.MOVIES.V2.background : Constants.COLORS.DEFAULT.WHITE} />
          </TouchableOpacity>
        </SafeAreaView>
        {
          loading ? (
            <Components.Loading />
          ) : (
            <View>
              <Image
                // source={require('../assets/images/moviePoster2.png')} 
                source={{ uri: image500(movie.poster_path) || fallbackMoviePoster }}
                style={{ width, height: height * 0.55 }}
              />
              <LinearGradient
                colors={['transparent', 'rgba(23, 23, 23, 0.8)', 'rgba(23, 23, 23, 1)']}
                style={[{ width, height: height * 0.40 }, tailwind`absolute bottom-0`]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
              />
            </View>
          )
        }
      </View>

      {/* movie details */}

      <View style={{ marginTop: -(height * 0.09) }}>
        {/* title */}
        <Text style={[{ ...Constants.STYLES.TEXT_TITLE, color: Constants.COLORS.DEFAULT.WHITE }, tailwind`text-center text-3xl`]}>
          {
            movie?.title
          }
        </Text>

        {/* status, release year, runtime */}
        {
          movie?.id ? (
            <Text style={[{ ...Constants.STYLES.TEXT_DESCRIPTION, color: theme.TERTIARY }, tailwind`font-semibold text-base text-center`]}>
              {movie?.status} • {movie?.release_date?.split('-')[0] || 'N/A'} • {movie?.runtime} min
            </Text>
          ) : null
        }

        {/* genres  */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 4, marginLeft: 2 }}>
          {
            movie?.genres?.map((genre, index) => {
              let showDot = index + 1 != movie.genres.length;
              return (
                <Text key={index} style={[{ ...Constants.STYLES.TEXT_DESCRIPTION, color: theme.QUATERNARY }, tailwind`font-semibold text-base text-center`]}>
                  {genre?.name} {showDot ? '•' : null}
                </Text>
              )
            })
          }
        </View>

        {/* description */}
        <Text style={{ ...Constants.STYLES.TEXT_DESCRIPTION, color: theme.QUATERNARY, padding: 16 }}>
          {
            movie?.overview
          }
        </Text>
      </View>

      {/* cast */}
      {
        movie?.id && cast.length > 0 && <Components.Cast navigation={navigation} cast={cast} />
      }
      {/* similar movies section */}
      {
        movie?.id && similarMovies.length > 0 && <Components.MovieList title={'Similar Movies'} hideSeeAll={true} data={similarMovies} />
      }
    </ScrollView>
  )
};