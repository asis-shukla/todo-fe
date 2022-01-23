import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./modules/todo/todo";
import LoginRegister from "./modules/login/LoginRegister";
import axios from "axios";
import ResponsiveAppBar from "./ResponsiveAppBar";

function App() {
  const [loggedInUser, setloggedInUser] = useState(null);
  const access_token = localStorage.getItem("access-token");

  useEffect(() => {
    if (access_token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
      const userDetails = window.atob(access_token.split(".")[1]);
      setloggedInUser(JSON.parse(userDetails));
    } else {
      setloggedInUser(null);
    }
  }, [access_token]);

  const handleLogOut = (e) => {    
    localStorage.removeItem("access-token");
    setloggedInUser(null);
  };

  return (
    <div>
      <ResponsiveAppBar
        handleLogOut={handleLogOut}
        loggedInUser={loggedInUser}
      />
      {loggedInUser ? (
        <Todo loggedInUser={loggedInUser} />
      ) : (
        <LoginRegister setloggedInUser={setloggedInUser} />
      )}
    </div>
  );
}

export default App;
