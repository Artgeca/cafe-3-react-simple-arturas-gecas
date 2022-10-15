import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CartItem = { id: string, count: number };

export interface CartState {
  items: CartItem[],
  count: number
}

const initialState: CartState = { items: [], count: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (cart, action: PayloadAction<CartItem>) => {
      cart.items.push(action.payload);
      console.log(action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
