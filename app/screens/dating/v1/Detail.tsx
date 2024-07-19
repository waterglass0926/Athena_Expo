import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  Easing,
  Animated,
  Image,
  View,
  Text
} from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import { Ionicons } from '@expo/vector-icons';

import Header from '@/components/dating/v1/Header';
import Constants from '@/constants';
import { BAR_HEIGHT, ITEM_SIZE } from '@/constants/styles';

export default class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contentAnimation: new Animated.Value(0)
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setOptions({
      headerLeft: () => (
        <Ionicons
          name='arrow-back'
          size={34}
          onPress={() => navigation.goBack()}
          style={[
            Constants.STYLES.DATING.V1.shadow,
            {
              backgroundColor: 'transparent',
              marginTop: 4,
              marginLeft: 14,
              shadowColor: '#000'
            }
          ]}
          color={'#fff'}
        />
      )
    });
  }

  render() {
    const { route } = this.props;
    const { item } = route.params;
    const contentScale = this.state.contentAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [2, 1]
    });
    const contentTranslate = this.state.contentAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [100, 1]
    });
    const opacityTransition = this.state.contentAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1]
    });

    return (
      <View style={[Constants.STYLES.DATING.V1.container, { paddingTop: BAR_HEIGHT / 2 }]}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <SharedElement
            id={`item.${item.id}.photo`}
            style={{
              height: ITEM_SIZE * 1.3,
              width: ITEM_SIZE * 1.3,
              borderRadius: ITEM_SIZE * 1.3 / 2,
              marginVertical: 10
            }}
            animation='move'
            duration={600}
          >
            <TouchableWithoutFeedback
              hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
              onPress={() => this.props.navigation.goBack()}>
              <Image
                source={{ uri: item.image }}
                style={{
                  height: ITEM_SIZE * 1.3,
                  width: ITEM_SIZE * 1.3,
                  borderRadius: ITEM_SIZE * 1.3 / 2
                }}
              />
            </TouchableWithoutFeedback>
          </SharedElement>
          <Animated.View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              flex: 1,
              transform: [
                { translateY: contentTranslate },
                { scale: contentScale }
              ],
              opacity: opacityTransition
            }}>
            <Text style={[Constants.STYLES.DATING.V1.nameText, { fontSize: 36 }]}>
              {item.name}
            </Text>
            <Text style={[Constants.STYLES.DATING.V1.ageText, { fontSize: 82 }]}>
              {item.age}
            </Text>
            <Text style={[Constants.STYLES.DATING.V1.descriptionText, { fontSize: 24 }]}>
              {item.description}
            </Text>
          </Animated.View>
        </View>
      </View>
    );
  };
};