import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';

import { MaterialIcons } from '@expo/vector-icons';

import { MOVIEDB_API_KEY } from '@env';
import { Card } from '@/components/disney/v2/Card';

export function Detail({ id, type, setId }) {
  const { theme } = useSelector(state => state.athena);
  const [list, setList] = useState(undefined | {});
  const [cast, setCast] = useState([]);
  const [trailer, setTrailer] = useState('');
  const [recommented, setRecommented] = useState([]);

  useEffect(() => {
    //fetch movie details
    const fetchResult = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=${MOVIEDB_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setList(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };

    //fetch cast details
    const fetchCast = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${MOVIEDB_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setCast(data?.cast))
        .catch((err) => {
          console.log(err.message);
        });
    };

    //fetch trailer
    const fetchTrailer = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${MOVIEDB_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setTrailer(data?.results[0]?.key);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    //fetch recommented movies
    const fetchRecommentedMovies = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${MOVIEDB_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setRecommented(data?.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    fetchResult();
    fetchCast();
    fetchTrailer();
    fetchRecommentedMovies();
  }, [id, trailer]);

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.BACKCOLOR }]}>
      <ScrollView>
        <View style={styles.bannerContainer}>
          {list?.backdrop_path ? (
            <ImageBackground
              source={{
                uri: `https://image.tmdb.org/t/p/w500${list?.backdrop_path}`,
              }}
              style={styles.Image}
            />
          ) : (
            <ImageBackground
              source={{
                uri: `https://image.tmdb.org/t/p/w500${list?.poster_path}`,
              }}
              style={styles.Image}
            />
          )}

          <View style={[styles.arrowContainer, { marginTop: 32, marginLeft: 16 }]}>
            <Pressable onPress={() => setId(0)}>
              <MaterialIcons name='arrow-back' size={30} style={{ color: theme.FORECOLOR }} />
            </Pressable>
          </View>
          <View style={styles.playContainer}>
            <MaterialIcons
              name='play-circle-filled'
              size={40}
              style={styles.play}
              color={theme.PRIMARY}
            />
          </View>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, { color: theme.FORECOLOR }]}>{list?.title}</Text>
            {/* <AntDesign name='heart' size={30} style={styles.heart} /> */}
          </View>
          <View style={styles.genresContainer}>
            {list?.genres?.map((value) => {
              return (
                <Text key={value?.id} style={[styles.genres, { color: theme.FORECOLOR }]}>
                  {value?.name}
                </Text>
              );
            })}
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={[styles.descriptionTitle, { color: theme.PRIMARY }]}>About</Text>
          <Text style={[styles.description, { color: theme.FORECOLOR }]}>{list?.overview}</Text>
        </View>
        {!cast ? (
          <></>
        ) : (
          <View style={{ marginLeft: 10, marginTop: 20 }}>
            <Text style={[styles.castTitle, { color: theme.PRIMARY }]}>Cast</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.castContainer}>
                {cast?.map((value) => {
                  return (
                    <View horizontal={true} key={value?.id} style={styles.cast}>
                      <Image
                        source={{
                          uri: `https://image.tmdb.org/t/p/w500${value?.profile_path}`,
                        }}
                        style={styles.profile}
                      />
                      <Text style={[styles.castName, { color: theme.FORECOLOR }]}>{value?.name}</Text>
                    </View>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        )}

        {/* Trailer */}
        {/* <Video
            source={{uri:`https://www.youtube.com/watch?v=${trailer}`}}
            useNativeControls
            style={styles.video}
          /> */}
        {/* <YoutubeIframe
          key={trailer}
         height={300}
          /> */}
        {recommented?.length == 0 ? (
          <></>
        ) : (
          <View style={{ marginLeft: 10 }}>
            <Text style={[styles.castTitle, { color: theme.PRIMARY }]}>Recommented Movies</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.castContainer}>
                {recommented?.map((value) => {
                  return <Card value={value} setId={setId} />;
                })}
              </View>
            </ScrollView>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    flexDirection: 'column',
  },
  Image: {
    width: '100%',
    height: 400,
    opacity: 0.5,
  },
  bannerContainer: {
    position: 'relative',
  },
  arrow: {
    color: 'white',
  },
  play: {
    color: '#0590fa',
    backgroundColor: 'white',
    borderRadius: 100,
  },
  arrowContainer: {
    position: 'absolute',
  },
  playContainer: {
    position: 'absolute',
    left: 160,
    top: 140,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
  },
  titleContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 80,
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  genresContainer: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  genres: {
    color: 'white',
    padding: 5,
    marginLeft: 15,
  },
  heart: {
    color: 'white',
  },
  descriptionContainer: {
    marginLeft: 10,
    marginTop: 15
  },
  descriptionTitle: {
    color: '#0368ff',
    fontSize: 20,
    fontWeight: '500',
  },
  description: {
    color: 'white',
    lineHeight: 25,
  },
  castContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  castTitle: {
    color: '#0368ff',
    fontSize: 20,
    fontWeight: '500',
  },
  cast: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
  },
  profile: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  castName: {
    color: 'white',
    width: 70,
    textAlign: 'center',
    marginTop: 15,
  },
  video: {
    height: 300,
    width: '100%',
    backgroundColor: 'red'
  },
});