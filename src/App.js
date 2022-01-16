import React, { useState } from "react";
import "./App.css";
import Todo from "./modules/todo/todo";
import LoginRegister from "./modules/login/LoginRegister";

function App() {
  const [loggedInUser, setloggedInUser] = useState(null);
  return (
    <>
      {loggedInUser ? (
        <Todo loggedInUser={loggedInUser} />
      ) : (
        <LoginRegister setloggedInUser={setloggedInUser} />
      )}
    </>
  );
}

export default App;
