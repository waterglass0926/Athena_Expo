import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

import Constants from '@/constants';
import Functions from '@/utils';

export const Finish = (props) => {
  const { score, count } = props.route.params;
  const [data, setData] = useState([]);

  const startAgain = () => {
    props.navigation.goBack();
  };

  const anotherPlayer = () => {
    props.navigation.navigate('FamousChoose');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Your score is {score} from {count} !
      </Text>
      {/* <TouchableHighlight style={styles.button} onPress={() => startAgain()} underlayColor='#ccc'>
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableHighlight> */}
      <TouchableHighlight style={styles.button} onPress={() => anotherPlayer()} underlayColor='#ccc'>
        <Text style={styles.buttonText}>Another Player</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5cb860',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 50,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY,
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
    color: '#5cb860',
    fontSize: 16,
    fontFamily: Constants.FONTS.ATHENA.PRIMARY,
  }
});