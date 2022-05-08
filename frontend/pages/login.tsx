import React from "react";
import { LoginForm } from "../components/LoginForm";

const Login = () => {
  return (
    <div className="d-flex flex-column align-items-center m-3">
      <h2>Zaloguj się</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
