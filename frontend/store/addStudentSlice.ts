import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../services/userService";

const initialState = {
  studentName: "",
  parentName: "",
  kinship: "",
  studentPhone: 0,
  parentPhone: 0,
  schoolType: "",
  class: "",
};

const addStudentSlice = createSlice({
  name: "addStudent",
  initialState,
  reducers: {
    saveFormData(state, action) {
      state.studentName = action.payload.studentName;
      state.parentName = action.payload.parentName;
      state.kinship = action.payload.kinship;
      state.studentPhone = action.payload.studentPhone;
      state.parentPhone = action.payload.parentPhone;
      state.schoolType = action.payload.schoolType;
      state.class = action.payload.class;
    },
  },
});

export const { saveFormData } = addStudentSlice.actions;

export default addStudentSlice;
