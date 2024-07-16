import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Image, TouchableOpacity, Platform, Dimensions, ScrollView } from 'react-native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { HeartIcon } from 'react-native-heroicons/solid';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import tailwind from 'tailwind-react-native-classnames';

import Components from '@/components/movies/v2';
import Constants from '@/constants';
import { fallbackPersonImage, fetchPersonDetails, fetchPersonMovies, image185, image342, image500 } from '@/services/apis/movies/v2/moviedb';

const ios = Platform.OS == 'ios';
const verticalMargin = ios ? '' : ' my-3';
var { width, height } = Dimensions.get('window');

export function Person() {
  const { params: item } = useRoute();
  const { theme } = useSelector(state => state.athena);

  const [isFavourite, toggleFavourite] = useState(false);
  const navigation = useNavigation();
  const [person, setPerson] = useState({});
  const [personMovies, setPersonMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getPersonDetails(item.id);
    getPersonMovies(item.id);
  }, [item]);

  const getPersonDetails = async id => {
    const data = await fetchPersonDetails(id);
    setLoading(false);
    if (data) {
      setPerson(data);
    }
  }
  const getPersonMovies = async id => {
    const data = await fetchPersonMovies(id);
    if (data && data.cast) {
      setPersonMovies(data.cast);
    }

  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.BACKCOLOR }}
      contentContainerStyle={{ paddingVertical: 16 }}>
      {/* back button */}
      <SafeAreaView
        style={tailwind`flex-row justify-between items-center mx-4 z-10 ${verticalMargin}`}>
        <TouchableOpacity style={[Constants.COLORS.MOVIES.V2.background, tailwind`rounded-xl p-1`]} onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size='28' strokeWidth={2.5} color={theme.FORECOLOR} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleFavourite(!isFavourite)}>
          <HeartIcon size='35' color={isFavourite ? theme.PRIMARY : theme.FORECOLOR} />
        </TouchableOpacity>
      </SafeAreaView>

      {/* person details */}
      {
        loading ? (
          <Components.Loading />
        ) : (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                shadowColor: 'gray',
                shadowRadius: 40,
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 1,
              }}
            >
              <View
                style={[{ borderColor: theme.QUATERNARY }, tailwind`items-center rounded-full overflow-hidden h-72 w-72 border-2`]}>
                <Image
                  source={{ uri: image342(person?.profile_path) || fallbackPersonImage }}
                  style={{ height: height * 0.43, width: width * 0.74 }}
                />
              </View>
            </View>

            <View style={tailwind`mt-6`}>
              <Text style={[{ ...Constants.STYLES.TEXT_TITLE, color: theme.FORECOLOR }, tailwind`text-3xl text-center`]}>
                {/* Keanu Reeves */}
                {person?.name}
              </Text>
              <Text style={[{ ...Constants.STYLES.TEXT_SUBTITLE, color: theme.TERTIARY }, tailwind`text-base text-center`]}>
                {person?.place_of_birth}
                {/* Beirut, Lebanon */}
              </Text>
            </View>

            <View style={[{ backgroundColor: theme.TERTIARY }, tailwind`mx-3 p-4 mt-6 flex-row justify-between items-center rounded-full `]}>
              <View style={tailwind`border-r-2 px-2 items-center`}>
                <Text style={{ color: theme.FORECOLOR }}>Gender</Text>
                <Text style={[{ ...Constants.STYLES.TEXT_DESCRIPTION, color: theme.QUATERNARY }, tailwind`text-sm`]}>
                  {/* Male */}
                  {
                    person?.gender == 1 ? 'Female' : 'Male'
                  }
                </Text>
              </View>
              <View style={tailwind`border-r-2 px-2 items-center`}>
                <Text style={{ color: theme.FORECOLOR }}>Birthday</Text>
                <Text style={[{ ...Constants.STYLES.TEXT_DESCRIPTION, color: theme.QUATERNARY }, tailwind`text-sm`]}>
                  {/* 1964-09-02 */}
                  {person?.birthday}
                </Text>
              </View>
              <View style={tailwind`border-r-2 px-2 items-center`}>
                <Text style={{ color: theme.FORECOLOR }}>known for</Text>
                <Text style={[{ ...Constants.STYLES.TEXT_DESCRIPTION, color: theme.QUATERNARY }, tailwind`text-sm`]}>
                  {/* Acting */}
                  {person?.known_for_department}
                </Text>
              </View>
              <View style={tailwind`px-2 items-center`}>
                <Text style={{ color: theme.FORECOLOR }}>Popularity</Text>
                <Text style={[{ ...Constants.STYLES.TEXT_DESCRIPTION, color: theme.QUATERNARY }, tailwind`text-sm`]}>
                  {/* 84.23 % */}
                  {person?.popularity?.toFixed(2)} %
                </Text>
              </View>

            </View>
            <View style={tailwind`my-6 mx-4`}>
              <Text style={{ ...Constants.STYLES.TEXT_TITLE, color: theme.FORECOLOR, marginBottom: 16 }}>Biography</Text>
              <Text style={[{ ...Constants.STYLES.TEXT_DESCRIPTION, color: theme.QUATERNARY }, tailwind`text-sm`]}>
                {
                  person?.biography ? person.biography : 'N/A'
                }
              </Text>
            </View>

            {/* person movies */}
            {person?.id && personMovies.length > 0 && <Components.MovieList title='Movies' hideSeeAll={true} data={personMovies} />}

          </View>
        )
      }
    </ScrollView >
  )
}