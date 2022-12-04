import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
<<<<<<< HEAD
import { Dialog, DialogContent, DialogActions, Paper } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
=======
import {
  Dialog,
  DialogContent,
  DialogActions,
  Paper,
  Fade,
  Grow,
  Zoom,
} from "@mui/material";

import { useEffect } from "react";
>>>>>>> d886f8b1de6b24d5046c37b5cdfb051c1b08221c
import { Get } from "../dbFetch.js";
import { getFromStorage } from "../storage";
import { CostomerProfile, getUserDetails } from "../Profile/CostomerProfile.js";

export default function UserProfileMenu() {
  const navigate = useNavigate();

  // profile dialog
  const [showDialogLogin, setShowDialogLogin] = React.useState(false);
  const closeDialogLogin = () => {
    setShowDialogLogin(false);
  };
  const openProfileDialog = () => {
    setShowDialogLogin(true);
    setAnchorEl(null);
  };

  // menu pupulate
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // my order
  const [goToOrders, setGoToOrders] = React.useState(false);
  const openMyOrder = () => {
    setGoToOrders(true);
  };
  useEffect(() => {
    if (goToOrders) {
      navigate("/my-order");
    }
  });

  const logout = async () => {
    console.log("fired logout");
    const obj = getFromStorage("tiffin_app_user");
    if (obj && obj.token._id) {
      const { token } = obj;
      const response = await Get("/api/logout?token=" + token._id);
      localStorage.removeItem("tiffin_app_user");
      toast.success("logout success");
      if (response.success) {
        console.log("Logged out navigate to login");
        navigate("/");
        
      } else {
        console.log("Error", response.message);
      }
    } else {
      console.log("Already logged out");
    }
  };
 

  // Get name of user to show
  let user = getUserDetails().firstname;

  return (

    <>
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="inherit"
        startIcon={<AccountCircleIcon />}
      >
        {user}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={openProfileDialog}>Profile</MenuItem>

        <MenuItem onClick={openMyOrder}>My Order</MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
      <Paper>
        <Dialog
          open={showDialogLogin}
          onClose={closeDialogLogin}
          TransitionComponent={Zoom}
          fullWidth
          maxWidth="sm"
        >
          <DialogContent style={{}}>
            <CostomerProfile />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialogLogin}>close</Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </div>
          <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          />
    </>
  );
}
