import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React from "react";
import {
  Alert,
  Button,
  Form,
  FormControl,
  FormGroup,
  FormSelect,
} from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import styles from "../../styles/addstudent/part1.module.css";

const AddStudent = () => {
  const initialState = {
    studentName: "",
    parentName: "",
    kinShip: "",
    studentPhone: "",
    parentPhone: "",
  };
  const schema = Yup.object({
    studentName: Yup.string().required("Nazwa studenta jest wymagana"),
    parentName: Yup.string().required("Nazwa rodzica/opiekuna jest wymagana"),
    kinShip: Yup.string()
      .oneOf(
        ["Wujek", "Ciocia", "Mama", "Tata", "Brak"],
        "Należy wybrać jedną z poniższych opcji!"
      )
      .required("Należy wybrać opcję!")
      .nullable(),
    studentPhone: Yup.string().required("Numer telefonu jest konieczny"),
    parentPhone: Yup.string().required("Hasło jest wymagane"),
  });

  type Props = InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>({ resolver: yupResolver(schema) });

  const router = useRouter();

  const submitForm: SubmitHandler = async (data) => {
    
    router.push(
      pathname: "part2",
    );
  };

  return (
    <Form
      className="text-center mt-3 w-100"
      onSubmit={handleSubmit(submitForm)}
    >
      <FormGroup className="mb-3" controlId="studentName">
        <FormControl
          type="text"
          placeholder="Imię i Nazwisko ucznia"
          autoComplete="studentName"
          {...register("studentName")}
        />
      </FormGroup>
      {errors?.studentName?.message && (
        <Alert variant="danger">{errors?.studentName?.message}</Alert>
      )}

      <FormGroup className="mb-3 d-flex" controlId="parentName">
        <FormControl
          type="text"
          placeholder="Imię i Nazwisko rodzica"
          autoComplete="parentName"
          {...register("parentName")}
        />
      </FormGroup>
      {errors?.parentName?.message && (
        <Alert variant="danger">{errors?.parentName?.message}</Alert>
      )}

      <FormGroup className="mb-3 d-flex">
        <FormSelect autoComplete="kinShip" {...register("kinShip")}>
          <option>Pokrewieństwo</option>
          <option>Wujek</option>
          <option>Ciocia</option>
          <option>Mama</option>
          <option>Tata</option>
          <option>Brak</option>
        </FormSelect>
      </FormGroup>
      {errors?.kinShip?.message && (
        <Alert variant="danger">{errors?.kinShip?.message}</Alert>
      )}
      {/* <FormGroup className="mb-3" controlId="kinShip">
        <FormControl
          type="kinShip"
          placeholder="E-kinShip"
          autoComplete="kinShip"
          {...register("kinShip")}
        />
      </FormGroup> */}
      {/* {errors?.kinShip?.message && (
        <Alert variant="danger">{errors?.kinShip?.message}</Alert>
      )} */}

      <FormGroup className="mb-3" controlId="studentPhone">
        <FormControl
          type="text"
          placeholder="Telefon kontaktowy ucznia"
          autoComplete="studentPhone"
          {...register("studentPhone")}
        />
      </FormGroup>
      {errors?.studentPhone?.message && (
        <Alert variant="danger">{errors?.studentPhone?.message}</Alert>
      )}

      <FormGroup className="mb-3" controlId="parentPhone">
        <FormControl
          type="text"
          placeholder="Telefon kontaktowy rodzica/opiekuna"
          autoComplete="parentPhone"
          {...register("parentPhone")}
        />
      </FormGroup>
      {errors?.parentPhone?.message && (
        <Alert variant="danger">{errors?.parentPhone?.message}</Alert>
      )}

      <FormGroup>
        <Button
          variant="primary"
          type="submit"
          className={`${styles.addStudentButton} mb-3 mt-3 w-100`}
        >
          Dalej
        </Button>
      </FormGroup>
    </Form>
  );
};

export default AddStudent;
