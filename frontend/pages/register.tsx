import { HaveAnAccountButton } from "../components/HaveAnAccountButton";
import { RegisterForm } from "../components/RegisterForm";
import { AnyAction } from "@reduxjs/toolkit";
import Calendar from "../pages/calendar";
import { useSelector } from "react-redux";
const Register = () => {
  const { logged } = useSelector((state: AnyAction) => state.auth);

  if (logged) {
    return <Calendar />;
  }
  return (
    <div className="d-flex flex-column align-items-center m-3">
      <h2>Zarejestruj się</h2>
      <RegisterForm />
      <div className="text-center">lub</div>
      <HaveAnAccountButton></HaveAnAccountButton>
    </div>
  );
};

export default Register;
