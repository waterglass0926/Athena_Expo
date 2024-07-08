import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';

import {
  CacheService,
  ChatClientService,
  getChannelDisplayName,
  truncate,
} from '@/utils/slack';

import Components from '@/components/slack';

export const DirectMessages = props => {
  const chatClient = ChatClientService?.getClient();
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Components.ScreenHeader title='Direct Messages' />
      <Components.ChannelSearchButton />
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={CacheService.getDirectMessagingConversations()}
        renderItem={({ item }) => {
          const lastMessage =
            item.state.messages[item.state.messages.length - 1];

          if (!lastMessage) {
            return null;
          };

          return (
            <TouchableOpacity
              style={[
                styles.listItemContainer,
                {
                  borderTopColor: colors.border,
                },
              ]}
              onPress={() => {
                navigation.navigate('Channel', {
                  channelId: item.id,
                });
              }}>
              <Components.DirectMessagingConversationAvatar channel={item} />
              <View style={styles.messageDetailsContainer}>
                <Components.SCText>{truncate(getChannelDisplayName(item), 45)}</Components.SCText>
                <Components.SCText style={styles.messagePreview}>
                  {lastMessage && lastMessage.user.id === chatClient.user.id
                    ? 'You:  '
                    : `${lastMessage.user.name}: `}
                  {truncate(lastMessage.text, 125)}
                </Components.SCText>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Components.NewMessageBubble />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItemContainer: {
    flexDirection: 'row',
    marginLeft: 10,
    borderTopWidth: 0.5,
    paddingTop: 10,
  },
  messageDetailsContainer: {
    flex: 1,
    marginLeft: 25,
    marginBottom: 15,
    marginRight: 10
  },
  messagePreview: {
    fontSize: 15,
    marginTop: 5,
  },
});
