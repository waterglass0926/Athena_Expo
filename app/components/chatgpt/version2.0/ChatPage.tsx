import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Redirect, Stack, useLocalSearchParams } from 'expo-router';
import { useMMKVString } from 'react-native-mmkv';
import OpenAI from 'react-native-openai';
import { FlashList } from '@shopify/flash-list';
import { useSQLiteContext } from 'expo-sqlite/next';

import { Image, View, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';

import '@/utils/i18n';
import Constants from '@/constants';
import Functions, { keyStorage, storage } from '@/utils';
import { copyImageToClipboard, downloadAndSaveImage, shareImage } from '@/utils/images';
import { addChat, addMessage, getMessages } from '@/utils/sqlite';
import { ThemeType } from '@/types/athena';
import { Message, Role } from '@/types/chatgpt/version2.0';

import { HeaderDropDown } from './HeaderDropDown';
import { MessageInput } from './MessageInput';
import { ChatMessage } from './ChatMessage';
import { MessageIdeas } from './MessageIdeas';

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const ChatPage = () => {
  const dispatch = useDispatch();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  const [gptVersion, setGptVersion] = useMMKVString('gptVersion', storage);
  const [height, setHeight] = useState(0);
  const [key, setKey] = useMMKVString('apikey', keyStorage);
  const [organization, setOrganization] = useMMKVString('org', keyStorage);
  const [messages, setMessages] = useState<Message[]>([]);
  const db = useSQLiteContext();
  let { id } = useLocalSearchParams<{ id: string }>();

  if (!key || key === '' || !organization || organization === '') {
    return <Redirect href={'/(auth)/(modal)/settings'} />;
  };

  const [chatId, _setChatId] = useState(id);
  const chatIdRef = useRef(chatId);

  // https://stackoverflow.com/questions/55265255/react-usestate-hook-event-handler-using-initial-state
  function setChatId(id: string) {
    chatIdRef.current = id;
    _setChatId(id);
  };

  useEffect(() => {
    if (id) {
      getMessages(db, parseInt(id)).then((res) => {
        setMessages(res);
      });
    };
  }, [id]);

  const openAI = useMemo(
    () =>
      new OpenAI({
        apiKey: key,
        organization,
      }),
    []
  );

  useEffect(() => {
    const handleNewMessage = (payload: any) => {
      setMessages((messages) => {
        const newMessage = payload.choices[0]?.delta.content;
        if (newMessage) {
          messages[messages.length - 1].content += newMessage;
          return [...messages];
        };

        if (payload.choices[0]?.finishReason) {
          // save the last message
          addMessage(db, parseInt(chatIdRef.current), {
            content: messages[messages.length - 1].content,
            role: Role.Bot,
          });
        };
        return messages;
      });
    };

    openAI.chat.addListener('onChatMessageReceived', handleNewMessage);

    return () => {
      openAI.chat.removeListener('onChatMessageReceived');
    };
  }, [openAI]);

  const onGptVersionChange = (version: string) => {
    setGptVersion(version);
  };

  const onLayout = (event: any) => {
    const { height } = event.nativeEvent.layout;
    setHeight(height / 2);
  };

  const getCompletion = async (text: string) => {
    if (messages.length === 0) {
      addChat(db, text).then((res) => {
        const chatID = res.lastInsertRowId;
        setChatId(chatID.toString());
        addMessage(db, chatID, { content: text, role: Role.User });
      });
    };

    setMessages([...messages, { role: Role.User, content: text }, { role: Role.Bot, content: '' }]);
    messages.push();
    openAI.chat.stream({
      messages: [
        {
          role: 'user',
          content: text,
        },
      ],
      model: gptVersion == '4' ? 'gpt-4' : 'gpt-3.5-turbo',
    });
  };

  return (
    <View style={Constants.STYLES.CHATGPT.V2.container}>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <HeaderDropDown
              title='ChatGPT'
              items={[
                { key: '3.5', title: 'GPT-3.5', icon: 'bolt' },
                { key: '4', title: 'GPT-4', icon: 'sparkles' },
              ]}
              onSelect={onGptVersionChange}
              selected={gptVersion}
            />
          ),
        }}
      />
      <View style={styles.viewPage} onLayout={onLayout}>
        {messages.length == 0 && (
          <View style={[styles.viewLogo, { marginTop: height / 2 - 100 }]}>
            <Image source={Constants.IAMGES.CHATGPT.V2.LOGO_WHITE} style={styles.imageLogo} />
          </View>
        )}
        <FlashList
          data={messages}
          renderItem={({ item }) => <ChatMessage {...item} />}
          estimatedItemSize={400}
          contentContainerStyle={{ paddingTop: 30, paddingBottom: 150 }}
          keyboardDismissMode='on-drag'
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={70}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
        }}>
        {messages.length === 0 && <MessageIdeas onSelectCard={getCompletion} />}
        <MessageInput onShouldSend={getCompletion} />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 50,
  },
  imageLogo: {
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  viewPage: {
    flex: 1,
  },
});