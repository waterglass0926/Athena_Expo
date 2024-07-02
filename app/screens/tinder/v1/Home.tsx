import React, { useRef } from 'react';

import CardStack, { Card } from 'react-native-card-stack-swiper';

import { View, ImageBackground } from 'react-native';

import Demo from '@/assets/data/tinder/v1/demo';
import Components from '@/components/tinder/v1';
import Styles from '@/styles/tinder/v1';

export const Home = () => {
  const swiperRef = useRef(null);

  return (
    <ImageBackground
      source={require('@/assets/images/tinder/v1/bg.png')}
      style={Styles.bg}
    >
      <View style={Styles.containerHome}>
        <View style={Styles.top}>
          <Components.City />
          <Components.Filter />
        </View>

        <CardStack
          loop={true}
          verticalSwipe={false}
          renderNoMoreCards={() => null}
          ref={swiperRef}
        >
          {Demo.map((item, index) => (
            <Card key={index}>
              <Components.CardItem
                image={item.image}
                name={item.name}
                description={item.description}
                matches={item.match}
                actions
                onPressLeft={() => swiperRef.current.swipeLeft()}
                onPressRight={() => swiperRef.current.swipeRight()}
              />
            </Card>
          ))}
        </CardStack>
      </View>
    </ImageBackground>
  );
};