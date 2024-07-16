import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import axios from 'axios';
import { Button, Header } from 'react-native-elements';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';

import { MOVIEDB_API_KEY } from '@env';
import Components from '@/components/movies/v3';

export const Home = (props) => {
  const { theme } = useSelector(state => state.athena);

  const [popularMovies, setPopularMovies] = useState([]);
  const [noOfItems, setNoOfItems] = useState(5);
  const [load, setLoad] = useState(false);
  const [dataloaded, setDataloaded] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${MOVIEDB_API_KEY}&language=en-US&page=${page}`)
      .then(({ data }) => {
        const temp = [...popularMovies, ...data.results];
        setPopularMovies(temp);
        setNoOfItems(temp.length);
      })
      .catch((error) => alert(error));
  }, [page]);

  const renderHeader = () => (
    <View>
      <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle='light-content'
        leftComponent={{ icon: 'person', color: theme.PRIMARY, fontSize: 20 }}
        centerComponent={{
          text: 'DISCOVER',
          style: { color: theme.FORECOLOR, fontSize: 20 },
        }}
        rightComponent={{ icon: 'search', color: theme.PRIMARY, fontSize: 20 }}
        containerStyle={{
          backgroundColor: theme.BACKCOLOR,
          justifyContent: 'space-around',
          height: 100,
          paddingTop: 40,
        }}
      />
      <View style={{ marginTop: 10, padding: 10, backgroundColor: theme.BACKCOLOR }}>
        <Text
          style={{
            marginLeft: 10,
            fontSize: 18,
            fontWeight: '800',
            color: theme.FORECOLOR,
          }}
        >
          Popular movies
        </Text>
      </View>
    </View>
  );

  return (
    <FlatList
      style={[styles.container, { backgroundColor: theme.BACKCOLOR }]}
      data={popularMovies.slice(0, noOfItems)}
      initialNumToRender={5}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      ListHeaderComponent={renderHeader}
      renderItem={({ item }) => (
        <Components.HomeCard
          item={item}
          fontSize={20}
          customprops={props}
          itemid={item.id}
          poster_path={item.poster_path}
          title={item.title}
        />
      )}
      ListFooterComponent={<View style={{ alignItems: 'center', margin: 10 }}>
        <Button
          buttonStyle={{
            width: 100,
            borderRadius: 20,
            backgroundColor: theme.PRIMARY,
            borderColor: theme.BACKCOLOR,
            elevation: 5,
            marginBottom: 16,
          }}
          title='Load more'
          onPress={() => {
            setPage(page + 1);
            // setNoOfItems(popularMovies.length);
            // setLoad(!load);
          }}
        />
      </View>}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
