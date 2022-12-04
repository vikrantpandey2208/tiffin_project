import {
  AppBar,
  Typography,
  Button,
  Toolbar,
  Grid,
  Dialog,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LoginIcon from "@mui/icons-material/Login";
import TiffinSellerLogin from "./TiffinSellerLogin";
import React from "react";

export default function NavbarForadminSignup() {
  const [showDialog, setShowDialog] = React.useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };
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
            <Button
              component={Link}
              to="/"
              color="inherit"
              startIcon={<HomeIcon />}
            >
              Home
            </Button>
            <Button onClick={openDialog} color="inherit">
              {" "}
              <LoginIcon style={{ fontSize: "18px" }} /> Login
            </Button>
            <Dialog open={showDialog} onClose={closeDialog}>
              <DialogContent>
                <TiffinSellerLogin />
              </DialogContent>
              <DialogActions>
                <Button onClick={closeDialog}>close</Button>
              </DialogActions>
            </Dialog>
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
}
