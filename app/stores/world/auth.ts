import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import Toast from 'react-native-toast-message';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import Constants from '@/constants';
import Functions, { Tokens } from '@/utils';
import { auth } from '@/utils/firebase';
import authApi from '@/services/apis/world/auth';
import { setLoad } from '@/stores/athena';

export const signUp = createAsyncThunk(
  'worldAuth/signUp',
  async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoad(true));

      let result = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
      if (result?.user.uid) {
        let token = await auth.currentUser.getIdToken();
        console.log(token)
        if (token) Tokens.userToken = token;
        let response: AxiosResponse<ResponseType> = await authApi.createUser({
          id: result?.user.uid,
          ...payload,
        });
        if (response.status === 200) {
          const resp: any = response.data;
          return {
            user: resp[0],
          };
        } else {
          return thunkAPI.rejectWithValue();
        };
      };

    } catch (error) {
      if (error.code === 'auth/internal-error') {
        Toast.show({ type: 'error', text1: 'Error', text2: 'That email or password is invalid!' });
      } else {
        Toast.show({ type: 'error', text1: 'Error', text2: error.message });
      };

      Functions.isLog(2, error.message);
      return thunkAPI.rejectWithValue();
    } finally {
      thunkAPI.dispatch(setLoad(false));
    };
  },
);

export const signIn = createAsyncThunk(
  'worldAuth/signIn',
  async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoad(true));

      let result = await signInWithEmailAndPassword(auth, payload.email, payload.password);
      if (result?.user.uid) {
        let token = await auth.currentUser.getIdToken();
        if (token) Tokens.userToken = token;
        let response: AxiosResponse<ResponseType> = await authApi.getUser({
          id: result?.user.uid,
          ...payload,
        });
        if (response.status === 200) {
          const resp: any = response.data;
          return {
            user: resp[0],
          };
        } else {
          return thunkAPI.rejectWithValue();
        };
      };

    } catch (error) {
      if (error.code === 'auth/internal-error') {
        Toast.show({ type: 'error', text1: 'Error', text2: 'That email or password is invalid!' });
      } else {
        Toast.show({ type: 'error', text1: 'Error', text2: error.message });
      };

      Functions.isLog(2, error.message);
      return thunkAPI.rejectWithValue();
    } finally {
      thunkAPI.dispatch(setLoad(false));
    };
  },
);

interface ActionType<T> {
  state: any;
  payload: T;
};

interface StateType {
  user: any;
  data: any;
};

const initialState: StateType = {
  user: null,
  data: [],
};

// Define your slice
export default worldAuthSlice = createSlice({
  name: 'worldAuth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = worldAuthSlice.actions;