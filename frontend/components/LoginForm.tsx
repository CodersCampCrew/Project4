import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Alert,
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  Spinner,
} from "react-bootstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import { InferType } from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { AnyAction } from "@reduxjs/toolkit";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { user, loading, logged } = useSelector(
    (state: AnyAction) => state.auth
  );

  const initialState = {
    email: "",
    password: "",
  };

  const schema = Yup.object({
    email: Yup.string().required("Nazwa użytkownika jest wymagana"),
    password: Yup.string().required("Hasło jest wymagane"),
  });

  type Props = InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>({ resolver: yupResolver(schema) });

  const router = useRouter();

  const submitForm: SubmitHandler<Props> = async ({ email, password }) => {
    dispatch(login({ email, password }) as unknown as AnyAction);
    router.push("/");
  };

  if (loading) {
    return <Spinner animation={"border"} />;
  }

  return (
    <>
      <h2>Zaloguj się</h2>
      <Form
        className="text-center mt-3 w-100"
        onSubmit={handleSubmit(submitForm)}
      >
        <FormGroup className="mb-3 d-flex" controlId="email">
          <FormControl
            type="text"
            placeholder="Nazwa użytkownika"
            autoComplete="email"
            {...register("email")}
          />
        </FormGroup>
        {errors?.email?.message && (
          <Alert variant="danger">{errors?.email?.message}</Alert>
        )}

        <FormGroup className="mb-5" controlId="password">
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
        <Link href="/forgot">Nie pamiętam hasła</Link>

        <FormGroup>
          <Button variant="primary" type="submit" className="mb-3 mt-1 w-100">
            Zaloguj się
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};
