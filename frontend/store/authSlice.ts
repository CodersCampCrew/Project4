import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userService from '../services/userService';

const initialState = {
  loading: true,
  logged: false,
  user: userService.getTokenFromLocalStorage()
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }) => {
    const response = await userService.login({ email, password });
    return response;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      userService.logout();
      state.user = {};
      state.logged = false;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.user = {};
      state.logged = false;
      state.loading = true;
    }),
      builder.addCase(login.rejected, (state) => {
        state.user = {};
        state.logged = false;
        state.loading = false;
      }),
      builder.addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.logged = true;
        state.loading = false;
      });
  }
});

export const authAction = authSlice.actions;

export default authSlice;
