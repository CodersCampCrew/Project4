import React from "react";
import { useSelector } from "react-redux";
import { LoginForm } from "../components/LoginForm";
import { AnyAction } from "@reduxjs/toolkit";
import Calendar from '../pages/calendar'

const Login = () => {
	const { logged } = useSelector((state: AnyAction) => state.auth);

	if (logged) {
		return <Calendar/>
	}

	return (
		<div className="d-flex flex-column align-items-center m-3">
			<LoginForm />
		</div>
	);
};

export default Login;
