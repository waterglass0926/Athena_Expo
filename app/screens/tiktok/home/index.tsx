import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ViewPager from '@react-native-community/viewpager';

import { View } from 'react-native';

import '@/utils/i18n';
import videos from '@/assets/data/tiktok/videos.json';
import Components from '@/components/tiktok';
import Constants from '@/constants';
import Functions from '@/utils';
import Styles from '@/styles/tiktok';
import { ThemeType } from '@/types/athena';

type PropsType = {
  navigation: any;
};

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const Home: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: StateType) => state.athena);

  const [tab, setTab] = useState(1);
  const [active, setActive] = useState(0);

  return (
    <Styles.HomeContainer>
      <Styles.HomeHeader>
        <Styles.HomeTab onPress={() => setTab(1)}>
          <Styles.HomeText active={tab === 1}>Following</Styles.HomeText>
        </Styles.HomeTab>
        <Styles.HomeSeparator> | </Styles.HomeSeparator>
        <Styles.HomeTab onPress={() => setTab(2)}>
          <Styles.HomeText active={tab === 2}>For You</Styles.HomeText>
        </Styles.HomeTab>
      </Styles.HomeHeader>
      <ViewPager
        onPageSelected={e => {
          setActive(e.nativeEvent.position);
        }}
        orientation='vertical'
        style={{ flex: 1 }}
        initialPage={0}
      >
        {videos.feed.map(item => (
          <View key={item.id}>
            <Components.Feed item={item} play={Number(item.id) === active} />
          </View>
        ))}
      </ViewPager>
    </Styles.HomeContainer>
  );
};