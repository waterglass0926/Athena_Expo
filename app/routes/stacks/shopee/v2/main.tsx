import React from 'react';
import Exponent, { Font, Components } from 'exponent';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
  SharedElementOverlay
} from '@exponent/ex-navigation';

import ShopeeV2Routes from './routes';
import styles from '@/components/shopee/v2/theme';

class ShopeeV2Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false
    }
  }

  async componentWillMount() {
    await Font.loadAsync({
      'SkyhookMono': require('@/assets/fonts/shopee/v2/SkyhookMono.ttf')
    });

    this.setState({
      fontLoaded: true
    });
  }

  render() {

    if (!this.state.fontLoaded) {
      return <Components.AppLoading />
    };

    return (
      <View style={[styles.container]}>
        <NavigationProvider router={ShopeeV2Routes}>
          <SharedElementOverlay>
            <StackNavigation
              id='root'
              initialRoute={ShopeeV2Routes.getRoute('ProductList')}
            />
          </SharedElementOverlay>
        </NavigationProvider>
      </View>
    );
  }
};

Exponent.registerRootComponent(ShopeeV2Main);