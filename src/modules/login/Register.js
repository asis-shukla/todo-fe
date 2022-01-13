import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import UserController from "./state-logic/userController";

const initialRegisterFormState = {
  fullname: "",
  email: "",
  password: "",
};

function Register() {
  const userController = UserController();
  const [registerFormState, setRegisterFormState] = useState(
    initialRegisterFormState
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    userController.registerNewUser(registerFormState);
    setRegisterFormState(initialRegisterFormState);
  };

  const handleOnKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleOnChange = (e) => {
    setRegisterFormState({
      ...registerFormState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1> SignUp : Register Yourself </h1>
      <form>
        <TextField
          type="text"
          fullWidth={true}
          label="Full Name"
          name="fullname"
          variant="outlined"
          autoFocus={true}
          required={true}
          onChange={handleOnChange}
          value={registerFormState.fullname}
          // error={errorMsg != null}
          // helperText={errorMsg}
          autoComplete="fullname"
        />
        <br />
        <br />
        <TextField
          type="email"
          fullWidth={true}
          label="Email"
          name="email"
          variant="outlined"
          required={true}
          onChange={handleOnChange}
          value={registerFormState.email}
          // error={errorMsg != null}
          // helperText={errorMsg}
          autoComplete="email"
        />
        <br />
        <br />
        <TextField
          type="password"
          name="password"
          fullWidth={true}
          label="Password"
          required={true}
          autoComplete="password"
          value={registerFormState.password}
          // error={errorMsg != null}
          // helperText={errorMsg}
          onChange={handleOnChange}
          onKeyPress={handleOnKeyPress}
        />
        <br />
        <br />
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          <span>SignUp</span>
        </Button>
      </form>
    </div>
  );
}

export default Register;
