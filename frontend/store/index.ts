import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import addStudentSlice from "./addStudentSlice";

const store = configureStore({
  reducer: {
    addStudent: addStudentSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
