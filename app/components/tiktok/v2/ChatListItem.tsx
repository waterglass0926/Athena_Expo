import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';

import { useUser } from '@/hooks/tiktok/v2/useUser';
import { FIREBASE_AUTH } from '@/utils/firebase';
import { Chat } from '@/types/tiktok/v2';

export const ChatListItem = ({ chat }: { chat: Chat }) => {
  const navigation = useNavigation();

  const { data: userData } = useUser(
    FIREBASE_AUTH.currentUser &&
      chat.members[0] === FIREBASE_AUTH.currentUser.uid
      ? chat.members[1]
      : chat.members[0],
  );

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('TikTokV2ChatSingle', { chatId: chat.id })}
    >
      {userData && userData.photoURL ? (
        <Image style={styles.image} source={{ uri: userData.photoURL }} />
      ) : (
        <Avatar.Icon size={60} icon={'account'} />
      )}
      <View style={{ flex: 1 }}>
        {userData && (
          <Text style={styles.userDisplayName}>
            {userData.displayName || userData.email}
          </Text>
        )}
        <Text style={styles.lastMessage}>{chat.lastMessage}</Text>
      </View>
      <Text>
        {chat.lastUpdate && chat.lastUpdate.seconds
          ? `${new Date(chat.lastUpdate.seconds * 1000).getMonth() + 1
          }/${new Date(chat.lastUpdate.seconds * 1000).getDate()}/${new Date(
            chat.lastUpdate.seconds * 1000,
          ).getFullYear()}`
          : 'Now'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    backgroundColor: 'gray',
    height: 60,
    aspectRatio: 1,
    borderRadius: 30,
    marginRight: 16,
  },
  userDisplayName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 13,
    color: 'gray',
  },
});