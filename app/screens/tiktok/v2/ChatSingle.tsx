import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, FlatList, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Components from '@/components/tiktok/v2';
import { useMessages } from '@/hooks/tiktok/v2/useMessages';
import { sendMessage } from '@/services/apis/tiktok/v2/chat';
import { Message } from '@/types/tiktok/v2';

export const ChatSingle = ({
  route,
}) => {
  const { chatId, contactId } = route.params;
  const [message, setMessage] = useState('');

  const { messages, chatIdInst } = useMessages(chatId, contactId);

  const handleMessageSend = () => {
    if (message.length == 0 || !chatIdInst) {
      return;
    }

    setMessage('');
    sendMessage(chatIdInst, message);
  };

  const renderItem = ({ item }: { item: Message }) => {
    return <Components.ChatSingleItem item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Components.NavBarGeneral title='Chat' />
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        inverted
      />
      <View style={styles.containerInput}>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder='Send Message...'
          style={styles.input}
        />
        <TouchableOpacity onPress={() => handleMessageSend()}>
          <Ionicons name='arrow-up-circle' size={34} color={'crimson'} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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