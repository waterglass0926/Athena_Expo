import { useEffect, useMemo, useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { throttle } from 'throttle-debounce';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from 'react-native-paper';


import { Post, User } from '@/types/tiktok/v2';
import { getLikeById, updateLike } from '@/services/apis/tiktok/v2/posts';
import { openCommentModal } from '@/stores/tiktok/v2/modal';

/**
 * Function that renders a component meant to be overlapped on
 * top of the post with the post info like user's display name and avatar
 * and the post's description
 *
 * @param {User} user that created the post
 * @param {Post} post object
 */
export function PostSingleOverlay({
  user,
  post,
}: {
  user: User;
  post: Post;
}) {
  const currentUser = useSelector(state => state.tiktokV2Auth.currentUser);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const [currentLikeState, setCurrentLikeState] = useState({
    state: false,
    counter: post.likesCount,
  });
  const [currentCommentsCount, setCurrentCommentsCount] = useState(
    post.commentsCount,
  );

  useEffect(() => {
    if (currentUser) {
      getLikeById(post.id, currentUser.uid).then((res) => {
        setCurrentLikeState({
          ...currentLikeState,
          state: res,
        });
      });
    }
  }, []);

  /**
   * Handles the like button action.
   *
   * In order to make the action more snappy the like action
   * is optimistic, meaning we don't wait for a response from the
   * server and always assume the write/delete action is successful
   */
  const handleUpdateLike = useMemo(
    () =>
      throttle(500, (currentLikeStateInst: typeof currentLikeState) => {
        setCurrentLikeState({
          state: !currentLikeStateInst.state,
          counter:
            currentLikeStateInst.counter +
            (currentLikeStateInst.state ? -1 : 1),
        });
        if (currentUser) {
          updateLike(post.id, currentUser.uid, currentLikeStateInst.state);
        }
      }),
    [],
  );

  const handleUpdateCommentCount = () => {
    setCurrentCommentsCount((prevCount) => prevCount + 1);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.displayName}>{user.displayName || user.email}</Text>
        <Text style={styles.description}>{post.description}</Text>
      </View>
      <View style={styles.leftContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TikTokV2ProfileOther', {
              initialUserId: user?.uid ?? '',
            })
          }
        >
          {user.photoURL ? (
            <Image style={styles.avatar} source={{ uri: user.photoURL }} />
          ) : (
            <Avatar.Icon
              style={styles.defaultAvatar}
              size={50}
              icon={'account'}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleUpdateLike(currentLikeState)}
        >
          <Ionicons
            color='white'
            size={40}
            name={currentLikeState.state ? 'heart' : 'heart-outline'}
          />
          <Text style={styles.actionButtonText}>
            {currentLikeState.counter}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() =>
            dispatch(
              openCommentModal({
                open: true,
                data: post,
                modalType: 0,
                onCommentSend: handleUpdateCommentCount,
              }),
            )
          }
        >
          <Ionicons color='white' size={40} name={'chatbubble'} />
          <Text style={styles.actionButtonText}>{currentCommentsCount}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    zIndex: 999,
    bottom: 0,
    paddingLeft: 20,
    paddingBottom: 20,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  displayName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  description: {
    marginTop: 10,
    color: 'white',
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
    marginBottom: 30,
  },
  defaultAvatar: {
    marginBottom: 30,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
  },
  leftContainer: {
    alignItems: 'center',
  },
  actionButton: {
    paddingBottom: 16,
  },
  actionButtonText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 4,
  },
});