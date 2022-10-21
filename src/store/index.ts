import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth';
import enititiesReducer from './entities';
import cartToLocalStorage from './middleware/cart-to-local-storage';

export const store = configureStore({
  reducer: { auth: authReducer, entities: enititiesReducer },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), cartToLocalStorage],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
