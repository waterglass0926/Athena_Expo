import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { QuerySnapshot, Unsubscribe } from 'firebase/firestore';

import { chatsListener } from '@/services/apis/tiktok/v2/chat';
import { setChats } from '@/stores/tiktok/v2/chat';
import { Chat } from '@/types/tiktok/v2';

export const useChats = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.tiktokV2Auth.currentUser);

  const handleChatsChange = useCallback(
    (change: QuerySnapshot) => {
      dispatch(
        setChats(
          change.docs.map((item) => ({ id: item.id, ...item.data() }) as Chat),
        ),
      );
    },
    [dispatch],
  );

  useEffect(() => {
    let listenerInstance: Unsubscribe | undefined;
    if (currentUser != null) {
      listenerInstance = chatsListener(handleChatsChange);
    }

    return () => {
      listenerInstance && listenerInstance();
    };
  }, [handleChatsChange, currentUser]);
};
