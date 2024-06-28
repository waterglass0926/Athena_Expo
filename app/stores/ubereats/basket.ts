import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Constants from '@/constants';
import Functions, { getAllCartFoods, getTotalCartItemPrice } from '@/utils';

interface ActionType<T> {
  state: any;
  payload: T;
};

interface StateType {
  user: any;
};

const initialState: StateType = {
  items: [],
};

// Define your slice
export default uberEatsBasketSlice = createSlice({
  name: 'uberEatsBasket',
  initialState,
  reducers: {
    updateBasket: (state, action: PayloadAction<boolean>) => {
      state.items = action.payload;
    },
  },
});

export const { updateBasket } = uberEatsBasketSlice.actions;

export const selectCartItems = state => state.uberEatsBasket.items;
export const selectTotalPrice = (state) => getTotalCartItemPrice(state.uberEatsBasket.items);
export const selectTotalItems = (state) => getAllCartFoods(state.uberEatsBasket.items);