/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';

export class Star extends Component {
  static defaultProps = {
    value: '35',
    width: 12,
    height: 12
  };

  constructor(props) {
    super(props);
  };

  _starsRander = (props) => {
    const { value, width, height } = props;
    const results = [];
    let flag = true;
    if (value == '00') {
      return <Text style={styles.smallFont}>暂无评分</Text>;
    };

    for (var i = 0; i < 5; i++) {
      if (i < value[0]) {
        results.push(<Image key={i} style={{ width: width, height: height }} source={require('@/assets/images/movies/v1/star-full.png')} />);
      } else {
        if (flag && value[1] == '5') {
          flag = false;
          results.push(<Image key={i} style={{ width: width, height: height }} source={require('@/assets/images/movies/v1/star-half.png')} />);

        } else {
          results.push(<Image key={i} style={{ width: width, height: height }} source={require('@/assets/images/movies/v1/star-empty.png')} />);
        }
      }
    }
    return results;
  };

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        {this._starsRander(this.props)}
      </View>
    );
  }
};


const styles = StyleSheet.create({
  smallFont: {
    lineHeight: 20,
    color: '#A6A6A6',
    fontSize: 12
  },
  star: {
    marginRight: 2,
  }
});
