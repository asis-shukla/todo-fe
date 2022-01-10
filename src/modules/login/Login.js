import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const initialLoginFormState = {
  username: "",
  password: "",
};

function Login() {
  const [loginFormState, setloginFormState] = useState(initialLoginFormState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("entered data", loginFormState);
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
      <form>
        <TextField
          type="text"
          fullWidth={true}
          label="Username"
          name="username"
          variant="outlined"
          autoFocus={true}
          onChange={handleOnChange}
          value={loginFormState.username}
          // error={errorMsg != null}
          // helperText={errorMsg}
          autoComplete="username"
        />
        <br />
        <br />
        <TextField
          type="password"
          name="password"
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
          <span>LogIn</span>
        </Button>
      </form>
    </div>
  );
}

export default Login;
