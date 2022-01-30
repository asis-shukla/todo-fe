import React, { useState, useEffect } from "react";
import { Button, Container } from "@mui/material";
import { CircularProgress } from "@mui/material";
import Login from "./Login";
import Register from "./Register";
import UserController from "./state-logic/userController";

function LoginRegister({ setloggedInUser }) {
  const [showLoginForm, setshowLoginForm] = useState(true);
  const userController = UserController();

  useEffect(() => {
    if (userController.addNewUserStatus) {
      const { error } = userController.addNewUserStatus;
      if (error && error.type === "VALIDATION_ERROR") {
        setshowLoginForm(false);
      } else if (error && error.type === "DUPLICATE_RESOURCE_ERROR") {
        setshowLoginForm(true);
      } else {
        setshowLoginForm(true);
      }
    }
  }, [userController.addNewUserStatus, setshowLoginForm]);

  useEffect(() => {
    if (
      userController.loggedInUserData &&
      !userController.loggedInUserData.error
    ) {
      setloggedInUser(userController.loggedInUserData);
    } else {
      setloggedInUser(null);
    }
  }, [userController.loggedInUserData, setloggedInUser]);

  const renderRequiredForm = () => {
    if (showLoginForm) {
      return <Login />;
    } else {
      return <Register />;
    }
  };

  return userController.isUserRegisterLoading ? (
    <CircularProgress />
  ) : (
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
