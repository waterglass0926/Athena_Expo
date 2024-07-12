import React from 'react';
import { Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import Components from '@/components/tiktok/v2';
import { Chat } from '@/types/tiktok/v2';

export const Chats = () => {
  const chats = useSelector(state => state.tiktokV2Chat.list);

  const renderItem = ({ item }: { item: Chat }) => {
    return <Components.ChatListItem chat={item} />;
  };

  return (
    <SafeAreaView>
      <Components.NavBarGeneral leftButton={{ display: false }} title='Direct messages' />
      <FlatList
        data={chats}
        removeClippedSubviews
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text></Text>
    </SafeAreaView>
  );
};