import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

class Floor extends Component {
  render() {
    return (
      <View style={[styles.floorContainer, { height: this.props.height }]} />
    );
  };
};

const styles = StyleSheet.create({
  floorContainer: {
    backgroundColor: '#F4F4F4',
    position: 'absolute',
    width: Dimensions.get('window').width,
    bottom: 0,
  },
});

export default Floor;