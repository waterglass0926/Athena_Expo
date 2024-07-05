import React, { useState } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

import Constants from '@/constants';
import Functions from '@/utils';

export const Game = (props) => {
  const { questions, count, images } = props.route.params;
  const [start, setStart] = useState(0);
  const [score, setScore] = useState(0);

  const reset = () => {
    setStart(0);
    setScore(0);
  };

  const btnStyle = (btn) => {
    var style = {
      justifyContent: 'center',
      flex: 1,
    };

    if (btn === 0) {
      style.backgroundColor = '#4daf51';
    } else if (btn === 1) {
      style.backgroundColor = '#f9845b';
    } else if (btn === 2) {
      style.backgroundColor = '#9e4d83';
    } else {
      style.backgroundColor = '#3079ab';
    };

    return style;
  };

  const handleAnswer = (answer) => {
    if (count === start + 1) {
      if (questions[start].correct == answer) {
        setScore(score + 1);
      };

      props.navigation.push('FamousFinish', {
        score: score,
        count: count,
      });

      reset();
    };

    if (questions[start].correct == answer) {
      setScore(score + 1);
    };

    setStart(start + 1);
  };

  return (
    <View style={styles.container}>
      <Image source={{
        uri: `${images}/${questions[start]?.image}`
      }} style={styles.image} />
      {questions[start]?.answers.map((answer, index) => (
        <TouchableHighlight
          key={index}
          style={btnStyle(index)}
          onPress={() => handleAnswer(answer?.id)}
          underlayColor='#333'
        >
          <Text style={styles.buttonText}>{answer?.answer}</Text>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 300
  },
  buttonText: {
    color: '#fff',
    alignSelf: 'center',
    fontFamily: Constants.FONTS.ATHENA.PRIMARY,
    fontSize: 16
  }
});