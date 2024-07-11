import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import Constants from '@/constants';

const SvgHome = ({ active, size }) => (
  <Svg height={size} width={size} viewBox='0 0 36 36'>
    <Path
      d='M26.882 19.414v10.454h-5.974v-5.227h-5.974v5.227H8.961V19.414H5.227L17.921 6.72l12.694 12.694h-3.733z'
      fill={active ? Constants.COLORS.DISNEY.V1.white : Constants.COLORS.DISNEY.V1.inactiveGrey}
    />
  </Svg>
);

export default React.memo(SvgHome);
