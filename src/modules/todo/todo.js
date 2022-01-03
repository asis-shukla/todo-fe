import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Divider } from "@mui/material";
import TodoList from "./todoList";
import "./todo.css";
import { useSelector, useDispatch } from "react-redux";

function Todo() {
  const [todoFormValue, settodoFormValue] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "TODO_FETCH_REQUESTED" });
  }, [dispatch]);

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
    dispatch({
      type: "ADD_TODO",
      payload: dataObj,
    });
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
  return (
    <div className="todo-wrapper">
      <Typography
        sx={{
          fontSize: "3rem",
          color: "rgb(25, 118, 210)",
        }}
      >
        ToDo List
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
      <Divider sx={{ marginTop: "10px" }} />
      <TodoList todoDataList={todoList.data} />
    </div>
  );
}

export default Todo;
