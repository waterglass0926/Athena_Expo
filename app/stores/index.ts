import { combineReducers } from 'redux';
import { configureStore, Action, ThunkDispatch } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import athenaSlice from './athena';
import athenaAuthSlice from './athena/auth';
import worldMainSlice from './world/main';
import fitnessV1MainSlice from './fitness/v1/main';
import uberEatsAuthSlice from './ubereats/auth';
import uberEatsBasketSlice from './ubereats/basket';

import tiktokV2AuthSlice from './tiktok/v2/auth';
import tiktokV2ChatSlice from './tiktok/v2/chat';
import tiktokV2ModalSlice from './tiktok/v2/modal';
import tiktokV2PostSlice from './tiktok/v2/post';

export const rootReducer = combineReducers({
  athena: athenaSlice.reducer,
  athenaAuth: athenaAuthSlice.reducer,
  worldMain: worldMainSlice.reducer,
  fitnessV1Main: fitnessV1MainSlice.reducer,
  uberEatsAuth: uberEatsAuthSlice.reducer,
  uberEatsBasket: uberEatsBasketSlice.reducer,
  tiktokV2Auth: tiktokV2AuthSlice.reducer,
  tiktokV2Chat: tiktokV2ChatSlice.reducer,
  tiktokV2Modal: tiktokV2ModalSlice.reducer,
  tiktokV2Post: tiktokV2PostSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 1000,
  whitelist: ['athenaAuth', 'uberEatsAuth', 'tiktokV2Auth'],
  blacklist: ['athena', 'worldMain', 'fitnessV1Main', 'uberEatsBasket', 'tiktokV2Chat', 'tiktokV2Modal', 'tiktokV2Post'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
export default store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);