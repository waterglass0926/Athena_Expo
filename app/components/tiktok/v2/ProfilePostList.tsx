import { StyleSheet, View, FlatList } from 'react-native';

import { ProfilePostListItem } from './ProfilePostListItem';

export function ProfilePostList({
  posts,
}) {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        scrollEnabled={false}
        removeClippedSubviews
        nestedScrollEnabled
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProfilePostListItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

