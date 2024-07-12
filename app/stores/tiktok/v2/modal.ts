import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Post } from '@/types/tiktok/v2';

interface CommentModalState {
  open: boolean;
  data: Post | null;
  modalType: number;
  onCommentSend?: () => void;
};

const initialState: CommentModalState = {
  open: false,
  data: null,
  modalType: -1,
  onCommentSend: undefined,
};

export default tiktokV2ModalSlice = createSlice({
  name: 'tiktokV2Modal',
  initialState,
  reducers: {
    openCommentModal: (state, action: PayloadAction<CommentModalState>) => {
      state.open = action.payload.open;
      state.data = action.payload.data;
      state.modalType = action.payload.modalType;
      state.onCommentSend = action.payload.onCommentSend;
    },
    clearModal: () => initialState,
  },
});

export const { openCommentModal, clearModal } = tiktokV2ModalSlice.actions;
