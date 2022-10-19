import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import cartToLocalStorage from './middleware/cart-to-local-storage';

export const store = configureStore({
  reducer: { cart: cartReducer },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), cartToLocalStorage],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
