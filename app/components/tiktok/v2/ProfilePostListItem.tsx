import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Post } from '@/types/tiktok/v2';

export function ProfilePostListItem({ item }: { item: Post | null }) {
  const navigation = useNavigation();

  return (
    item && (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          navigation.navigate('TikTokV2UserPosts', {
            creator: item.creator,
            profile: true,
          })
        }
      >
        <Image style={styles.image} source={{ uri: item.media[1] }} />
      </TouchableOpacity>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,
    height: 200,
    backgroundColor: 'gray',
  },
  image: {
    flex: 1,
  },
});