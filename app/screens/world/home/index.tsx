import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Toast from 'react-native-toast-message';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import ImageModal from 'react-native-image-modal';

import {
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  View,
} from 'react-native';

import '@/utils/i18n';
import Athena from '@/components/athena';
import Components from '@/components/world';
import Constants from '@/constants';
import Functions from '@/utils';
import {
  getPlaces,
  getContinents,
  getCountries,
  getCapitals,
} from '@/stores/world/main';

export const Home = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);
  const { places, continents, countries, capitals } = useSelector(state => state.worldMain);

  useEffect(() => {
    dispatch(getPlaces({}));
    dispatch(getContinents({}));
    dispatch(getCountries({}));
    dispatch(getCapitals({}));
  }, []);

  // const renderItem = ({ item, index }, parallaxProps) => (
  //   <ParallaxImage
  //     source={item?.image}
  //     containerStyle={styles.imageSlides}
  //     style={{ resizeMode: 'cover' }}
  //     parallaxFactor={0.2}
  //     {...parallaxProps}
  //   />
  // );

  const renderItem = ({ item, index }) => (
    <ImageModal
      key={`image${index}`}
      source={{
        uri:
          Functions.isEmpty(item?.image)
            ? Constants.IAMGES.ATHENA.DEFAULT
            : item?.image
      }}
      style={styles.imageSlides}
      resizeMode='cover'
      modalImageResizeMode='contain'
    />
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.BACKCOLOR }]}>
      <StatusBar hidden />

      <Athena.Header
        menu
        mode
        title='HOME'
        onTitle={() => props.navigation.popToTop()}
        onMenu={() => props.navigation.openDrawer()}
      />

      <ScrollView
        key='scroll00'
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* <Carousel
          data={places}
          renderItem={renderItem}
          sliderWidth={wp('100%') - 32}
          itemWidth={wp('100%') - 32}
          hasParallaxImages={true}
          autoplay={true}
          loop={true}
        /> */}

        <Athena.Title
          key='title01'
          title='CONTINENTS'
          seeAll
          onPress={() => Toast.show({ type: 'success', text1: 'Go To', text2: 'All Continents' })}
        />
        {continents.map((item, index) => (
          <Components.Continent
            key={`continent${index}`}
            item={item}
            onPress={() => Toast.show({ type: 'success', text1: 'Continent', text2: item.name })}
          />
        ))}

        <Image
          key='image02'
          source={Constants.IAMGES.WORLD.W101}
          style={styles.imageMap}
        />

        <Athena.Title
          key='title02'
          title='COUNTRIES'
          seeAll
          onPress={() => Toast.show({ type: 'success', text1: 'Go To', text2: 'All Countries' })}
        />
        <ScrollView
          key='scroll02'
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {countries.map((item, index) => (
            <Components.Country
              key={`country${index}`}
              item={item}
              onPress={() => Toast.show({ type: 'success', text1: 'Country', text2: item.name })}
            />
          ))}
        </ScrollView>

        <Athena.Title
          key='title03'
          title='CAPITAL CITIES'
          seeAll
          onPress={() => Toast.show({ type: 'success', text1: 'Go To', text2: 'All Cities' })}
        />
        {capitals.map((item, index) => (
          <Components.Capital
            key={`capital${index}`}
            item={item}
            onPress={() => Toast.show({ type: 'success', text1: 'Capital', text2: item.name })}
          />
        ))}

        {/* 
        <Athena.Title
          key='title04'
          title='VIDEOS'
          seeAll
          onPress={() => Toast.show({ type: 'success', text1: 'Go To', text2: 'All Videos' })}
        />
        <View style={[styles.viewVideos, { borderColor: theme.BACKCOLOR }]}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => setPaused(!paused)}
          >
            <Video
              key='video01'
              source={Videos.video101}
              paused={paused}
              repeat
              style={{ width: wp('100%') / 3, height: 250 }}
            />
          </TouchableOpacity>
        </View> */}

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    width: wp('100%'),
    padding: 16,
  },
  imageSlides: {
    width: wp('100%') - 32,
    height: 200,
    borderRadius: 8,
  },
  imageMap: {
    marginTop: 16,
    width: '100%',
    height: 150,
    borderRadius: 8,
    shadowColor: Constants.COLORS.DEFAULT.BLACK,
    shadowOffset: { width: 15, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  viewVideos: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderWidth: 0.5,
    borderRadius: 4,
    shadowColor: Constants.COLORS.DEFAULT.BLACK,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
});