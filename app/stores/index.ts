import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import athenaSlice from './athena';

export const rootReducer = combineReducers({
  athena: athenaSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: 1000,
  whitelist: [''],
  blacklist: ['athena'],
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
