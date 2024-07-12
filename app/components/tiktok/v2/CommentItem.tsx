import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Avatar } from 'react-native-paper';

import { useUser } from '@/hooks/tiktok/v2/useUser';
import { generalStyles } from '@/styles/tiktok/v2';
import { Comment } from '@/types/tiktok/v2';

export const CommentItem = ({ item }: { item: Comment }) => {
  const user = useUser(item.creator).data;

  return (
    <View style={styles.container}>
      {user && user.photoURL ? (
        <Image
          style={generalStyles.avatarSmall}
          source={{ uri: user.photoURL }}
        />
      ) : (
        <Avatar.Icon size={32} icon={'account'} />
      )}
      <View style={styles.containerText}>
        {user && (
          <Text style={styles.displayName}>
            {user.displayName || user.email}
          </Text>
        )}
        <Text>{item.comment}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    flex: 1,
  },
  containerText: {
    marginHorizontal: 14,
  },
  displayName: {
    color: 'gray',
    fontSize: 13,
  },
});