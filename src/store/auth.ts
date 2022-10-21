import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserItem = { email: string, role: string };

export interface AuthState {
  user: UserItem | null
}

const initialState: AuthState = { user: null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authAdded: (auth, action: PayloadAction<UserItem>) => {
      auth.user = action.payload;
    },

    authRemoved: (auth) => {
      auth.user = null;
    },
  },
});

export const { authAdded, authRemoved } = authSlice.actions;
export default authSlice.reducer;
