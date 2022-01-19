import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Divider } from "@mui/material";
import TodoList from "./todoList";
import "./todo.css";
import { TodoController } from "./todoController";

function Todo({ loggedInUser }) {
  const [todoFormValue, settodoFormValue] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const todoController = TodoController();

  useEffect(() => {
    todoController.fetchAllTodos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoFormValue === "") {
      setErrorMsg("The Input box is empty");
      return;
    }
    const dataObj = {
      todo: todoFormValue,
      done: false,
    };
    todoController.addNewTodo(dataObj);
    settodoFormValue("");
  };

  const handleOnKeyPress = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };
  const handleOnChange = (e) => {
    setErrorMsg(null);
    settodoFormValue(e.target.value);
  };

  const handleAllDelete = (e) => {
    todoController.deleteAllTodos();
  };

  return (
    <div className="todo-wrapper">
      <p>
        Welcome <strong><em>{loggedInUser.fullname}</em></strong>🙂
      </p>
      <p>
        Email: <em> {loggedInUser.email} </em>
      </p>
      <Typography
        sx={{
          fontSize: "2rem",
          color: "rgb(25, 118, 210)",
        }}
      >
        Todo List
      </Typography>
      <form>
        <TextField
          id="todo-text"
          label="Your Todo"
          variant="outlined"
          autoFocus={true}
          size="small"
          onKeyPress={handleOnKeyPress}
          onChange={handleOnChange}
          value={todoFormValue}
          error={errorMsg != null}
          helperText={errorMsg}
        />
        <Button
          variant="contained"
          sx={{ margin: "0px 10px 0px 10px" }}
          type="submit"
          onClick={handleSubmit}
        >
          Save
        </Button>
      </form>
      <Button
        variant="contained"
        color="error"
        sx={{ margin: "10px 0px 5px 0px" }}
        onClick={handleAllDelete}
      >
        Delete All
      </Button>
      <Divider sx={{ marginTop: "10px" }} />
      <TodoList todoDataList={todoController.todoList.data} />
    </div>
  );
}

export default Todo;
