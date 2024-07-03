import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import Constants from '@/constants';
import Functions from '@/utils';
import mainApi from '@/services/apis/world/main';
import { setLoad } from '@/stores/athena';

export const getPlaces = createAsyncThunk(
  'worldMain/getPlaces',
  async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoad(true));

      let response: AxiosResponse<ResponseType> = await mainApi.getPlaces({});
      if (response.status === 200) {
        const resp: any = response.data;
        return {
          places: resp,
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

export const getContinents = createAsyncThunk(
  'worldMain/getContinents',
  async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoad(true));

      let response: AxiosResponse<ResponseType> = await mainApi.getContinents({});
      if (response.status === 200) {
        const resp: any = response.data;
        return {
          continents: resp,
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

export const getCountries = createAsyncThunk(
  'worldMain/getCountries',
  async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoad(true));

      let response: AxiosResponse<ResponseType> = await mainApi.getCountries({});
      if (response.status === 200) {
        const resp: any = response.data;
        return {
          countries: resp,
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

export const getCapitals = createAsyncThunk(
  'worldMain/getCapitals',
  async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoad(true));

      let response: AxiosResponse<ResponseType> = await mainApi.getCapitals({});
      if (response.status === 200) {
        const resp: any = response.data;
        return {
          capitals: resp,
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

export const getFriends = createAsyncThunk(
  'worldMain/getFriends',
  async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoad(true));

      let response: AxiosResponse<ResponseType> = await mainApi.getFriends({});
      if (response.status === 200) {
        const resp: any = response.data;
        return {
          friends: resp,
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

export const getPosts = createAsyncThunk(
  'worldMain/getPosts',
  async (payload, thunkAPI) => {
    try {
      thunkAPI.dispatch(setLoad(true));

      let response: AxiosResponse<ResponseType> = await mainApi.getPosts({});
      if (response.status === 200) {
        const resp: any = response.data;
        return {
          posts: resp,
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
  places: any;
  continents: any;
  countries: any;
  capitals: any;
  friends: any;
  posts: any;
};

const initialState: StateType = {
  places: [],
  continents: [],
  countries: [],
  capitals: [],
  friends: [],
  posts: [],
};

// Define your slice
export default worldMainSlice = createSlice({
  name: 'worldMain',
  initialState,
  reducers: {
    setPlaces: (state, action: PayloadAction<any>) => {
      state.places = action.payload;
    },
    setContinents: (state, action: PayloadAction<any>) => {
      state.continents = action.payload;
    },
    setCountries: (state, action: PayloadAction<any>) => {
      state.countries = action.payload;
    },
    setCapitals: (state, action: PayloadAction<any>) => {
      state.capitals = action.payload;
    },
    setFriends: (state, action: PayloadAction<any>) => {
      state.friends = action.payload;
    },
    setPosts: (state, action: PayloadAction<any>) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlaces.fulfilled, (state, action) => {
        state.places = action.payload.places;
      })
      .addCase(getContinents.fulfilled, (state, action) => {
        state.continents = action.payload.continents;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.countries = action.payload.countries;
      })
      .addCase(getCapitals.fulfilled, (state, action) => {
        state.capitals = action.payload.capitals;
      })
      .addCase(getFriends.fulfilled, (state, action) => {
        state.friends = action.payload.friends;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addDefaultCase((state, action) => { });
  },
});

export const {
  setPlaces,
  setContinents,
  setCountries,
  setCapitals,
  setFriends,
  setPosts,
} = worldMainSlice.actions;