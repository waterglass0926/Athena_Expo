import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  Text,
  View,
  Input,
  TextInput,
  StyleSheet,
  Pressable,
  Button,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { MOVIEDB_API_KEY } from '@env';
import { Suggestion } from '@/components/disney/v2/Suggestion';

export function Search({ query, setQuery, setSearchable, setId }) {
  const { theme } = useSelector(state => state.athena);
  const [suggest, setSuggest] = useState([]);

  useEffect(() => {
    const fetchSuggestedMovie = async () => {
      const result = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${MOVIEDB_API_KEY}&query=${query}&page=1&include_adult=false`
      )
        .then((res) => res.json())
        .then((data) => {
          setSuggest(data?.results);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchSuggestedMovie();
  }, [query]);

  return (
    <View style={[styles.container, { backgroundColor: theme.BACKCOLOR, paddingTop: 32 }]}>
      <Pressable onPress={() => setSearchable(false)}>
        <MaterialIcons
          name='arrow-back'
          size={30}
          style={{ color: theme.FORECOLOR, padding: 16 }}
        />
      </Pressable>
      <TextInput
        keyboardType='ascii-capable'
        value={query}
        style={[styles.input, { backgroundColor: theme.BACKCOLOR, borderColor: theme.FORECOLOR, color: theme.FORECOLOR }]}
        placeholder='Search'
        placeholderTextColor={'gray'}
        onChangeText={setQuery}
      />
      {query?.length == 0 ? <Text style={{ color: theme.FORECOLOR, textAlign: 'center', fontSize: 20 }}>Search Latest Movies</Text> :
        <Suggestion suggest={suggest} setId={setId} />
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030729',
  },
  input: {
    height: 60,
    margin: 20,
    padding: 10,
    color: 'white',
    backgroundColor: '#03013d',
    fontSize: 20,
    fontWeight: '500',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'white',
    borderRadius: 45,
  },
});