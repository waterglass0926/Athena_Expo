import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { SvgXml } from 'react-native-svg';

import { View } from 'react-native';

import '@/utils/i18n';
import { Detail } from './Detail';
import { Home } from './Home';
import { Search } from './Search';
import Components from '@/components/famous';
import Constants from '@/constants';
import Functions from '@/utils';
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

export const Main: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { theme } = useSelector((state: StateType) => state.athena);

  const [id, setId] = useState(0);
  const [type, setType] = useState('movie');
  const [searchable, setSearchable] = useState(false);
  const [query, setQuery] = useState('thor');

  return (
    <>
      {id > 0 ? (
        <Detail id={id} type={type} setId={setId} />
      ) : (
        <>
          {!searchable ? (
            <Home
              id={id}
              setId={setId}
              setType={setType}
              type={type}
              setSearchable={setSearchable}

            />
          ) : (
            <Search query={query} setQuery={setQuery} setSearchable={setSearchable} setId={setId} />
          )}
        </>
      )}
    </>
  );
};