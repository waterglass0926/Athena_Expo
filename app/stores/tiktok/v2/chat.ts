import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Chat } from '@/types/tiktok/v2';

interface ChatState {
  list: Chat[];
};

const initialState: ChatState = {
  list: [],
};

export default tiktokV2ChatSlice = createSlice({
  name: 'tiktokV2Chat',
  initialState,
  reducers: {
    setChats: (state, action: PayloadAction<Chat[]>) => {
      state.list = action.payload;
    },
  },
});

export const { setChats } = tiktokV2ChatSlice.actions;
