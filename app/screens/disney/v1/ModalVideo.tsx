import * as React from 'react';
import { Text, View } from 'react-native';
import { ScreenOrientation } from 'expo';

import Constants from '@/constants';

export class ModalVideo extends React.Component {
  componentDidMount() {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.LANDSCAPE);
  };

  componentWillUnmount() {
    ScreenOrientation.allowAsync(ScreenOrientation.Orientation.PORTRAIT_UP);
  };

  render() {
    return (
      <View style={Constants.STYLES.DISNEY.V1.container}>
        <Text style={Constants.STYLES.DISNEY.V1.heading}>Modal :: Video</Text>
      </View>
    );
  };
};