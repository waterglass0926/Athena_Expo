import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

import tailwind from 'tailwind-react-native-classnames';

import Constants from '@/constants';
import { fallbackPersonImage, image185 } from '@/services/apis/movies/v2/moviedb';

export function Cast({ cast, navigation }) {
  const { theme } = useSelector(state => state.athena);

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ ...Constants.STYLES.TEXT_TITLE, color: theme.FORECOLOR, marginBottom: 16 }}>Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {
          cast && cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('MoviesV2Person', person)}
                style={tailwind`mr-4 items-center`}>
                <View
                  style={[{ borderWidth: 1, borderColor: 'rgb(115 115 115)' }, tailwind`overflow-hidden rounded-full h-20 w-20 items-center`]}>
                  <Image
                    style={tailwind`rounded-2xl h-24 w-20`}
                    // source={require('../assets/images/castImage1.png')} 
                    source={{ uri: image185(person?.profile_path) || fallbackPersonImage }}
                  />
                </View>

                <Text style={tailwind`text-white text-xs mt-1`}>
                  {
                    person?.character.length > 10 ? person.character.slice(0, 10) + '...' : person?.character
                  }
                </Text>
                <Text style={[{ color: theme.FORECOLOR }, tailwind`text-xs`]}>
                  {
                    person?.original_name.length > 10 ? person.original_name.slice(0, 10) + '...' : person?.original_name
                  }
                </Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </View>
  )
};