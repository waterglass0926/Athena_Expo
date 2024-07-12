import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';

import { getPostsByUser } from './post';
import { User } from '@/types/tiktok/v2';
import { FIREBASE_AUTH, FIREBASE_DB } from '@/utils/firebase';

export const userAuthStateListener = createAsyncThunk(
  'tiktokV2Auth/userAuthStateListener',
  async (_, { dispatch }) => {
    FIREBASE_AUTH.onAuthStateChanged((user) => {
      if (user) {
        dispatch(getCurrentUserData());
        dispatch(getPostsByUser(user.uid));
      } else {
        dispatch(setUserState({ currentUser: null, loaded: true }));
      }
    });
  },
);

export const getCurrentUserData = createAsyncThunk(
  'tiktokV2Auth/getCurrentUserData',
  async (_, { dispatch }) => {
    if (FIREBASE_AUTH.currentUser) {
      const unsub = onSnapshot(
        doc(FIREBASE_DB, 'user', FIREBASE_AUTH.currentUser.uid),
        (res) => {
          if (res.exists()) {
            dispatch(setUserState({ currentUser: res.data(), loaded: true }));
          }
        },
      );
    } else {
      console.log('No user is signed in.');
    }
  },
);

export const login = createAsyncThunk(
  'tiktokV2Auth/login',
  async (payload: { email: string; password: string }) => {
    const { email, password } = payload;
    await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
  },
);

export const register = createAsyncThunk(
  'tiktokV2Auth/register',
  async (payload: { email: string; password: string }) => {
    const { email, password } = payload;
    await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
  },
);

interface AuthState {
  currentUser: User | null;
  loaded: boolean;
};

const initialState: AuthState = {
  currentUser: null,
  loaded: false,
};

export default tiktokV2AuthSlice = createSlice({
  name: 'tiktokV2Auth',
  initialState,
  reducers: {
    setUserState: (state, action) => {
      state.currentUser = action.payload.currentUser;
      state.loaded = action.payload.loaded;
    },
  },
  extraReducers: (builder) => {
    // Handle additional cases for async actions if needed
  },
});

export const { setUserState } = tiktokV2AuthSlice.actions;
