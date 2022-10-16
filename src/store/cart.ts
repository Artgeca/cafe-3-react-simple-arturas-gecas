import {
  createSelector, createSlice, PayloadAction,
} from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from './index';

type CartItem = { id: string, count: number };

export interface CartState {
  items: CartItem[],
}

const initialState: CartState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    itemAdded: (cart, action: PayloadAction<CartItem>) => {
      const index = cart.items.findIndex((x) => x.id === action.payload.id);
      if (index !== -1) {
        cart.items[index].count = action.payload.count;
      } else {
        cart.items.push(action.payload);
      }
    },

    itemRemoved: (cart, action: PayloadAction<string>) => {
      const index = cart.items.findIndex((x) => x.id === action.payload);
      cart.items.splice(index, 1);
    },
  },
});

export const { itemAdded, itemRemoved } = cartSlice.actions;
export default cartSlice.reducer;
