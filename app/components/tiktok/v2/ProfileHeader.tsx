import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import { button } from '@/styles/tiktok/v2';

import { FIREBASE_AUTH } from '@/utils/firebase';
import { useFollowing } from '@/hooks/tiktok/v2/useFollowing';
import { useFollowingMutation } from '@/hooks/tiktok/v2/useFollowingMutation';

/**
 * Renders the header of the user profile and
 * handles all of the actions within it like follow, unfollow and
 * routing to the user settings.
 *
 * @param {Object} props
 * @param {Object} props.user information of the user to display
 * @returns
 */
export function ProfileHeader({
  user,
}) {
  const navigation = useNavigation();
  const [followersCount, setFollowersCount] = useState(
    user?.followersCount || 0,
  );

  useEffect(() => {
    setFollowersCount(user?.followersCount || 0);
  }, [user]);

  const followingData = useFollowing(
    FIREBASE_AUTH.currentUser?.uid ?? null,
    user?.uid ?? null,
  );
  const isFollowing =
    FIREBASE_AUTH.currentUser?.uid && user?.uid && followingData.data
      ? followingData.data
      : false;

  const isFollowingMutation = useFollowingMutation();

  const renderFollowButton = () => {
    if (isFollowing) {
      return (
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={button.grayOutlinedButton}
            onPress={() => {
              if (user?.uid) {
                navigation.navigate('TikTokV2ChatSingle', { contactId: user.uid });
              }
            }}
          >
            <Text style={button.grayOutlinedButtonText}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={button.grayOutlinedIconButton}
            onPress={() => {
              if (user?.uid) {
                isFollowingMutation.mutate({
                  otherUserId: user.uid,
                  isFollowing,
                });
                setFollowersCount(followersCount - 1);
              }
            }}
          >
            <Feather name='user-check' size={20} />
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          style={button.filledButton}
          onPress={() => {
            if (user?.uid) {
              isFollowingMutation.mutate({
                otherUserId: user.uid,
                isFollowing,
              });
              setFollowersCount(followersCount + 1);
            }
          }}
        >
          <Text style={button.filledButtonText}>Follow</Text>
        </TouchableOpacity>
      );
    }
  };

  return (
    user && (
      <View style={styles.container}>
        {user.photoURL ? (
          <Image style={styles.avatar} source={{ uri: user.photoURL }} />
        ) : (
          <Avatar.Icon size={80} icon={'account'} />
        )}
        <Text style={styles.emailText}>{user.displayName || user.email}</Text>
        <View style={styles.counterContainer}>
          <View style={styles.counterItemContainer}>
            <Text style={styles.counterNumberText}>{user.followingCount}</Text>
            <Text style={styles.counterLabelText}>Following</Text>
          </View>
          <View style={styles.counterItemContainer}>
            <Text style={styles.counterNumberText}>{followersCount}</Text>
            <Text style={styles.counterLabelText}>Followers</Text>
          </View>
          <View style={styles.counterItemContainer}>
            <Text style={styles.counterNumberText}>{user.likesCount}</Text>
            <Text style={styles.counterLabelText}>Likes</Text>
          </View>
        </View>
        {FIREBASE_AUTH.currentUser?.uid === user.uid ? (
          <TouchableOpacity
            style={button.grayOutlinedButton}
            onPress={() => navigation.navigate('TikTokV2EditProfile')}
          >
            <Text style={button.grayOutlinedButtonText}>
              Edit Profile
            </Text>
          </TouchableOpacity>
        ) : (
          renderFollowButton()
        )}
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: 'center',
    paddingHorizontal: 65,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  counterContainer: {
    paddingBottom: 20,
    flexDirection: 'row',
  },
  counterItemContainer: {
    flex: 1,
    alignItems: 'center',
  },
  emailText: {
    padding: 20,
  },
  counterNumberText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  counterLabelText: {
    color: 'gray',
    fontSize: 11,
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
});