import React, { FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

import '@/utils/i18n';
import { CHAT_GPT_API_KEY } from '@env';
import Components from '@/components/chatgpt/version1.0';
import Constants from '@/constants';
import Functions from '@/utils';
import { ThemeType } from '@/types/athena';

type PropsType = {
  navigation: any;
};

interface StateType {
  athena: {
    load: boolean;
    theme: ThemeType;
  };
};

export const Chat: FC<PropsType> = ({ navigation }) => {
  const dispatch = useDispatch();
  const { i18n, t } = useTranslation();
  const { load, theme } = useSelector((state: StateType) => state.athena);

  const [inputMessage, setInputMessage] = useState('');
  const [outputMessage, setOutputMessage] = useState(
    'Results should be shown here.'
  );
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState([]);

  // Implementing chat generation using gpt-3.5-turbo model
  const generateText = () => {
    setIsTyping(true);

    const message = {
      _id: Math.random().toString(36).substring(7),
      text: inputMessage,
      createAt: new Date(),
      user: { _id: 1 },
    };

    setMessages((previousMessage) => GiftedChat.append(previousMessage, [message]));

    /**
     * Always put your api key in an environment file
     */

    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CHAT_GPT_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: inputMessage,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setInputMessage('');
        setOutputMessage(data.choices[0].message.content.trim());

        const message = {
          _id: Math.random().toString(36).substring(7),
          text: data.choices[0].message.content.trim(),
          createAt: new Date(),
          user: { _id: 2, name: 'ChatGPT' },
        };

        setIsTyping(false);
        setMessages((previousMessage) => GiftedChat.append(previousMessage, [message]));
      });
  };

  // implementing images generations
  const generateImages = () => {
    setIsTyping(true);

    const message = {
      _id: Math.random().toString(36).substring(7),
      text: inputMessage,
      createdAt: new Date(),
      user: { _id: 1 },
    };

    setMessages((previousMessage) => GiftedChat.append(previousMessage, [message]));

    fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CHAT_GPT_API_KEY}`,
      },
      body: JSON.stringify({
        prompt: inputMessage,
        n: 1,
        size: '1024x1024',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setInputMessage('');
        setOutputMessage(data.data[0].url);
        setIsTyping(false);

        data.data.forEach((item) => {
          const message = {
            _id: Math.random().toString(36).substring(7),
            text: 'Image',
            createdAt: new Date(),
            user: { _id: 2, name: 'ChatGPT' },
            image: item.url,
          };

          setMessages((previousMessage) => GiftedChat.append(previousMessage, [message]));
        });
      });
  };

  const submitHandler = () => {
    if (inputMessage.toLowerCase().startsWith('generate image')) {
      generateImages();
    } else {
      generateText();
    };
  };

  const handleInputText = (text) => {
    setInputMessage(text);
  };

  const renderMessage = (props) => {
    const { currentMessage } = props;

    if (currentMessage.user._id === 1) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                marginRight: 12,
                marginVertical: 12,
                backgroundColor: theme.PRIMARY,
              },
            }}
            textStyle={{
              right: {
                color: Constants.COLORS.DEFAULT.WHITE,
              },
            }}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}
        >
          <Image
            source={Constants.IAMGES.CHATGPT.V1.AVATAR}
            style={{
              marginLeft: 8,
              height: 40,
              width: 40,
              borderRadius: 20,
            }}
          />
          <Bubble
            {...props}
            wrapperStyle={{
              left: {
                marginLeft: 12,
                backgroundColor: theme.QUATERNARY,
              },
            }}
            textStyle={{
              left: {
                color: Constants.COLORS.DEFAULT.BLACK,
              },
            }}
          />
        </View>
      );
    };

    return <Bubble {...props} />;
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.BACKCOLOR,
      }}
    >
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: wp('100%'),
          height: 60,
          paddingHorizontal: 22,
          backgroundColor: theme.BACKCOLOR,
          zIndex: 9999,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 40,
            width: 40,
          }}
        >
          <Icon
            type='material'
            name='keyboard-arrow-left'
            size={24}
            color={theme.FORECOLOR}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Save chat')}>
          <Icon
            type='ionicon'
            name='bookmark-outline'
            size={24}
            color={theme.FORECOLOR}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: 'center' }}>
        <GiftedChat
          messages={messages}
          isTyping={isTyping}
          minInputToolbarHeight={0}
          user={{ _id: 1 }}
          renderInputToolbar={() => { }}
          renderMessage={renderMessage}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 8,
          backgroundColor: theme.BACKCOLOR,
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginHorizontal: 12,
            marginLeft: 10,
            paddingVertical: 8,
            backgroundColor: theme.BACKCOLOR,
            borderRadius: 12,
            borderColor: theme.FORECOLOR,
            borderWidth: .2
          }}
        >
          <TextInput
            value={inputMessage}
            onChangeText={handleInputText}
            placeholder='Enter your question'
            placeholderTextColor={theme.FORECOLOR}
            style={{
              flex: 1,
              paddingHorizontal: 10,
              color: theme.FORECOLOR,
            }}
          />

          <TouchableOpacity
            onPress={submitHandler}
            style={{
              marginHorizontal: 12,
              padding: 6,
              borderRadius: 8,
            }}
          >
            <Icon
              type='font-awesome'
              name='send-o'
              color={theme.PRIMARY}
              size={24}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

});