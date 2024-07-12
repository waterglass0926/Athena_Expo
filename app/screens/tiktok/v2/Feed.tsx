import { useContext, useEffect, useRef, useState } from 'react';
import { StyleSheet, FlatList, View, Dimensions, ViewToken } from 'react-native';
import { RouteProp } from '@react-navigation/native';

import Components from '@/components/tiktok/v2';
import useMaterialNavBarHeight from '@/hooks/tiktok/v2/useMaterialNavBarHeight';
import { getFeed, getPostsByUserId } from '@/services/apis/tiktok/v2/posts';
import { Post } from '@/types/tiktok/v2';

interface PostViewToken extends ViewToken {
  item: Post;
}

/**
 * Component that renders a list of posts meant to be
 * used for the feed screen.
 *
 * On start make fetch for posts then use a flatList
 * to display/control the posts.
 */
export function Feed({ route }) {
  const { setCurrentUserProfileItemInView } = useContext(
    CurrentUserProfileItemInViewContext,
  );

  const { creator, profile } = route.params as {
    creator: string;
    profile: boolean;
  };

  const [posts, setPosts] = useState<Post[]>([]);
  const mediaRefs = useRef<Record<string, Components.PostSingleHandles | null>>({});

  useEffect(() => {
    if (profile && creator) {
      getPostsByUserId(creator).then((posts) => setPosts(posts));
    } else {
      getFeed().then((posts) => setPosts(posts));
    }
  }, []);

  /**
   * Called any time a new post is shown when a user scrolls
   * the FlatList, when this happens we should start playing
   * the post that is viewable and stop all the others
   */
  const onViewableItemsChanged = useRef(
    ({ changed }: { changed: PostViewToken[] }) => {
      changed.forEach((element) => {
        const cell = mediaRefs.current[element.key];

        if (cell) {
          if (element.isViewable) {
            if (!profile && setCurrentUserProfileItemInView) {
              setCurrentUserProfileItemInView(element.item.creator);
            }
            cell.play();
          } else {
            cell.stop();
          }
        }
      });
    },
  );

  const feedItemHeight =
    Dimensions.get('window').height - useMaterialNavBarHeight(profile);
  /**
   * renders the item shown in the FlatList
   *
   * @param {Object} item object of the post
   * @param {Integer} index position of the post in the FlatList
   * @returns
   */
  const renderItem = ({ item, index }: { item: Post; index: number }) => {
    return (
      <View
        style={{
          height: feedItemHeight,
          backgroundColor: 'black',
        }}
      >
        <Components.PostSingle
          item={item}
          ref={(PostSingeRef) => (mediaRefs.current[item.id] = PostSingeRef)}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        windowSize={4}
        initialNumToRender={2}
        maxToRenderPerBatch={2}
        removeClippedSubviews
        viewabilityConfig={{
          itemVisiblePercentThreshold: 0,
        }}
        renderItem={renderItem}
        pagingEnabled
        keyExtractor={(item) => item.id}
        decelerationRate={'fast'}
        onViewableItemsChanged={onViewableItemsChanged.current}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});