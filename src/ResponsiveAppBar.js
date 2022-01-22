import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import LogoutIcon from "@mui/icons-material/Logout";
import { MenuItem } from "@mui/material";

const ResponsiveAppBar = ({ handleLogOut, loggedInUser }) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Todo App
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Todo App
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {loggedInUser ? (
              <>
                <span>
                  Welcome{" "}
                  <strong>
                    <em>{loggedInUser.fullname}</em>
                  </strong>
                  🙂
                </span>
                <span style={{ marginLeft: "30px" }}>
                  Email: <em> {loggedInUser.email} </em>
                </span>
              </>
            ) : null}
          </Box>

          <MenuItem onClick={handleLogOut}>
            <LogoutIcon/>
            Log Out
          </MenuItem>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
