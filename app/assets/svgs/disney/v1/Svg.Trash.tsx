import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import Constants from '@/constants';

const SvgTrash = ({ active, size }) => (
  <Svg height={size} width={size} viewBox='0 0 24 24'>
    <Path
      d='M21 5h-4V4c0-1.7-1.3-3-3-3h-4C8.3 1 7 2.3 7 4v1H3c-.6 0-1 .4-1 1s.4 1 1 1h1v13c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V7h1c.6 0 1-.4 1-1s-.4-1-1-1zM9 4c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v1H9V4zm9 16c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V7h12v13z'
      fill={active ? Constants.COLORS.DISNEY.V1.white : Constants.COLORS.DISNEY.V1.inactiveGrey}
    />
    <Path
      d='M10 10c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1s1-.4 1-1v-6c0-.6-.4-1-1-1zM14 10c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1s1-.4 1-1v-6c0-.6-.4-1-1-1z'
      fill={active ? Constants.COLORS.DISNEY.V1.white : Constants.COLORS.DISNEY.V1.inactiveGrey}
    />
  </Svg>
);

export default React.memo(SvgTrash);
