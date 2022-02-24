import React, { useState, useEffect } from "react";
import { Button, Container } from "@mui/material";
import { CircularProgress } from "@mui/material";
import Login from "./Login";
import Register from "./Register";
import UserController from "./state-logic/userController";

function LoginRegister({ setloggedInUser }) {
  const [showLoginForm, setshowLoginForm] = useState(true);
  const {
    addNewUserStatus,
    loggedInUserData,
    isUserRegisterLoading,
    resetAddNewUserStatus,
  } = UserController();

  useEffect(() => {
    if (addNewUserStatus) {
      const { error } = addNewUserStatus;
      if (error && error.type === "VALIDATION_ERROR") {
        setshowLoginForm(false);
      } else if (error && error.type === "DUPLICATE_RESOURCE_ERROR") {
        setshowLoginForm(true);
      } else {
        setshowLoginForm(true);
      }
    }
  }, [addNewUserStatus, setshowLoginForm]);

  useEffect(() => {
    if (loggedInUserData && !loggedInUserData.error) {
      setloggedInUser(loggedInUserData);
    } else {
      setloggedInUser(null);
    }
  }, [loggedInUserData, setloggedInUser]);

  const renderRequiredForm = () => {
    if (showLoginForm) {
      return <Login />;
    } else {
      return <Register />;
    }
  };

  return isUserRegisterLoading ? (
    <CircularProgress />
  ) : (
    <Container maxWidth="sm">
      <p style={{ color: "red" }}> {addNewUserStatus?.error?.message} </p>
      {renderRequiredForm()}
      <span style={{ marginLeft: "35%" }}>
        {showLoginForm ? "Not a User" : "Already a user"}
        <Button
          onClick={() => {
            resetAddNewUserStatus();
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
