import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Image
} from 'react-native';

import Components from '@/components/world';
import Constants from '@/constants';
import Functions from '@/utils';

export const Friends = (props) => {
  const dispatch = useDispatch();
  const { theme } = useSelector(state => state.athena);
  const { user } = useSelector(state => state.worldAuth);

  return (
    <ScrollView
      key='friend_scrollview'
      contentContainerStyle={styles.container}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity
        key={`friend`}
        style={styles.friend.content}
      >
        <Image
          source={{
            uri: Functions.isEmpty(user?.image?.avatar)
              ? Constants.IAMGES.ATHENA.DEFAULT
              : user?.image?.avatar
          }}
          blurRadius={10}
          style={[styles.friend.avatar, { borderColor: theme.PRIMARY }]}
        />
        <Text
          style={[styles.friend?.name, { color: theme.FORECOLOR }]}
        >
          {`${user?.name?.firstname} ${user?.name?.lastname}`}
        </Text>
      </TouchableOpacity>
      {props.data.map((item, index) => (
        <TouchableOpacity
          key={`friend_${index}`}
          style={styles.friend.content}
        >
          <Image
            source={{
              uri: Functions.isEmpty(item?.image?.avatar)
                ? Constants.IAMGES.ATHENA.DEFAULT
                : item?.image?.avatar
            }}
            blurRadius={20}
            style={[styles.friend.avatar, { borderColor: theme.PRIMARY }]}
          />
          <Text
            style={[styles.friend.name, { color: theme.FORECOLOR }]}
          >
            {`${item?.name?.username}`}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
  friend: {
    content: {
      justifyContent: 'center',
      alignItem: 'center',
      marginRight: 20,
    },
    avatar: {
      width: 60,
      height: 60,
      borderRadius: 30,
      borderWidth: 2,
    },
    name: {
      marginTop: 5,
      fontSize: 8,
      fontWeight: '500',
      textAlign: 'center',
    },
  },
});