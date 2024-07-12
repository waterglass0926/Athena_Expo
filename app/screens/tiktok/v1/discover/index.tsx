import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Icon } from 'react-native-elements';

import { View } from 'react-native';

import '@/utils/i18n';
import Components from '@/components/tiktok/v1';
import Constants from '@/constants';
import Functions from '@/utils';
import Styles from '@/styles/tiktok/v1';
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

export const Discover: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: StateType) => state.athena);

  const [search, setSearch] = useState('');

  return (
    <Styles.DiscoverContainer>
      <Styles.DiscoverHeader>
        <Styles.DiscoverSearch>
          <Icon
            type='ant-design'
            name='search1'
            size={18}
            color='#838383'
            style={{ paddingRight: 10 }}
          />
          <Styles.DiscoverInput
            placeholder='Search'
            value={search}
            returnKeyType='search'
            onChangeText={text => setSearch(text)}
          />
        </Styles.DiscoverSearch>
      </Styles.DiscoverHeader>
    </Styles.DiscoverContainer>
  );
};