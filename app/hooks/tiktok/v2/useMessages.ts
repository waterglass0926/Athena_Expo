import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QuerySnapshot, Unsubscribe } from 'firebase/firestore';

import { createChat, messagesListener } from '@/services/apis/tiktok/v2/chat';
import { Message } from '@/types/tiktok/v2';

export const useMessages = (chatId?: string, contactId?: string) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.tiktokV2Auth.currentUser);
  const chats = useSelector(state => state.tiktokV2Chat.list);

  const [chatIdInst, setChatIdInst] = useState(chatId);
  const [messages, setMessages] = useState<Message[]>([]);

  const handleMessagesChange = useCallback(
    (change: QuerySnapshot) => {
      setMessages(
        change.docs.map((item) => ({ id: item.id, ...item.data() }) as Message),
      );
    },
    [dispatch],
  );

  useEffect(() => {
    let listenerInstance: Unsubscribe;

    if (!chatIdInst) {
      let chat = chats.find((item) =>
        item.members.some((member) => member === contactId),
      );

      if (!chat && contactId) {
        createChat(contactId).then((res) => setChatIdInst(res.id));
      } else if (chat) {
        setChatIdInst(chat.id);
      }
    }

    if (currentUser != null && chatIdInst) {
      listenerInstance = messagesListener(handleMessagesChange, chatIdInst);
    }

    return () => {
      listenerInstance && listenerInstance();
    };
  }, [handleMessagesChange, currentUser, chatIdInst]);

  return { messages, chatIdInst };
};
