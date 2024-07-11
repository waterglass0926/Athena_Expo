import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import Constants from '@/constants';

const SvgArrowLeft = ({ active, size }) => (
  <Svg height={size} width={size} viewBox='0 0 24 24'>
    <Path
      d='M10.4 12l5.3-5.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-6 6c-.4.4-.4 1 0 1.4l6 6c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L10.4 12z'
      fill={active ? Constants.COLORS.DISNEY.V1.white : Constants.COLORS.DISNEY.V1.inactiveGrey}
    />
  </Svg>
);

export default React.memo(SvgArrowLeft);
