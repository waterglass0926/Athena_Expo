import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import '@/utils/i18n';
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

export const Inbox: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state: StateType) => state.athena);

  return (
    <Styles.InboxContainer>
      <Styles.InboxHeader>
      </Styles.InboxHeader>
    </Styles.InboxContainer>
  );
};