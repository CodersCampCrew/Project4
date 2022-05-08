import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./RegisterForm.module.css";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Button,
  Form,
  FormControl,
  FormGroup,
  FormText,
} from "react-bootstrap";
import userService from "../services/userService";
import { useRouter } from "next/router";

export const RegisterForm = () => {
  const initialState = {
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    category: "",
  };

  const schema = Yup.object({
    name: Yup.string().required("Nazwa użytkownika jest wymagana"),
    username: Yup.string().required("Nickname jest wymagany"),
    email: Yup.string()
      .email("Email musi być poprawnego formatu")
      .required("Email jest wymagany"),
    phone: Yup.string().required("Numer telefonu jest konieczny"),
    password: Yup.string().required("Hasło jest wymagane"),
    category: Yup.string()
      .oneOf(["Student", "Tutor"])
      .required("Należy wybrać opcję!")
      .nullable(),
  });

  type Props = InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>({ resolver: yupResolver(schema) });

  const router = useRouter();

  const submitForm: SubmitHandler = async (data) => {
    console.log(data);
    router.push("confirm");
  };

  return (
    <Form
      className="text-center mt-3 w-100"
      onSubmit={handleSubmit(submitForm)}
    >
      <FormGroup className="mb-3" controlId="name">
        <FormControl
          type="text"
          placeholder="Imię i Nazwisko"
          autoComplete="name"
          {...register("name")}
        />
      </FormGroup>
      {errors?.username?.message && (
        <Alert variant="danger">{errors?.name?.message}</Alert>
      )}

      <FormGroup className="mb-3 d-flex" controlId="username">
        <FormControl
          type="text"
          placeholder="Nazwa użytkownika"
          autoComplete="username"
          {...register("username")}
        />
      </FormGroup>
      {errors?.name?.message && (
        <Alert variant="danger">{errors?.username?.message}</Alert>
      )}

      <FormGroup className="mb-3" controlId="email">
        <FormControl
          type="text"
          placeholder="E-mail"
          autoComplete="email"
          {...register("email")}
        />
      </FormGroup>
      {errors?.email?.message && (
        <Alert variant="danger">{errors?.email?.message}</Alert>
      )}

      <FormGroup className="mb-3" controlId="phone">
        <FormControl
          type="text"
          placeholder="Telefon kontaktowy"
          autoComplete="phone"
          {...register("phone")}
        />
      </FormGroup>
      {errors?.phone?.message && (
        <Alert variant="danger">{errors?.phone?.message}</Alert>
      )}

      <FormGroup className="mb-3" controlId="password">
        <FormControl
          type="password"
          placeholder="Hasło"
          autoComplete="current-password"
          {...register("password")}
        />
      </FormGroup>
      {errors?.password?.message && (
        <Alert variant="danger">{errors?.password?.message}</Alert>
      )}

      <FormGroup>
        {["Student", "Tutor"].map((value) => (
          <Form.Check
            inline
            label={value}
            value={value}
            type="radio"
            id={`inline-radio-${value}`}
            key={value}
            {...register("category")}
          />
        ))}
      </FormGroup>
      {errors?.category?.message && (
        <Alert variant="danger">{errors?.category?.message}</Alert>
      )}

      <FormText>Rejestrując się akceptujesz warunki regulaminu</FormText>

      <FormGroup>
        <Button variant="primary" type="submit" className="mb-3 mt-3 w-100">
          Zarejestruj się
        </Button>
      </FormGroup>
    </Form>
  );
};
