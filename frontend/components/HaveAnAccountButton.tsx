import { useRouter } from "next/router";
import React from "react";
import { Button } from "react-bootstrap";

export const HaveAnAccountButton = () => {
  const router = useRouter();
  return (
    <Button
      variant="secondary"
      className="m-3 w-100"
      onClick={() => router.push("login")}
    >
      Masz już konto? Zaloguj się
    </Button>
  );
};
