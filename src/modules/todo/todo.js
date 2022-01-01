import React,{ useState } from "react";
import { Typography, TextField, Button, Divider } from "@mui/material";
import TodoList from "./todoList";
import "./todo.css";

const initialState = [
    {
        id: 42343,
        todo: "one",
        done: false,
    },
]

function Todo() {
    const [todoFormValue, settodoFormValue] = useState("");
    const [todoDataList, setTodoDataList] = useState(initialState);
    const [errorMsg, setErrorMsg] = useState(null);
    
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoFormValue === "") {
        setErrorMsg("The Input box is empty");
        return;
    }
    const dataObj = {
        id: 10,
        todo: todoFormValue,
        done: false,
    }
    console.log("dataObj", dataObj);
    setTodoDataList([...todoDataList, dataObj])
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
  }
  return (
    <div className="todo-wrapper">
      <Typography
        color={"blue"}
        sx={{
          fontSize: "3rem",
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
      <TodoList todoDataList={todoDataList}/>
    </div>
  );
}

export default Todo;
