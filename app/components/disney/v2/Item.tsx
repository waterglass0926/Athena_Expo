import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';

import { Card } from './Card';
import { MOVIEDB_API_KEY } from '@env';

export function Item({ discovery, type, setId }) {
  const [cards, setCards] = useState([]);
  const { theme } = useSelector((state) => state.athena);

  useEffect(() => {
    const fetchCard = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/${type}/${discovery}?api_key=${MOVIEDB_API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCards(data.results);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchCard();
  }, [discovery, type]);

  return (
    <>
      <View style={style.container}>
        <View>
          <Text style={[style.discovery, { color: theme.FORECOLOR }]}>{discovery}</Text>
        </View>
        <View>
          <Text style={[style.all, { color: theme.PRIMARY }]}>See all</Text>
        </View>
      </View>
      <ScrollView
        horizontal={true}
        style={style.imageContainer}
        showsHorizontalScrollIndicator={false}
      >
        {cards.map((value) => {
          return <Card value={value} setId={setId} />;
        })}
      </ScrollView>
    </>
  );
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  imageContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  discovery: {
    fontWeight: '500',
    fontSize: 20,
    textTransform: 'capitalize',
  },
  all: {
    fontSize: 15,
  },
});