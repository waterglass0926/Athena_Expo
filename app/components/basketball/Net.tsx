import React, { Component } from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

class Net extends Component {
  render() {
    return (
      <View style={[styles.netContainer, {
        left: this.props.x,
        bottom: this.props.y,
        height: this.props.height,
        width: this.props.width,
      }]}
      />
    );
  };
};

const styles = StyleSheet.create({
  netContainer: {
    position: 'absolute',
    backgroundColor: '#ff260f',
    borderRadius: 3,
  },
});

export default Net;