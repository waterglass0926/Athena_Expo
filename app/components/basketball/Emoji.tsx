import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';

const happy = ['👋', '👌', '👍', '👏', '👐'];
const sad = ['😢', '😓', '😒', '😳', '😭'];
const INITIAL_Y = 5;

class Emoji extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relativeY: new Animated.Value(INITIAL_Y),
      fadeAnim: new Animated.Value(0),
      emoji: '',
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.scored !== null && prevProps.scored === null) {
      if (this.props.scored === true) {
        this.setState({
          emoji: this.getEmoji(true),
        });
      } else {
        this.setState({
          emoji: this.getEmoji(false),
        });
      }

      this.state.relativeY.setValue(INITIAL_Y);

      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 1,
          useNativeDriver: true
        },
      ).start();

      Animated.timing(
        this.state.relativeY,
        {
          toValue: 15,
          useNativeDriver: true
        }
      ).start();
    } else if (this.props.scored === null && prevProps.scored !== null) {
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 0,
          useNativeDriver: true
        }
      ).start();

      Animated.timing(
        this.state.relativeY,
        {
          toValue: 40,
          useNativeDriver: true
        }
      ).start();
    }
  }

  getEmoji(isHappy = true) {
    const min = 0;
    const max = 4;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return isHappy ? happy[random] : sad[random];
  }

  render() {
    return (
      <View style={[styles.emojiContainer, {
        bottom: this.props.y,
        width: 100,
        height: 100,
        left: Dimensions.get('window').width / 2 - 50,
      }]}>
        <Animated.Text style={[{
          fontSize: 35,
          backgroundColor: 'transparent',
          opacity: this.state.fadeAnim,
          // marginBottom: this.state.relativeY,  // Uncomment if needed for animation
        }]}>
          {this.state.emoji}
        </Animated.Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emojiContainer: {
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Emoji;