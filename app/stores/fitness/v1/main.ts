import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import Constants from '@/constants';
import Functions from '@/utils';
import mainApi from '@/services/apis/fitness/v1/main';
import { setLoad } from '@/stores/athena';

export const getWorkouts = createAsyncThunk(
  'fitnessV1Main/getWorkouts',
  async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoad(true));
      let response: AxiosResponse<ResponseType> = await mainApi.getWorkouts({});
      if (response.status === 200) {
        const resp: any = response.data;
        return {
          workouts: resp,
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
  workouts: any;
};

const initialState: StateType = {
  workouts: [],
};

// Define your slice
export default fitnessV1MainSlice = createSlice({
  name: 'fitnessV1Main',
  initialState,
  reducers: {
    setWorkouts: (state, action: PayloadAction<any>) => {
      state.workouts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWorkouts.fulfilled, (state, action) => {
        state.workouts = action.payload.workouts;
      })
      .addDefaultCase((state, action) => { });
  },
});

export const {
  setWorkouts,
} = fitnessV1MainSlice.actions;