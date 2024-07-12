import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Avatar } from 'react-native-paper';

import { useUser } from '@/hooks/tiktok/v2/useUser';
import { general } from '@/styles/tiktok/v2';
import { FIREBASE_AUTH } from '@/utils/firebase';
import { Message } from '@/types/tiktok/v2';

export const ChatSingleItem = ({ item }: { item: Message }) => {
  const { data: userData, isLoading } = useUser(item.creator);

  if (isLoading) {
    return <></>;
  };

  const isCurrentUser =
    FIREBASE_AUTH.currentUser && item.creator === FIREBASE_AUTH.currentUser.uid;

  return (
    <View
      style={isCurrentUser ? styles.containerCurrent : styles.containerOther}
    >
      {userData && userData.photoURL ? (
        <Image
          style={general.avatarSmall}
          source={{ uri: userData.photoURL }}
        />
      ) : (
        <Avatar.Icon size={32} icon={'account'} />
      )}
      <View
        style={
          isCurrentUser
            ? styles.containerTextCurrent
            : styles.containerTextOther
        }
      >
        <Text style={styles.text}>{item.message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerOther: {
    padding: 20,
    flexDirection: 'row',
    flex: 1,
  },
  containerTextOther: {
    marginHorizontal: 14,
    backgroundColor: '#0891b2',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCurrent: {
    padding: 20,
    flexDirection: 'row-reverse',
    flex: 1,
  },
  containerTextCurrent: {
    marginHorizontal: 14,
    backgroundColor: 'gray',
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
  displayName: {
    color: 'gray',
    fontSize: 13,
  },
});