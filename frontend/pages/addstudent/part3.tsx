import { useRouter } from "next/router";
import React from "react";
import { Button } from "react-bootstrap";
import { setIsLessonRegular } from "../../store/addStudentSlice";

const AddStudent3 = () => {
  const router = useRouter();
  const onClickFunction = (e: boolean) => {
    setIsLessonRegular({ isLessonRegular: e });
    router.push("part4");
  };
  return (
    <>
      <h2 className="m-3 text-center">Terminy zajęć</h2>
      <Button
        variant="secondary"
        className="mt-3"
        onClick={() => onClickFunction(true)}
      >
        Lekcje regularne
      </Button>
      <span className="m-3 text-center">lub</span>
      <Button
        variant="outline-secondary"
        onClick={() => onClickFunction(false)}
      >
        Lekcje nieregularne
      </Button>
    </>
  );
};

export default AddStudent3;
