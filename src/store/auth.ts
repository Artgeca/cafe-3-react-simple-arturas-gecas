import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserItem = { user: string, role: string };

export interface AuthState {
  userAuth: UserItem
}

const initialState: AuthState = { userAuth: { user: '', role: '' } };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authAdded: (auth, action: PayloadAction<AuthState>) => {
      auth.userAuth = action.payload.userAuth;
    },

    authRemoved: (auth) => {
      auth.userAuth = initialState.userAuth;
    },
  },
});

export const { authAdded: itemAdded, authRemoved: itemRemoved } = authSlice.actions;
export default authSlice.reducer;
