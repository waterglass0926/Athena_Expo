import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ScrollView, TouchableWithoutFeedback, Image, Dimensions, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import tailwind from 'tailwind-react-native-classnames';

import Constants from '@/constants';
import { fallbackMoviePoster, image185 } from '@/services/apis/movies/v2/moviedb';

const { width, height } = Dimensions.get('window');

export function MovieList({ title, hideSeeAll, data }) {
  const navigation = useNavigation();
  const { theme } = useSelector(state => state.athena);

  return (
    <View style={[{ marginTop: 4 }, tailwind`mb-8`]}>

      <View style={[{ paddingHorizontal: 16 }, tailwind`flex-row justify-between items-center`]}>
        <Text style={{ ...Constants.STYLES.TEXT_TITLE, color: theme.FORECOLOR }}>{title}</Text>
        {
          !hideSeeAll && (
            <TouchableOpacity>
              <Text style={[{ color: theme.PRIMARY }, tailwind`text-lg`]}>See All</Text>
            </TouchableOpacity>
          )
        }
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 16, paddingHorizontal: 16 }}
      >
        {
          data.map((item, index) => {
            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation.push('MoviesV2Movies', item)}
              >
                <View style={[{ marginTop: 1, alignItems: 'center' }, tailwind`mr-4`]}>
                  <Image
                    source={{ uri: image185(item.poster_path) || fallbackMoviePoster }}
                    style={[tailwind`rounded-3xl`, { width: width * 0.33, height: height * 0.22 }]}
                  />
                  <Text style={[Constants.STYLES.TEXT_SUBTITLE, { color: theme.FORECOLOR }, tailwind`ml-1`]}>
                    {
                      item.title.length > 14 ? item.title.slice(0, 14) + '...' : item.title
                    }
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            )
          })
        }
      </ScrollView>
    </View >
  )
};