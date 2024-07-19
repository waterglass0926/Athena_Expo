import React from 'react';
import Svg, { Stop, Defs, LinearGradient, G, Use, Ellipse } from 'react-native-svg';
import { Dimensions } from 'react-native';

import ConstantsForDatingV1 from '@/constants';
import { BAR_HEIGHT } from '@/constants/styles';

const { height, width } = Dimensions.get('window');

export default TopHeader = () => {
  return (
    <Svg height={BAR_HEIGHT} width={width} style={ConstantsForDatingV1.STYLES.DATING.V1.headerShadow}>
      <Defs>
        <LinearGradient id='grad' x1='0%' y1='0%' x2='0%' y2='100%'>
          <Stop offset='0' stopColor='#FF0EE5' stopOpacity='1' />
          <Stop offset='1' stopColor='#FF0088' stopOpacity='1' />
        </LinearGradient>
        <G id='shape'>
          <G>
            <Ellipse
              cx={width / 2}
              cy='0'
              rx={100 + width / 2}
              ry={BAR_HEIGHT}
            />
          </G>
        </G>
      </Defs>
      <Use href='#shape' x='0' y='0' fill='url(#grad)' />
    </Svg>
  );
};