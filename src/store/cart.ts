import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = { id: string, count: number };

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

      localStorage.setItem('cart', JSON.stringify(cart.items));
    },

    itemRemoved: (cart, action: PayloadAction<string>) => {
      const index = cart.items.findIndex((x) => x.id === action.payload);
      cart.items.splice(index, 1);

      localStorage.setItem('cart', JSON.stringify(cart.items));
    },

    itemsRemoved: (cart) => {
      cart.items = initialState.items;
      localStorage.setItem('cart', JSON.stringify(cart.items));
    },
  },
});

export const {
  itemAdded, itemRemoved, itemsRemoved,
} = cartSlice.actions;
export default cartSlice.reducer;
