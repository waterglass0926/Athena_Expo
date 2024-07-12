import { useState, useContext, useEffect } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RouteProp } from '@react-navigation/native';

import Components from '@/components/tiktok/v2';
import { useUser } from '@/hooks/tiktok/v2/useUser';
import { getPostsByUserId } from '@/services/apis/tiktok/v2/posts';
import { Post } from '@/types/tiktok/v2';

export function Profile({ route }) {
  const { initialUserId } = route.params;
  const [userPosts, setUserPosts] = useState<Post[]>([]);

  const providerUserId = useContext(CurrentUserProfileItemInViewContext);

  const userQuery = useUser(
    initialUserId ? initialUserId : providerUserId.currentUserProfileItemInView,
  );

  const user = userQuery.data;

  useEffect(() => {
    if (!user) {
      return;
    }

    getPostsByUserId(user?.uid).then((posts) => setUserPosts(posts));
  }, [user]);

  if (!user) {
    return <></>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Components.ProfileNavBar user={user} />
      <ScrollView>
        <Components.ProfileHeader user={user} />
        <Components.ProfilePostList posts={userPosts} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
