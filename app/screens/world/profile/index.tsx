import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

import Components from '@/components/world';
import Constants from '@/constants';
import Functions from '@/utils';
import { getUserData } from '@/stores/world/auth';

export const Profile = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);
  const { user, data } = useSelector(state => state.worldAuth);

  useEffect(() => {
    dispatch(getUserData({ id: user.id }));
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.BACKCOLOR }]}>
      <StatusBar hidden />

      <Components.Header
        menu
        // setting
        mode
        title={`@${user?.name?.username}`}
        onTitle={() => props.navigation.popToTop()}
        onMenu={() => props.navigation.openDrawer()}
        onSetting={() => props.navigation.push('WorldSetting')}
      />
      <Components.UserInfo
        type='normal'
        user={user}
      />
      <Components.UserData
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