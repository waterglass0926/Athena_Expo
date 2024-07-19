import React, { useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

import Constants from '@/constants';
import { BAR_HEIGHT } from '@/constants/styles';

var { height, width } = Dimensions.get('window');

export default Header = (props) => {

  const { title, subtitle } = props;

  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: BAR_HEIGHT * 0.67,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 8,
        flexWrap: 'nowrap'
      }}>
      <Text
        style={[
          Constants.STYLES.DATING.V1.shadow,
          Constants.STYLES.DATING.V1.largeHeading,
          { height: 34, lineHeight: 34 }
        ]}>
        {title}
      </Text>
      {subtitle
        ? <Text style={[Constants.STYLES.DATING.V1.shadow, Constants.STYLES.DATING.V1.smallHeading]}>
          {subtitle}
        </Text>
        : null}
    </View>
  );
}