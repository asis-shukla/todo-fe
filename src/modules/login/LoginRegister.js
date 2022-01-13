import React, { useState, useEffect } from "react";
import { Button, Container } from "@mui/material";
import Login from "./Login";
import Register from "./Register";
import UserController from "./state-logic/userController";

function LoginRegister() {
  const [showLoginForm, setshowLoginForm] = useState(true);
  const userController = UserController();

  useEffect(() => {
    setshowLoginForm(userController.addNewUserStatus);
  }, [userController.addNewUserStatus, setshowLoginForm]);

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
        <Button
          onClick={() => {
            userController.resetAddNewUserStatus();
            setshowLoginForm(!showLoginForm);
          }}
        >
          {showLoginForm ? "Register Here" : "Login Here"}
        </Button>
      </span>
    </Container>
  );
}

export default LoginRegister;
