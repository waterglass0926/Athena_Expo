import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Image, TouchableWithoutFeedback, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import tailwind from 'tailwind-react-native-classnames';

import Constants from '@/constants';
import { image500 } from '@/services/apis/movies/v2/moviedb';

var { width, height } = Dimensions.get('window');

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        // source={require('../assets/images/moviePoster1.png')} 
        source={{ uri: image500(item.poster_path) }}
        style={[{
          width: width * 0.6,
          height: height * 0.4
        }, tailwind`rounded-3xl`]}
      />
    </TouchableWithoutFeedback>
  )
};

export function TrendingMovies({ data }) {
  const navigation = useNavigation();
  const { theme } = useSelector(state => state.athena);

  const handleClick = item => {
    navigation.navigate('MoviesV2Movies', item);
  };

  return (
    <View style={tailwind`mb-8`}>
      <Text style={{ ...Constants.STYLES.TEXT_TITLE, color: theme.FORECOLOR, paddingHorizontal: 16, paddingVertical: 8 }}>Trending</Text>
      <Carousel
        data={data}
        renderItem={({ item }) => <MovieCard handleClick={handleClick} item={item} />}
        firstItem={1}
        // loop={true}
        // inactiveSlideScale={0.86}
        inactiveSlideOpacity={0.60}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: 'flex', alignItems: 'center' }}
      />
    </View>
  )
};