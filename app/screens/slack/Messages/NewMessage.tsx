import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import {
  Chat,
  Channel,
  MessageList,
  MessageInput,
} from 'stream-chat-react-native';
import { useTheme, useNavigation } from '@react-navigation/native';

import Components from '@/components/slack';
import {
  AsyncStore,
  ChatClientService,
  getChannelDisplayImage,
  getChannelDisplayName,
  useStreamChatTheme,
} from '@/utils/slack';

export const NewMessage = () => {
  const chatStyles = useStreamChatTheme();

  const [tags, setTags] = useState([]);
  const [channel, setChannel] = useState(null);
  const [initialValue] = useState('');
  const [text, setText] = useState('');
  const navigation = useNavigation();
  const chatClient = ChatClientService?.getClient();
  const [focusOnTags, setFocusOnTags] = useState(true);
  const { colors } = useTheme();
  const goBack = () => {
    const storeObject = {
      image: getChannelDisplayImage(channel),
      title: getChannelDisplayName(channel),
      text,
    };
    AsyncStore.setItem(`@slack-clone-draft-${channel.id}`, storeObject);

    navigation.goBack();
  };

  useEffect(() => {
    const dummyChannel = chatClient.channel(
      'messaging',
      'some-random-channel-id',
    );
    // Channel component starts watching the channel, if its not initialized.
    // So this is kind of a ugly hack to trick it into believing that we have initialized the channel already,
    // so it won't make a call to channel.watch() internally.
    // dummyChannel.initialized = true;
    setChannel(dummyChannel);
  }, [chatClient]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.background,
      }}>
      <View style={styles.channelScreenContainer}>
        <Components.ModalScreenHeader goBack={goBack} title='New Message' />
        <View
          style={[
            styles.chatContainer,
            {
              backgroundColor: colors.background,
            },
          ]}>
          <Chat client={chatClient} style={chatStyles}>
            <Channel
              channel={channel}
              KeyboardCompatibleView={Components.CustomKeyboardCompatibleView}>
              <Components.UserSearch
                onFocus={() => {
                  setFocusOnTags(true);
                }}
                onChangeTags={tags => {
                  setTags(tags);
                }}
              />

              {!focusOnTags && (
                <MessageList
                  Message={Components.MessageSlack}
                  DateSeparator={Components.DateSeparator}
                  dismissKeyboardOnMessageTouch={false}
                />
              )}
              <MessageInput
                initialValue={initialValue}
                onChangeText={text => {
                  setText(text);
                }}
                Input={Components.InputBox}
                additionalTextInputProps={{
                  onFocus: async () => {
                    setFocusOnTags(false);
                    const channel = chatClient.channel('messaging', {
                      members: [...tags.map(t => t.id), chatClient.user.id],
                      name: '',
                      example: 'slack-demo',
                    });
                    if (!channel.initialized) {
                      await channel.watch();
                    }

                    setChannel(channel);
                  },
                  placeholderTextColor: colors.dimmedText,
                  placeholder:
                    channel && channel.data.name
                      ? 'Message #' +
                      channel.data.name.toLowerCase().replace(' ', '_')
                      : 'Start a new message',
                }}
              />
            </Channel>
          </Chat>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  channelScreenContainer: {
    flexDirection: 'column',
    height: '100%'
  },
  chatContainer: {
    flexGrow: 1,
    flexShrink: 1,
  },
});
