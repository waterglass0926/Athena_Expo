import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';
import { Button } from 'react-native-elements';
import { Rating } from 'react-native-ratings';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';

import { MOVIEDB_API_KEY } from '@env';
import Components from '@/components/movies/v3';
import Constants from '@/constants';

const findGenre = (ids) => {
  var genres = [];
  for (var i = 0; i <= Constants.DATA.MOVIES.V3.length - 1; i++) {
    for (var j = 0; j <= ids.length - 1; j++) {
      if (parseInt(Constants.DATA.MOVIES.V3[i].id) === ids[j]) {
        genres.push(Constants.DATA.MOVIES.V3[i].name);
      }
    }
  };
  return genres;
};

export const Details = (props) => {
  const { theme } = useSelector(state => state.athena);

  const [movie, setMovie] = useState([]);
  const [noOfItems, setNoOfItems] = useState(5);
  const [load, setLoad] = useState(false);
  const [dataloaded, setDataloaded] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.route.params.item.id}/credits?api_key=${MOVIEDB_API_KEY}`
      )
      .then(({ data }) => {
        setMovie(data.cast);
        setDataloaded(true);
      })
      .catch((error) => alert(error));
  }, []);

  const { navigation } = props;
  const item = props.route.params.item;
  var load1 = null;

  if (!load && dataloaded) {
    load1 = (
      <Button
        buttonStyle={{
          width: 100,
          marginLeft: 5,
          borderRadius: 20,
          backgroundColor: theme.PRIMARY,
          borderColor: theme.BACKCOLOR,
          elevation: 5,
        }}
        title='Load more'
        onPress={() => {
          setNoOfItems(movie.length);
          setLoad(!load);
        }}
      />
    );
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: theme.BACKCOLOR }]}>
      <ImageBackground
        style={{ width: '100%', height: '100%' }}
        imageStyle={{ resizeMode: 'cover', backgroundColor: 'black', opacity: 0.7, height: 300 }}
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }}
      >
        <View style={{
          flex: 1,
          alignItems: 'center',
          // justifyContent: 'center',
          marginTop: 200
        }}>
          <View style={[styles.cardView, { backgroundColor: Constants.COLORS.DEFAULT.WHITE }]}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.imageholder}>
                <ImageBackground style={{ width: 100, height: 150, resizeMode: 'cover', position: 'absolute', top: -25, borderRadius: 10, left: 20 }}
                  source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                  imageStyle={{ borderRadius: 4 }}
                >
                </ImageBackground>
              </View>
              <View style={styles.detailholder}>
                <Text style={{ marginTop: 16, fontWeight: '900', fontSize: 20, color: Constants.COLORS.DEFAULT.BLACK, textAlign: 'left' }}>{item.title}</Text>
                <View style={{ alignItems: 'flex-start', marginTop: 5 }}>
                  <Rating
                    type='star'
                    ratingCount={5}
                    imageSize={15}
                    startingValue={item.vote_average / 2}
                    showRating={false}
                    readonly={true}
                  />
                </View>
                <Text style={{ color: Constants.COLORS.DEFAULT.GRAY, marginTop: 5 }}>{item.vote_count} Ratings</Text>
                <Text style={{ color: Constants.COLORS.DEFAULT.GRAY, fontWeight: '400', marginTop: 3 }}>{findGenre(item.genre_ids).map(
                  (itm, i) => {
                    if (item.genre_ids != undefined) {
                      if (i == item.genre_ids.length - 1) {
                        return itm
                      }
                      else {
                        return itm + ' | '
                      }
                    }
                  }

                )}</Text>
              </View>
            </View>
            <View style={{ marginTop: 24 }}>
              <Text style={[styles.overview, { color: Constants.COLORS.DEFAULT.GRAY }]}>{item.overview}</Text>
            </View>
            <View style={{ margin: 12, flexDirection: 'row', alignItems: 'center' }}>
              <FlatList
                data={movie.splice(0, noOfItems)}
                horizontal={true}
                initialNumToRender={4}
                ItemSeparatorComponent={() => <View style={{ width: 6, height: '100%', backgroundColor: 'white' }} />}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(({ item }) => <Components.CardView item={null} fontSize={16} details={true} itemid={item.cast_id} poster_path={item.profile_path} title={item.name} />)}
              />
              {/* <View style={{ alignItems: 'center' }}>
                {load1}
              </View> */}
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  test: {
    borderWidth: 5,
    borderColor: 'red',
  },
  overview: {
    padding: 4,
    margin: 5,
    fontSize: 14,
    fontWeight: '400',
    color: '#7a7a7a',
  },
  cardView: {
    backgroundColor: 'white',
    width: '93%',
    borderRadius: 5,
  },
  imageholder: {
    flex: 1,
    position: 'relative',
    borderRadius: 3,
    borderColor: 'red',
  },
  detailholder: {
    flex: 2,
    marginLeft: 10,
  },
});