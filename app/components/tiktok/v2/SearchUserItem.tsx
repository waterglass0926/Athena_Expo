import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';

import { SearchUser } from '@/types/tiktok/v2';

export function SearchUserItem({ item }: { item: SearchUser }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('TikTokV2ProfileOther', { initialUserId: item?.uid ?? '' })
      }
    >
      <Text style={styles.text}>{item.displayName || item.email}</Text>
      {item.photoURL ? (
        <Image style={styles.image} source={{ uri: item.photoURL }} />
      ) : (
        <Avatar.Icon size={40} icon={'account'} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 16,
  },
  image: {
    backgroundColor: 'gray',
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});