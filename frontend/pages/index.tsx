import type { NextPage } from "next";
import { useSelector } from "react-redux";
import HomePage from "../components/home/HomePage";
import { AnyAction } from "@reduxjs/toolkit";
import Calendar from "./calendar";
const Home: NextPage = () => {
  const { logged } = useSelector((state: AnyAction) => state.auth);

  if (!logged) {
    return <HomePage />;
  } else {
    return <Calendar />;
  }
};

export default Home;
