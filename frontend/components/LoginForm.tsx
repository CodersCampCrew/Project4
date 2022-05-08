import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
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
import Link from "next/link";

export const LoginForm = () => {
  const initialState = {
    name: "",
    password: "",
  };

  const schema = Yup.object({
    name: Yup.string().required("Nazwa użytkownika jest wymagana"),
    password: Yup.string().required("Hasło jest wymagane"),
  });

  type Props = InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>({ resolver: yupResolver(schema) });

  const router = useRouter();

  const submitForm: SubmitHandler = async (data) => {
    userService.login(data);
    console.log(data);
    router.push("confirm");
  };

  return (
    <Form
      className="text-center mt-3 w-100"
      onSubmit={handleSubmit(submitForm)}
    >
      <FormGroup className="mb-3 d-flex" controlId="username">
        <FormControl
          type="text"
          placeholder="Nazwa użytkownika"
          autoComplete="username"
          {...register("username")}
        />
      </FormGroup>
      {errors?.name?.message && (
        <Alert variant="danger">{errors?.name?.message}</Alert>
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
  );
};
