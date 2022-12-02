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
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import LoginIcon from "@mui/icons-material/Login";
import TiffinAdminLogin from "../AdminLoginSignup/TiffinAdminLogin";
import React from "react";
import Login from "../Pages/Login.js";

export default function Navbar() {
  const [showDialog, setShowDialog] = React.useState(false);
  const [showDialogLogin, setShowDialogLogin] = React.useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  const openDialogLogin = () => {
    setShowDialogLogin(true);
  };

  const closeDialogLogin = () => {
    setShowDialogLogin(false);
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
            {/* Login Link  */}
            <Button onClick={openDialogLogin} color="inherit">
              <LoginIcon style={{ fontSize: "18px" }} />
              Login
            </Button>
            <Dialog open={showDialogLogin} onClose={closeDialogLogin}>
              <DialogContent>
                <Login />
              </DialogContent>
              <DialogActions>
                <Button onClick={closeDialogLogin}>close</Button>
              </DialogActions>
            </Dialog>
            {/* Add Tiffin Link */}
            <Button onClick={openDialog} color="inherit">
              {" "}
              <AddBusinessIcon style={{ fontSize: "18px" }} /> Add Tiffin
            </Button>
            <Dialog open={showDialog} onClose={closeDialog}>
              <DialogContent>
                <TiffinAdminLogin />
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
