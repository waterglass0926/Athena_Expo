import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

import Athena from '@/components/athena';
import Components from '@/components/world';
import Constants from '@/constants';
import Functions from '@/utils';
import { getUserData } from '@/stores/athena/auth';

export const Profile = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);
  const { user, data } = useSelector(state => state.athenaAuth);

  useEffect(() => {
    dispatch(getUserData({ id: user.id }));
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.BACKCOLOR }]}>
      <StatusBar hidden />

      <Athena.Header
        menu
        // setting
        mode
        title={`@${user?.name?.username}`}
        onTitle={() => props.navigation.popToTop()}
        onMenu={() => props.navigation.openDrawer()}
        onSetting={() => props.navigation.push('WorldSetting')}
      />
      <Athena.UserInfo
        type='normal'
        user={user}
      />
      <Athena.UserData
        data={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});