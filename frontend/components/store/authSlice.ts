import { createSlice } from "@reduxjs/toolkit";

const initialUser = () => {
	const initialUser = localStorage.getItem("user");
	return initialUser;
};

const authSlice = createSlice({
	name: "auth",
	initialState: { isLoggedIn: initialUser },
	reducers: {
		login: (state, action) => {
			state.isLoggedIn = action.payload;
			localStorage.setItem("user", JSON.stringify(action.payload));
		},
		logout: (state, action) => {
			state.isLoggedIn = null;
			localStorage.removeItem("user");
		},
	},
});

export const authAction = authSlice.actions;

export default authSlice;
