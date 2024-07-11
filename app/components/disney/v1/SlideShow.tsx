import * as React from 'react';
import Carousel from 'react-native-snap-carousel';

import { ImageSlide } from './ImageSlide';
import Constants from '@/constants';
import Device from '@/utils/device';

const slidesData = [
  { image: 'slideStarWarsMandalorian' },
  { image: 'slideAvengersEndgame' },
  { image: 'slideAvatar' },
  { image: 'slideCaptainMarvel' }
];

export class SlideShow extends React.Component {
  render() {
    const itemWidth = Device.width - 52;

    return (
      <Carousel
        ref={(c) => {
          this.carousel = c;
        }}
        autoplay
        autoplayInterval={5000}
        data={slidesData}
        loop
        renderItem={({ item: { image } }) => (
          <ImageSlide source={Constants.IAMGES.DISNEY.V1[image]} width={itemWidth} />
        )}
        sliderWidth={Device.width}
        itemWidth={itemWidth}
      />
    );
  };
};