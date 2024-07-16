import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View, StyleSheet, Pressable } from 'react-native';

export function Category({ setType }) {
  const [activeMovie, setActiveMovie] = useState(true);
  const [activeTv, setActiveTv] = useState(false);
  const { theme } = useSelector((state) => state.athena);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setType('movie');
          setActiveMovie(true);
          setActiveTv(false);
        }}
      >
        {activeMovie ? (
          <Text style={[styles.text, styles.onActive, { backgroundColor: theme.PRIMARY }]}>MOVIES</Text>
        ) : (
          <Text style={[styles.text, { color: theme.FORECOLOR }]}>MOVIES</Text>
        )}
      </Pressable>
      <Pressable
        onPress={() => {
          setType('tv');
          setActiveTv(true);
          setActiveMovie(false);
        }}
      >
        {activeTv ? (
          <Text style={[styles.text, styles.onActive, { backgroundColor: theme.PRIMARY }]}>TV</Text>
        ) : (
          <Text style={[styles.text, { color: theme.FORECOLOR }]}>TV</Text>
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  onActive: {
    // backgroundColor: '#151330',
    paddingHorizontal: 100,
    borderRadius: 10,
    paddingVertical: 10,
  },
});