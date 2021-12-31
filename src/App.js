import "./App.css";
import PlaylistAddCheckRoundedIcon from "@mui/icons-material/PlaylistAddCheckRounded";
import {
  IconButton,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

function App() {
  return (
    <div>
      <IconButton>
        <PlaylistAddCheckRoundedIcon fontSize="large" color="primary" />
        <Typography color={"red"}>ToDo List</Typography>
      </IconButton>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <Button variant="contained">Save</Button>
      <div>{CheckboxList()}</div>
    </div>
  );
}

export default App;

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

function CheckboxList() {
  const lightTheme = createTheme({ palette: { mode: "light" } });
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
    <ThemeProvider theme={lightTheme}>
      <Box
        sx={{
          // p: 2,
          bgcolor: "background.default",
          display: "grid",
          gridTemplateColumns: { md: "1fr 1fr" },
          // gap: 2,
        }}
      >
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {[0, 1, 2, 3].map((value) => {
            const labelId = `checkbox-list-label-${value}`;

            return (
              <Item>
                <ListItem
                  key={value}
                  secondaryAction={
                    <IconButton edge="end" aria-label="comments">
                      <EditIcon />
                    </IconButton>
                  }
                  disablePadding
                  elevation={20}
                  style={{ margin: "20px" }}
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
                    <ListItemText
                      id={labelId}
                      primary={`Line item ${value + 1}`}
                    />
                  </ListItemButton>
                </ListItem>
              </Item>
            );
          })}
        </List>
      </Box>
    </ThemeProvider>
  );
}
