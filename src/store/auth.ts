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
    authAdded: (auth, action: PayloadAction<AuthState>) => {
      auth.user = action.payload.user;
    },

    authRemoved: (auth) => {
      auth.user = initialState.user;
    },
  },
});

export const { authAdded, authRemoved } = authSlice.actions;
export default authSlice.reducer;
