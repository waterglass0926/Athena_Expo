import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';
import { Video } from 'expo-av';
import Lottie from 'lottie-react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  Animated,
  Easing
} from 'react-native';

import '@/utils/i18n';
import lotties from '@/assets/data/tiktok/lotties.json';
import Constants from '@/constants';
import Functions from '@/utils';
import Styles from '@/styles/tiktok';
import { ThemeType } from '@/types/athena';

type PropsType = {
  navigation: any;
  play: boolean;
  item: Item;
};

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

interface Item {
  id: number;
  username: string;
  tags: string;
  music: string;
  likes: number;
  comments: number;
  uri: string;
};

export const Feed: FC<PropsType> = ({ navigation, play, item }) => {
  const dispatch = useDispatch();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  const spinValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [spinValue]);

  const rotateProp = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <>
      <LinearGradient
        colors={['rgba(0,0,0,.3)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '70%',
        }
        }
      />
      <Styles.FeedContainer>
        <Video
          source={{ uri: item.uri }}
          rate={1.0}
          volume={1.0}
          isLooping={true}
          isMuted={false}
          resizeMode='cover'
          shouldPlay={play}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </Styles.FeedContainer>
      <Styles.FeedDetails>
        <Styles.FeedUser>{item.username}</Styles.FeedUser>
        <Styles.FeedTags> {item.tags}</Styles.FeedTags>
        <Styles.FeedMusicBox>
          <Icon
            type='font-awesome'
            name='music'
            size={15}
            color='#f5f5f5'
          />
          <Styles.FeedMusic>{item.music}</Styles.FeedMusic>
        </Styles.FeedMusicBox>
      </Styles.FeedDetails>
      <Styles.FeedActions>
        <Styles.FeedBoxAction>
          <Icon
            type='ant-design'
            name='heart'
            size={35}
            color={Constants.COLORS.DEFAULT.WHITE}
            style={{ alignSelf: 'center' }}
          />
          <Styles.FeedTextAction>{item.likes}</Styles.FeedTextAction>
        </Styles.FeedBoxAction>
        <Styles.FeedBoxAction>
          <Icon
            type='font-awesome'
            name='commenting'
            size={35}
            color={Constants.COLORS.DEFAULT.WHITE}
            style={{ alignSelf: 'center' }}
          />
          <Styles.FeedTextAction>{item.comments}</Styles.FeedTextAction>
        </Styles.FeedBoxAction>
        <Styles.FeedBoxAction>
          <Icon
            type='font-awesome'
            name='whatsapp'
            size={35}
            color={Constants.COLORS.DEFAULT.GREEN}
            style={{ alignSelf: 'center' }}
          />
          <Styles.FeedTextAction> Share </Styles.FeedTextAction>
        </Styles.FeedBoxAction>
        <Styles.FeedBoxAction>
          <Animated.View
            style={
              {
                borderRadius: 50,
                borderWidth: 5,
                borderColor: Constants.COLORS.DEFAULT.GRAY,
                transform: [
                  {
                    rotate: play ? rotateProp : '0deg',
                  },
                ],
              }
            }
          >
            <Image
              style={
                {
                  width: 35,
                  height: 35,
                  borderRadius: 25,
                }
              }
              source={{
                uri: 'https://avatars3.githubusercontent.com/u/45601574',
              }}
            />
          </Animated.View>

          <Lottie
            source={lotties}
            progress={play ? spinValue.__getValue() : 0}
            style={{ width: 150, position: 'absolute', bottom: 0, right: 0 }}
          />
        </Styles.FeedBoxAction>
      </Styles.FeedActions>
      <LinearGradient
        colors={['transparent', 'rgba(0,0,0,.4)']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '50%',
        }}
      />
    </>
  );
};