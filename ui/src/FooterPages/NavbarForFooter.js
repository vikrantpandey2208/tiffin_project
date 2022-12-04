import React from "react";
import { Typography, Grid, Button, AppBar, Toolbar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

export const NavbarForFooter = () => {
  return (
    <>
      <Grid container>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography
              variant="h4"
              style={{
                flexGrow: 1,
                textDecoration: "none",
                color: "inherit",
                fontSize: "20px",
              }}
              component={Link}
              to="/"
            >
              Just Dabba
            </Typography>
            {/* Home Link */}
            <Button color="inherit" component={Link} to="/">
              <HomeIcon style={{ fontSize: "20px" }} />
              Home
            </Button>
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
};
