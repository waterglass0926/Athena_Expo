import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import Constants from '@/constants';
import Functions from '@/utils';
import { getQuestions, getImages } from '@/services/apis/famous/main';

export const Choose = (props) => {
  const [data, setData] = useState('');

  const startGame = (level) => {
    getQuestions(level)
      .then((res) => {
        props.navigation.navigate('FamousGame', {
          questions: res,
          count: res.length,
          images: getImages(level)
        });
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Choose Level</Text>
      <TouchableHighlight
        underlayColor='#ccc'
        style={styles.button}
        onPress={() => startGame('easy')}
      >
        <Text style={styles.buttonText}>Easy</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor='#ccc'
        style={styles.button}
        onPress={() => startGame('normal')}
      >
        <Text style={styles.buttonText}>Normal</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor='#ccc'
        style={styles.button}
        onPress={() => startGame('hard')}
      >
        <Text style={styles.buttonText}>Hard</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e59a13',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 50,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY
  },
  button: {
    height: 60,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10
  },
  buttonText: {
    color: '#e59a13',
    fontSize: 16,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY
  }
});