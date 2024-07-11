import * as React from 'react';
import { Image } from 'react-native';

import Device from '@/utils/device';

export class ImageSlide extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      width: 0
    };
  }

  componentDidMount() {
    const { source, width: imageWidth } = this.props;

    if (source) {
      const { height, width } = Image.resolveAssetSource(source);
      const responsiveHeight = Math.round((imageWidth * height) / width);

      this.setState({
        height: responsiveHeight,
        width: imageWidth
      });
    };
  };

  render() {
    const { source } = this.props;
    const { height, width } = this.state;

    return <Image source={source} style={{ height, width }} />;
  };
};