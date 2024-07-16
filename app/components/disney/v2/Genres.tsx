import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import { MOVIEDB_API_KEY, MOVIEDB_ACCESS_TOKEN } from '@env';

export function Genres({ type }) {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState('');
  const { theme } = useSelector((state) => state.athena);

  useEffect(() => {
    const fetchGenres = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${MOVIEDB_API_KEY}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${MOVIEDB_ACCESS_TOKEN}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setGenres(data.genres);
        })
        .catch((err) => {
          setError(err.message);
        });
    };
    fetchGenres();
  }, [type]);

  return (
    <ScrollView horizontal={true} style={styles.container}>
      {genres.map((value) => {
        return (
          <Text style={[styles.text, { color: theme.FORECOLOR }]} key={value.id}>
            {value.name}
          </Text>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  text: {
    padding: 20,
    fontSize: 18,
  },
});