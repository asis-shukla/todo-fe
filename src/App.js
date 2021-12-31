import "./App.css";
import PlaylistAddCheckRoundedIcon from "@mui/icons-material/PlaylistAddCheckRounded";
import {
  IconButton,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@mui/material";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EditIcon from "@mui/icons-material/Edit";

function App() {
  return (
    <div>
      <Typography color={"blue"} 
      sx={{
        fontSize: "3rem"
      }}
      >ToDo List</Typography>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Save</Button>
      <Divider />
      <div>{CheckboxList()}</div>
    </div>
  );
}

export default App;

function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <EditIcon />
              </IconButton>
            }
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
