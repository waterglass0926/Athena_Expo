import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Constants from '@/constants';

interface ActionType<T> {
  state: any;
  payload: T;
};

interface StateType {
  user: any;
};

const initialState: StateType = {
  user: null,
};

// Define your slice
export default uberEatsAuthSlice = createSlice({
  name: 'uberEatsAuth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<boolean>) => {
      state.user = action.payload;
    },
    logout: (state, action: PayloadAction<ThemeType | any>) => {
      state.user = null;
    },
  },
});

export const { login, logout } = uberEatsAuthSlice.actions;

export const selectUser = state => state.uberEatsAuth.user;