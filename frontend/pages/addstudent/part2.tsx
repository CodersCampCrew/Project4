import React from "react";
import { minuteData, priceData } from "../../assets/carouselData";
import { Carousel } from "../../components/carousel";
import * as Yup from "yup";

import styles from "../../styles/addstudent/part2.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  Alert,
  Button,
  ButtonGroup,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormSelect,
  InputGroup,
} from "react-bootstrap";

const AddStudent2 = () => {
  const initialState = {
    address: "",
    localization: "",
  };

  const schema = Yup.object({
    address: Yup.string().required("Należy wpisać adres!"),
    localization: Yup.string()
      .oneOf(
        ["U nauczyciela", "U ucznia", "Na mieście"],
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
  };

  return (
    <>
      <div className={styles.carouselsContainer}>
        <div className={styles.carouselContainer}>
          <Carousel data={priceData} startIndex={9} />
        </div>
        <span className={styles.forSpan}>za</span>

        <div className={styles.carouselContainer}>
          <Carousel data={minuteData} startIndex={3} />
        </div>
      </div>
      <Form
        className="text-center mt-3 w-100"
        onSubmit={handleSubmit(submitForm)}
      >
        <p>{errors.localization?.message}</p>
        <FormGroup className="d-flex align-items-center">
          <InputGroup className="d-flex flex-column m-3">
            <Form.Check.Input
              id="inline-radio-1"
              type="radio"
              value="U ucznia"
              className={`d-none ${styles.input}`}
              {...register("localization")}
            />
            <Form.Check.Label
              htmlFor="inline-radio-1"
              className={`btn-sm btn-secondary rounded text-light ${styles.label}`}
            >
              U ucznia
            </Form.Check.Label>
          </InputGroup>
          <InputGroup className="d-flex flex-column m-3">
            <Form.Check.Input
              id="inline-radio-2"
              type="radio"
              value="U nauczyciela"
              className={`d-none ${styles.input}`}
              {...register("localization")}
            />
            <Form.Check.Label
              htmlFor="inline-radio-2"
              className={`btn-sm btn-secondary rounded text-light ${styles.label}`}
            >
              U nauczyciela
            </Form.Check.Label>
          </InputGroup>
          <InputGroup className="d-flex flex-column m-3">
            <Form.Check.Input
              id="inline-radio-3"
              type="radio"
              value="Na mieście"
              className={`d-none ${styles.input}`}
              {...register("localization")}
            />
            <Form.Check.Label
              htmlFor="inline-radio-3"
              className={`btn-sm btn-secondary rounded text-light ${styles.label}`}
            >
              Na mieście
            </Form.Check.Label>
          </InputGroup>
        </FormGroup>
        {errors?.localization?.message && (
          <Alert variant="danger">{errors?.localization?.message}</Alert>
        )}

        <FormGroup controlId="address">
          <FormControl
            type="text"
            placeholder="Adres"
            autoComplete="address"
            {...register("address")}
          />
        </FormGroup>
        {errors?.address?.message && (
          <Alert variant="danger">{errors?.address?.message}</Alert>
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
    </>
  );
};

export default AddStudent2;
