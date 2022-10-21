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
    userAdded: (auth, action: PayloadAction<UserItem>) => {
      auth.user = action.payload;
    },

    userRemoved: (auth) => {
      auth.user = initialState.user;
    },
  },
});

export const { userAdded, userRemoved } = authSlice.actions;
export default authSlice.reducer;
