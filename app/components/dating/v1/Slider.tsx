import React, { useState, useEffect } from 'react';
import {
  Alert,
  TouchableWithoutFeedback,
  Dimensions,
  View,
  Text,
  Animated,
  Easing,
  Image,
  ScrollView
} from 'react-native';

import { SharedElement } from 'react-navigation-shared-element';

import ITEMS from '@/assets/data/dating/v1/data';
import Constants from '@/constants';
import { BAR_HEIGHT, EMPTY_ITEM_SIZE, ITEM_SIZE } from '@/constants/styles';

var { height, width } = Dimensions.get('window');

export default Slider = (props) => {
  const _placeHeaderGroups = {};
  const _rowAnimations = {};
  const [scrollX, setScrollX] = useState(new Animated.Value(0));

  const onItemClick = (item, index) => {
    props.navigation.push('DatingV1Detail', {
      item
    });
  }

  const renderItem = (item, i) => {
    console.log(item)
    _rowAnimations[i] = new Animated.Value(0);

    let inputRange = [
      (i - 2) * ITEM_SIZE,
      (i - 1) * ITEM_SIZE,
      i * ITEM_SIZE,
      (i + 1) * ITEM_SIZE
    ];

    if (!item) {
      return <View key={i} style={{ width: EMPTY_ITEM_SIZE / 2 }} />;
    };

    const { image, name, age, description } = item;

    return (
      <TouchableWithoutFeedback
        hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
        onPress={() => onItemClick(item, i)}
        key={i}>
        <Animated.View
          style={[
            {
              transform: [
                {
                  scale: scrollX.interpolate({
                    inputRange: inputRange,
                    outputRange: [0.7, 1, 0.7, 1],
                    extrapolate: 'clamp'
                  })
                },
                {
                  translateY: _rowAnimations[i].interpolate({
                    inputRange: [-1, 0, 1],
                    outputRange: [-200, 0, 200]
                  })
                }
              ]
            }
          ]}>
          <SharedElement id={`item.${item.id}.photo`}>
            {animation => (
              <Animated.View
                style={[
                  Constants.STYLES.DATING.V1.headerShadow,
                  {
                    shadowRadius: 15,
                    shadowOffset: { width: 0, height: 6 },
                    shadowOpacity: 0.2,
                    height: ITEM_SIZE,
                    width: ITEM_SIZE,
                    borderRadius: ITEM_SIZE / 2,
                    backgroundColor: 'transparent',
                    marginVertical: 10,
                    transform: [
                      {
                        translateY: scrollX.interpolate({
                          inputRange: inputRange,
                          outputRange: [-ITEM_SIZE / 2, 0, -ITEM_SIZE / 2, 0],
                          extrapolate: 'clamp'
                        })
                      }
                    ]
                  },
                  animation
                ]}>
                <Image
                  source={{ uri: item.image }}
                  style={[
                    {
                      height: ITEM_SIZE,
                      width: ITEM_SIZE,
                      borderRadius: ITEM_SIZE / 2
                    }
                  ]}
                />
              </Animated.View>
            )}
          </SharedElement>
          <Animated.View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'transparent',
              flex: 1,
              transform: [
                {
                  translateY: scrollX.interpolate({
                    inputRange: inputRange,
                    outputRange: [height / 4, 0, 0, 0],
                    extrapolate: 'clamp'
                  })
                },
                {
                  scale: scrollX.interpolate({
                    inputRange: inputRange,
                    outputRange: [0.85, 1, 0.85, 0.85],
                    extrapolate: 'clamp'
                  })
                }
              ],
              opacity: scrollX.interpolate({
                inputRange: inputRange,
                outputRange: [0, 1, 0, 0],
                extrapolate: 'clamp'
              })
            }}>
            <Text style={Constants.STYLES.DATING.V1.nameText}>
              {item.name}
            </Text>
            <Text style={Constants.STYLES.DATING.V1.ageText}>
              {item.age}
            </Text>
            <Text style={Constants.STYLES.DATING.V1.descriptionText}>
              {item.description}
            </Text>
          </Animated.View>
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <Animated.ScrollView
      style={{ flex: 0.65, width: width, paddingTop: BAR_HEIGHT * 0.6 }}
      contentContainerStyle={{
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexGrow: 1
      }}
      horizontal={true}
      decelerationRate={0}
      snapToInterval={ITEM_SIZE}
      scrollEventThrottle={16}
      snapToAlignment='start'
      showsHorizontalScrollIndicator={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}>
      {ITEMS.map((item, i) => renderItem(item, i))}
    </Animated.ScrollView>
  );
};