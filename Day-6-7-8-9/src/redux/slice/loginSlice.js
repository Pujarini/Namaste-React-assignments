import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = {};
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
