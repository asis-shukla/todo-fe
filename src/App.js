import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./modules/todo/todo";
import LoginRegister from "./modules/login/LoginRegister";
import { Container } from "@mui/material";
import axios from "axios";
import { setLoggedInUser } from "./modules/login/state-logic/userSlice";

function App() {
  const [loggedInUser, setloggedInUser] = useState(null);

  useEffect(() => {
    const access_token = localStorage.getItem("access-token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
    const userDetails = window.atob(access_token.split(".")[1]);
    setloggedInUser(JSON.parse(userDetails));
    setLoggedInUser(JSON.parse(userDetails))
  }, []);

  return (
    <Container>
      {loggedInUser ? (
        <Todo loggedInUser={loggedInUser} />
      ) : (
        <LoginRegister setloggedInUser={setloggedInUser} />
      )}
    </Container>
  );
}

export default App;
