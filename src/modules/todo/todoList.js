import React from "react";
import { IconButton, Checkbox } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { DeleteOutline } from "@mui/icons-material";

export default function TodoList({ todoDataList, updateTodo, deleteTodo }) {
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
              <IconButton
                id={value._id}
                edge="end"
                aria-label="comments"
                onClick={(e) => deleteTodo(e)}
              >
                <DeleteOutline id={value._id}/>
              </IconButton>
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
    </List>
  );
}
