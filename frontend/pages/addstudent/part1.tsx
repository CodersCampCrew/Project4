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
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import styles from "../../styles/addstudent/part1.module.css";
import { saveFormData } from "../../store/addStudentSlice";

const AddStudent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const initialState = {
    studentName: "",
    parentName: "",
    kinship: "",
    studentPhone: "",
    parentPhone: "",
    schoolType: "",
    class: "",
  };
  const schema = Yup.object({
    studentName: Yup.string().required("Nazwa studenta jest wymagana"),
    parentName: Yup.string().required("Nazwa rodzica/opiekuna jest wymagana"),
    studentEmail: Yup.string().required("Nazwa użytkownika jest wymagana"),
    kinship: Yup.string()
      .oneOf(
        ["Wujek", "Ciocia", "Mama", "Tata", "Brak"],
        "Należy wybrać jedną z poniższych opcji!"
      )
      .required("Należy wybrać opcję!")
      .nullable(),
    studentPhone: Yup.string().required("Numer telefonu jest konieczny"),
    parentPhone: Yup.string().required("Hasło jest wymagane"),
    schoolType: Yup.string()
      .oneOf(
        ["Podstawowa", "Średnia"],
        "Należy wybrać jedną z poniższych opcji!"
      )
      .required("Należy wybrać opcję!")
      .nullable(),
    class: Yup.string()
      .oneOf(
        [
          "Pierwsza",
          "Druga",
          "Trzecia",
          "Czwarta",
          "Piąta",
          "Szósta",
          "Siódma",
          "Ósma",
        ],
        "Należy wybrać jedną z poniższych opcji!"
      )
      .required("Należy wybrać opcję!")
      .nullable(),
  });

  type Props = InferType<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>({ resolver: yupResolver(schema) });

  const submitForm: SubmitHandler = async (data) => {
    console.log(data);
    dispatch(saveFormData(data));
    router.push("part2");
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

      <FormGroup className="mb-3 d-flex" controlId="studentEmail">
        <FormControl
          type="text"
          placeholder="Email ucznia"
          autoComplete="studentEmail"
          {...register("studentEmail")}
        />
      </FormGroup>
      {errors?.parentName?.message && (
        <Alert variant="danger">{errors?.parentName?.message}</Alert>
      )}

      <FormGroup className="mb-3 d-flex">
        <FormSelect autoComplete="kinship" {...register("kinship")}>
          <option>Pokrewieństwo</option>
          <option>Wujek</option>
          <option>Ciocia</option>
          <option>Mama</option>
          <option>Tata</option>
          <option>Brak</option>
        </FormSelect>
      </FormGroup>
      {errors?.kinship?.message && (
        <Alert variant="danger">{errors?.kinship?.message}</Alert>
      )}

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

      <FormGroup className="mb-3" controlId="schoolType">
        <FormSelect autoComplete="schoolType" {...register("schoolType")}>
          <option>Szkoła</option>
          <option>Podstawowa</option>
          <option>Średnia</option>
        </FormSelect>
      </FormGroup>
      {errors?.schoolType?.message && (
        <Alert variant="danger">{errors?.schoolType?.message}</Alert>
      )}

      <FormGroup className="mb-3" controlId="class">
        <FormSelect autoComplete="class" {...register("class")}>
          <option>Klasa</option>
          <option>Pierwsza</option>
          <option>Druga</option>
          <option>Trzecia</option>
          <option>Czwarta</option>
          <option>Piąta</option>
          <option>Szósta</option>
          <option>Siódma</option>
          <option>Ósma</option>
        </FormSelect>
      </FormGroup>
      {errors?.class?.message && (
        <Alert variant="danger">{errors?.class?.message}</Alert>
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
