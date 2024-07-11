import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import Constants from '@/constants';

const SvgDownloads = ({ active, fill, size }) => {
  let fillColor = fill;

  if (fillColor === null) {
    fillColor = active ? Constants.COLORS.DISNEY.V1.white : colors.inactiveGrey;
  }

  return (
    <Svg height={size} width={size} viewBox='0 0 20 20'>
      <Path d='M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z' fill={fillColor} />
    </Svg>
  );
};

export default React.memo(SvgDownloads);
