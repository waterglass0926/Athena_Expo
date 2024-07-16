import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { XMarkIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import { debounce } from 'lodash';
import tailwind from 'tailwind-react-native-classnames';

import Components from '@/components/movies/v2';
import Constants from '@/constants';
import { fallbackMoviePoster, image185, searchMovies } from '@/services/apis/movies/v2/moviedb';

const { width, height } = Dimensions.get('window');

export function Search() {
  const navigation = useNavigation();
  const { theme } = useSelector(state => state.athena);

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([])

  const handleSearch = search => {
    if (search && search.length > 2) {
      setLoading(true);
      searchMovies({
        query: search,
        include_adult: false,
        language: 'en-US',
        page: '1'
      }).then(data => {
        setLoading(false);
        if (data && data.results) setResults(data.results);
      })
    } else {
      setLoading(false);
      setResults([])
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.BACKCOLOR }}>

      {/* search input */}
      <View
        style={[{ paddingTop: 24 }, tailwind`mx-4 mb-3 flex-row justify-between items-center rounded-full`]} >
        <TextInput
          onChangeText={handleTextDebounce}
          placeholder='Search Movie'
          placeholderTextColor={'lightgray'}
          style={[{ color: theme.FORECOLOR }, tailwind`pb-1 pl-6 flex-1 text-base font-semibold`]}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('MoviesV2Home')}
          style={tailwind`rounded-full p-3 m-1`}
        >
          <XMarkIcon size='25' color={theme.FORECOLOR} />

        </TouchableOpacity>
      </View>

      {/* search results */}
      {
        loading ? (
          <Components.Loading />
        ) :
          results.length > 0 ? (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 15 }}
            >
              <Text style={{ ...Constants.STYLES.TEXT_TITLE, color: theme.FORECOLOR, marginBottom: 16 }}>Results ({results.length})</Text>
              <View style={tailwind`flex-row justify-between flex-wrap`}>
                {
                  results.map((item, index) => {
                    return (
                      <TouchableWithoutFeedback
                        key={index}
                        onPress={() => navigation.push('MoviesV2Movies', item)}>
                        <View style={[tailwind` mb-4`, { alignItems: 'center' }]}>
                          <Image
                            source={{ uri: image185(item.poster_path) || fallbackMoviePoster }}
                            style={[tailwind`rounded-3xl`, { width: width * 0.44, height: height * 0.3 }]}
                          />
                          <Text style={{ ...Constants.STYLES.TEXT_SUBTITLE, color: theme.QUATERNARY }}>
                            {
                              item.title.length > 22 ? item.title.slice(0, 22) + '...' : item.title
                            }
                          </Text>
                        </View>
                      </TouchableWithoutFeedback>
                    )
                  })
                }
              </View>

            </ScrollView>
          ) : (
            <View style={tailwind`flex-row justify-center`}>
              <Image
                source={require('@/assets/images/movies/v2/movieTime.png')}
                style={tailwind`h-96 w-96`}
              />
            </View>
          )
      }
    </SafeAreaView>
  )
};