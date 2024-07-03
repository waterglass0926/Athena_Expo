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
      let result = await createUserWithEmailAndPassword(auth, payload.info.email, payload.info.password);
      if (result?.user.uid) {
        let token = await auth.currentUser.getIdToken();
        if (token) Tokens.userToken = token;
        let response: AxiosResponse<ResponseType> = await authApi.createUser({
          id: result?.user.uid,
          ...payload,
        });
        if (response.status === 200) {
          const resp: any = response.data;
          return {
            token: token,
            user: resp,
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
            token: token,
            user: resp,
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

export const signOut = createAsyncThunk(
  'worldAuth/signOut',
  async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoad(true));
      auth.signOut();
      return {
        token: null,
        user: null,
      };
    } catch (error) {
      Functions.isLog(2, error.message);
      return thunkAPI.rejectWithValue();
    } finally {
      thunkAPI.dispatch(setLoad(false));
    };
  },
);

export const getUserData = createAsyncThunk(
  'worldMain/getUserData',
  async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoad(true));
      let response: AxiosResponse<ResponseType> = await authApi.getUserData(payload);
      if (response.status === 200) {
        const resp: any = response.data;
        return {
          data: resp,
        };
      } else {
        return thunkAPI.rejectWithValue();
      };
    } catch (error) {
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
  token: string | null;
  user: any;
  data: any;
};

const initialState: StateType = {
  token: null,
  user: null,
  data: [],
};

// Define your slice
export default worldAuthSlice = createSlice({
  name: 'worldAuth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<any>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setUserData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.token = null;
        state.user = null;
      })
      .addCase(getUserData.fulfilled, (state, action) => {
        state.data = action.payload.data;
      })
      .addDefaultCase((state, action) => { });
  },
});

export const { setToken, setUser, setUserData } = worldAuthSlice.actions;