import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      console.log(state.user);
      state.role = null;
    },
    setUserSubscription: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { login, logout, setUserSubscription } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectRole = (state) => state.user.role;

export default userSlice.reducer;
