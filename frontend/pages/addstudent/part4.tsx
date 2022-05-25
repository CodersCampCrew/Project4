import React from "react";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";
import addStudentService from "../../services/addStudentService";

const AddStudent4 = () => {
  const addStudentData = useSelector((state: AnyAction) => state.addStudent);
  console.log(addStudentData);
  const router = useRouter();
  const onClickFunction = (weekDay: string) => {
    router.push({
      pathname: "part5",
      query: { weekDay },
    });
  };
  const POSTData = () => {
    addStudentService.addStudent(addStudentData);
  };
  return (
    <>
      <h2 className="text-center">Wybierz dzień tygodnia</h2>
      <Button
        variant="secondary"
        className="m-2"
        onClick={() => onClickFunction("Poniedziałek")}
      >
        Poniedziałek
      </Button>
      {/* {lessons.map((e) => {
        e.day == 0 && (
          <p>
            od{e.startHour}:{e.startMinute}
          </p>
        );
      })} */}
      <Button
        variant="secondary"
        className="m-2"
        onClick={() => onClickFunction("Wtorek")}
      >
        Wtorek
      </Button>
      <Button
        variant="secondary"
        className="m-2"
        onClick={() => onClickFunction("Środa")}
      >
        Środa
      </Button>
      <Button
        variant="secondary"
        className="m-2"
        onClick={() => onClickFunction("Czwartek")}
      >
        Czwartek
      </Button>
      <Button
        variant="secondary"
        className="m-2"
        onClick={() => onClickFunction("Piątek")}
      >
        Piątek
      </Button>
      <div className="border-bottom m-2"></div>
      <Button
        variant="secondary"
        className="m-2"
        onClick={() => onClickFunction("Sobota")}
      >
        Sobota
      </Button>
      <Button
        variant="secondary"
        className="m-2"
        onClick={() => onClickFunction("Niedziela")}
      >
        Niedziela
      </Button>
      {addStudentData.lessons.length > 0 && (
        <Button className="m-2 mt-5" onClick={() => POSTData()}>
          Zapisz
        </Button>
      )}
    </>
  );
};

export default AddStudent4;
