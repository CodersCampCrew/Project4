import React from "react";
import { Button, Form } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  hourData,
  lessonTime,
  lessonTimeAsNumber,
  minuteData,
} from "../../assets/carouselData";
import { Carousel } from "../../components/carousel";
import styles from "../../styles/addstudent/part5.module.css";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { addLessonDayAndHour } from "../../store/addStudentSlice";
import { useRouter } from "next/router";

const AddStudent5 = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { query } = useRouter();

  const schema = Yup.object({
    startHour: Yup.string().required("Należy zwpisać adres!").default("10"),
    startMinute: Yup.string().required("Należy wpisać adres!").default("00"),
    timeOfLesson: Yup.number().required("Należy wpisać adres!").default(60),
  });

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Props>({ resolver: yupResolver(schema) });

  setValue("day", query.weekDay);

  const submitForm: SubmitHandler = async (data) => {
    dispatch(addLessonDayAndHour(data));
    router.push("part4");
  };
  return (
    <>
      <h2 className="m-5 text-center">Wybierz dzień tygodnia</h2>
      <div className="bg-secondary w-100 text-light text-center">
        {query.weekDay}
      </div>
      <Form onSubmit={handleSubmit(submitForm)}>
        <div>
          <div className="text-center mt-5 mb-3">Początek zajęć</div>
          <div className={styles.carouselsContainer}>
            <div className={styles.carouselContainer}>
              <Carousel
                data={hourData}
                returnData={hourData}
                startIndex={10}
                onChange={(value) => setValue("startHour", value)}
              ></Carousel>
            </div>

            <span className={styles.forSpan}>:</span>

            <div className={styles.carouselContainer}>
              <Carousel
                data={minuteData}
                returnData={minuteData}
                startIndex={0}
                onChange={(value) => setValue("startMinute", value)}
              ></Carousel>
            </div>
          </div>
        </div>
        <div className="text-center mt-5 mb-3">Czas trwania</div>
        <div className={styles.carouselsContainer}>
          <span className={styles.forSpan}></span>
          <Carousel
            data={lessonTime}
            returnData={lessonTimeAsNumber}
            startIndex={3}
            onChange={(value) => setValue("timeOfLesson", value)}
          ></Carousel>
        </div>
        <Button variant="secondary" type="submit" className="mt-5 w-100">
          Zapisz
        </Button>
      </Form>
    </>
  );
};
export default AddStudent5;
