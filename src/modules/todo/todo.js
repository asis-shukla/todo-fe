import React, { useState, useEffect } from "react";
import { TextField, Button, Divider, Container } from "@mui/material";
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

  const updateTodo = (payload, id) => {
    todoController.updateSingleTodo(payload, id);
  };

  return (
    <Container
      sx={{
        mt: "20px",
        textAlign: "center",
        pl: "4px",
        pr: "4px",
      }}
    >
      <form>
        <TextField
          id="todo-text"
          sx={{
            width: "75%",
          }}
          label="Add New Todo"
          variant="outlined"
          autoFocus={true}
          size="medium"
          onKeyPress={handleOnKeyPress}
          onChange={handleOnChange}
          value={todoFormValue}
          error={errorMsg != null}
          helperText={errorMsg}
        />
        <Button
          variant="contained"
          sx={{ margin: "5px 6px 0px 6px", width: "18%" }}
          type="submit"
          onClick={handleSubmit}
          size="large"
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
      <TodoList
        todoDataList={todoController.todoList.data}
        updateTodo={updateTodo}
      />
    </Container>
  );
}

export default Todo;
