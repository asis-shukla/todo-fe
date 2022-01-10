import React, { useState } from "react";
import { Button, Container } from "@mui/material";
import Login from "./Login";
import Register from "./Register";

function LoginRegister() {
  const [showLoginForm, setshowLoginForm] = useState(true);

  const renderRequiredForm = () => {
    if (showLoginForm) {
      return <Login />;
    } else {
      return <Register />;
    }
  };

  return (
    <Container maxWidth="sm">
      {renderRequiredForm()}
      <span style={{ marginLeft: "35%" }}>
        {showLoginForm ? "Not a User" : "Already a user"}
        <Button onClick={() => setshowLoginForm(!showLoginForm)}>
          {showLoginForm ? "Register Here" : "Login Here"}
        </Button>
      </span>
    </Container>
  );
}

export default LoginRegister;
