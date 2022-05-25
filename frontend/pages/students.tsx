import React from "react";
import { Button } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";
import styles from "../styles/Students.module.css";
import { useRouter } from "next/router";

const Students = () => {
  const router = useRouter();
  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-75">
      <Button
        variant="primary"
        className={`${styles.addButton} w-75`}
        onClick={() => router.push("addstudent/part1")}
      >
        + Dodaj pierwszego ucznia
      </Button>
      <span className="text-center m-3">lub</span>
      <Button variant="primary" className={`${styles.editProfileButton} w-75`}>
        <Pencil />
        &nbsp;Uzupełnij profil
      </Button>
    </div>
  );
};

export default Students;
