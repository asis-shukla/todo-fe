import React, { useState } from "react";
import { IconButton, Checkbox } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { DeleteOutline } from "@mui/icons-material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { TextField, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TodoList({ todoDataList, updateTodo, deleteTodo }) {
  const [editFormOpened, seteditFormOpened] = useState(false);
  const [edittedTodo, setEdittedTodo] = useState(null);

  const handleToggle = (e) => {
    let todoID = e.target.offsetParent.id;
    if (!todoID) {
      todoID = e.target.id;
    }
    if (todoID) {
      const clickedTodo = todoDataList.find((item) => {
        return item._id === todoID;
      });
      const editPayload = {
        todo: clickedTodo.todo,
        done: !clickedTodo.done,
      };
      updateTodo(editPayload, todoID);
    }
  };

  const handleClose = () => {
    seteditFormOpened(false);
  };

  const handleSubmitEdit = () => {
    const editPayload = {
      todo: edittedTodo.todo,
      done: edittedTodo.done,
    };
    console.log("edittedTodo on submit is", edittedTodo);
    updateTodo(editPayload, edittedTodo?._id);
  };

  const handleOnChange = (e) => {
    setEdittedTodo(e.target.value);
    setEdittedTodo({
      ...edittedTodo,
      todo: e.target.value,
    });
  };

  const EditContainer = () => {
    return (
      <Modal
        open={editFormOpened}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <TextField
              id="todo-text"
              sx={{
                width: "75%",
              }}
              label="Edit Todo"
              variant="outlined"
              autoFocus={true}
              size="medium"
              onChange={handleOnChange}
              value={edittedTodo?.todo}
            />
            <Button
              variant="contained"
              sx={{ margin: "5px 6px 0px 6px", width: "18%" }}
              type="submit"
              onClick={handleSubmitEdit}
              size="large"
            >
              Save
            </Button>
          </form>
        </Box>
      </Modal>
    );
  };

  const editTodo = (e) => {
    let todoID = e.target.offsetParent?.id;
    console.log("todoID is", todoID);
    if (!todoID) {
      todoID = e.target.id;
    }

    if (todoID) {
      const clickedTodo = todoDataList.find((item) => {
        return item._id === todoID;
      });
      console.log("clickedTodo is", clickedTodo);
      if (clickedTodo) {
        setEdittedTodo(clickedTodo);
      }
    }

    seteditFormOpened(true);
  };

  return (
    <List
      sx={{
        paddingTop: "0px",
        paddingBottom: "0px",
        margin: "auto",
      }}
    >
      {todoDataList?.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            id={value._id}
            key={value._id}
            secondaryAction={
              <>
                <IconButton
                  id={value?._id}
                  edge="end"
                  aria-label="comments"
                  onClick={(e) => deleteTodo(e)}
                >
                  <DeleteOutline id={value?._id} />
                </IconButton>
                <IconButton
                  id={value?._id}
                  edge="end"
                  aria-label="comments"
                  onClick={(e) => editTodo(e)}
                >
                  <EditOutlinedIcon id={value?._id} />
                </IconButton>
              </>
            }
            sx={{ padding: "0px" }}
            divider={true}
          >
            <ListItemButton id={value._id} onClick={handleToggle} dense>
              <ListItemIcon id={value._id}>
                <Checkbox
                  edge="start"
                  id={value._id}
                  checked={value.done}
                  tabIndex={-1}
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText
                id={value._id}
                primary={value.todo}
                sx={{
                  textDecoration: value.done ? "line-through" : "none",
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
      <EditContainer />
    </List>
  );
}
