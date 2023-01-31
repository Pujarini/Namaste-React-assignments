import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slice/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
