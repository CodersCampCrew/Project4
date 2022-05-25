import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userService from "../services/userService";
const week = {
  Poniedziałek: 0,
  Wtorek: 1,
  Środa: 2,
  Czwartek: 3,
  Piątek: 4,
  Sobota: 5,
  Niedziela: 6,
};
const initialState = {
  studentName: "",
  parentName: "",
  kinship: "",
  studentEmail: "",
  studentPhone: 0,
  parentPhone: 0,
  schoolType: "",
  class: "",
  localization: "",
  prizeTime: "60 min",
  prize: "50",
  address: "",
  isLessonRegular: null,
  lessons: [],
};

const addStudentSlice = createSlice({
  name: "addStudent",
  initialState,
  reducers: {
    saveFormData(state, action) {
      state.studentName = action.payload.studentName;
      state.parentName = action.payload.parentName;
      state.studentEmail = action.payload.studentEmail;
      state.kinship = action.payload.kinship;
      state.studentPhone = action.payload.studentPhone;
      state.parentPhone = action.payload.parentPhone;
      state.schoolType = action.payload.schoolType;
      state.class = action.payload.class;
    },
    saveFormData2(state, action) {
      state.prizeTime = action.payload.prizeTime;
      state.prize = action.payload.prize;
      state.localization = action.payload.localization;
      state.address = action.payload.address;
    },
    setIsLessonRegular(state, action) {
      state.isLessonRegular = action.payload.studentName;
    },
    addLessonDayAndHour(state, action) {
      state.lessons.push({
        day: week[action.payload.day],
        startTime: `${action.payload.startHour}:${action.payload.startMinute}`,
        duration: action.payload.timeOfLesson,
      });
    },
  },
});

export const {
  saveFormData,
  saveFormData2,
  setIsLessonRegular,
  addLessonDayAndHour,
} = addStudentSlice.actions;

export default addStudentSlice;
