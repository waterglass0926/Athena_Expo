import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

import Constants from '@/constants';

const findGenre = (ids) => {
  var genres = [];
  for (var i = 0; i <= Constants.DATA.MOVIES.V3.genres.length - 1; i++) {
    for (var j = 0; j <= ids.length - 1; j++) {
      if (parseInt(Constants.DATA.MOVIES.V3.genres[i].id) === ids[j]) {
        genres.push(Constants.DATA.MOVIES.V3.genres[i].name);

      }
    }
  }
  return genres;
};

export const HomeCard = (props) => {
  const { theme } = useSelector(state => state.athena);

  return (
    <TouchableOpacity activeOpacity={0.6}
      onPress={() => props.customprops.navigation.navigate(
        'MoviesV3Details', { item: props.item }
      )}>
      <View style={[styles.container, { backgroundColor: theme.SECONDARY }]}>
        <View style={styles.imageholder}>
          <ImageBackground style={{ width: 100, height: 150, resizeMode: 'cover', position: 'absolute', top: -15, borderRadius: 10, left: 10 }}
            source={{ uri: `https://image.tmdb.org/t/p/w500${props.item.poster_path}` }}
            imageStyle={{ borderRadius: 4 }}
          >
            <View style={{ flex: 1 }}>
              <View style={styles.starrating}>
                <Text style={{ textAlign: 'center', fontWeight: '600', color: Constants.COLORS.DEFAULT.BLACK }}>{props.item.vote_average}</Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.detailholder}>
          <Text style={{ fontWeight: '700', marginTop: 10, color: theme.FORECOLOR }}>{props.item.original_title}</Text>
          <Text style={{ color: theme.TERTIARY, fontWeight: '400', marginTop: 5 }}>{findGenre(props.item.genre_ids).map(
            (item, i) => {
              if (i == props.item.genre_ids.length - 1) {
                return item
              }
              else {
                return item + ' | '
              }
            }
          )}</Text>
          <Text style={{ color: theme.TERTIARY, fontWeight: '400', marginTop: 2 }}>{props.item.release_date}</Text>
        </View>
      </View>
    </TouchableOpacity >
  )
};

const styles = StyleSheet.create({
  container: {
    height: 150,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    borderRadius: 3,
    flexDirection: 'row',

  },
  starrating: {
    position: 'absolute',
    backgroundColor: 'white',
    height: 20,
    bottom: -5,
    left: 30,
    right: 30,
    width: 35,
    borderRadius: 9,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    elevation: 1
  },
  imageholder: {
    flex: 1,
    position: 'relative',
    borderRadius: 3,
  },
  detailholder: {
    flex: 2,
    padding: 5,
  }
});