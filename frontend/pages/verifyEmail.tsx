import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
import userService from "../services/userService";

const VerifyEmail = () => {
  const router = useRouter();
  useEffect(() => {
    userService.verifyEmail(router.query.token as any);
  }, []);

  return (
    <Alert className="mt-5 text-center">Email zweryfikowany poprawnie</Alert>
  );
};

export default VerifyEmail;
