import { createSlice } from "@reduxjs/toolkit";
import userService from "../../services/userService";



const token = () => {
	const token: string = JSON.stringify(localStorage.getItem("token"));
	return token;
};

const userIsLoggedIn = !!token

const authSlice = createSlice({
	name: "auth",
	initialState: { isLoggedIn: userIsLoggedIn},
	reducers: {
		login(state, action) {
			state.isLoggedIn = true;
			const response = userService.login
			localStorage.setItem("token", JSON.stringify(action.payload));
		},
		logout(state, action) {
			state.isLoggedIn = false;
			localStorage.removeItem("token");
		},
	},
});

export const authAction = authSlice.actions;

export default authSlice;
