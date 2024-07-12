import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { Avatar } from 'react-native-paper';

import { CommentItem } from './CommentItem';
import {
  addComment,
  clearCommentListener,
  commentListener,
} from '@/services/apis/tiktok/v2/posts';
import { general } from '@/styles/tiktok/v2';
import { Post, Comment } from '@/types/tiktok/v2';

export const CommentModal = ({
  post,
  onCommentSend,
}: {
  post: Post;
  onCommentSend?: () => void;
}) => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState<Comment[]>([]);
  const currentUser = useSelector(state => state.tiktokV2Auth.currentUser);

  useEffect(() => {
    commentListener(post.id, setCommentList);
    return () => clearCommentListener();
  }, []);

  const handleCommentSend = () => {
    if (comment.length == 0) {
      return;
    }
    setComment('');
    if (currentUser) {
      addComment(post.id, currentUser.uid, comment);
      if (onCommentSend) {
        onCommentSend();
      }
    }
  };

  const renderItem = ({ item }: { item: Comment }) => {
    return <CommentItem item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={commentList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.containerInput}>
        {currentUser && currentUser.photoURL ? (
          <Image
            style={general.avatarSmall}
            source={{ uri: currentUser.photoURL }}
          />
        ) : (
          <Avatar.Icon size={32} icon={'account'} />
        )}
        <TextInput
          value={comment}
          onChangeText={setComment}
          style={styles.input}
        />
        <TouchableOpacity onPress={() => handleCommentSend()}>
          <Ionicons name='arrow-up-circle' size={34} color={'crimson'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1,
  },
  containerInput: {
    padding: 10,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: 'lightgrey',
    borderRadius: 4,
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
});