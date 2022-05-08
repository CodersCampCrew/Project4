import { HaveAnAccountButton } from "../components/HaveAnAccountButton";
import { RegisterForm } from "../components/RegisterForm";

const Register = () => {
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
