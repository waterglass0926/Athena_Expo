import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import athenaSlice from './athena';
import athenaAuthSlice from './athena/auth';
import worldMainSlice from './world/main';
import fitnessV1MainSlice from './fitness/v1/main';
import uberEatsAuthSlice from './ubereats/auth';
import uberEatsBasketSlice from './ubereats/basket';

export const rootReducer = combineReducers({
  athena: athenaSlice.reducer,
  athenaAuth: athenaAuthSlice.reducer,
  worldMain: worldMainSlice.reducer,
  fitnessV1Main: fitnessV1MainSlice.reducer,
  uberEatsAuth: uberEatsAuthSlice.reducer,
  uberEatsBasket: uberEatsBasketSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 1000,
  whitelist: ['athenaAuth', 'uberEatsAuth'],
  blacklist: ['athena', 'worldMain', 'fitnessV1Main', 'uberEatsBasket'],
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
