import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';

import Constants from '@/constants';
import Functions from '@/utils';

export const Welcome = (props) => {
  const [player, setPlayer] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setError('');
    setPlayer(event.nativeEvent.text);
  };

  const handleSubmit = () => {
    setIsLoading(true);

    var temp = player;
    setPlayer('');

    if (!temp) {
      setError('Player name is required');
      setIsLoading(false);
    } else {
      props.navigation.navigate('FamousChoose', {
        player: temp
      });
      setError('');
      setIsLoading(false);
    };
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Guess Famous People</Text>
      <TextInput
        style={styles.playerInput}
        value={player}
        onChange={(event) => handleChange(event)}
        placeholder='Type Your Name'
        placeholderTextColor='#fff'
        maxLength={20}
      />
      <TouchableHighlight
        underlayColor='#ccc'
        style={styles.button}
        onPress={() => handleSubmit()}>
        <Text style={styles.buttonText}>Start Game</Text>
      </TouchableHighlight>
      {error ? <View style={styles.errorContainer}><Text style={styles.error}>{error}</Text></View> : <View></View>}
      <ActivityIndicator
        animating={isLoading}
        color='#fff'
        size='large'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7d669e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 50,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY,
  },
  playerInput: {
    height: 60,
    padding: 10,
    fontSize: 18,
    color: '#fff',
    borderWidth: 2,
    borderColor: '#fff',
    margin: 10,
    borderRadius: 10
  },
  button: {
    height: 60,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#7d669e',
    fontSize: 16,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY,
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    margin: 10,
    borderRadius: 10,
    height: 60,
    backgroundColor: '#e15258',
  },
  error: {
    color: '#fff',
    fontSize: 14,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY,
  }
});