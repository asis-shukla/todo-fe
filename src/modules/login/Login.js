import React, { useState } from "react";
import { Button, CircularProgress, TextField } from "@mui/material";
import UserController from "./state-logic/userController";

const initialLoginFormState = {
  email: "",
  password: "",
};

function Login() {
  const userController = UserController();
  const [loginFormState, setloginFormState] = useState(initialLoginFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    userController.makeUserlogin(loginFormState);
    setloginFormState(initialLoginFormState);
  };

  const handleOnKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleOnChange = (e) => {
    setloginFormState({
      ...loginFormState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Log In</h1>
      {userController.isUserLoginLoading ? (
        <CircularProgress />
      ) : (
        <form>
          <p style={{color: "red"}}>{ userController?.loggedInUserData?.error?.message} </p>
          <TextField
            type={"email"}
            fullWidth={true}
            required={true}
            label="Email"
            name="email"
            variant="outlined"
            autoFocus={true}
            onChange={handleOnChange}
            value={loginFormState.email}
            // error={errorMsg != null}
            // helperText={errorMsg}
            autoComplete="email"
          />
          <br />
          <br />
          <TextField
            type="password"
            name="password"
            required={true}
            fullWidth={true}
            label="Password"
            autoComplete="password"
            value={loginFormState.password}
            onChange={handleOnChange}
            onKeyPress={handleOnKeyPress}
          />
          <br />
          <br />
          <Button type="submit" variant="contained" onClick={handleSubmit}>
            LogIn
          </Button>
        </form>
      )}
    </div>
  );
}

export default Login;
