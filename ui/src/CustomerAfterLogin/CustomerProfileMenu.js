import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { toast } from "react-toastify";

import {
  Dialog,
  DialogContent,
  DialogActions,
  Paper,
  Zoom,
} from "@mui/material";

import { useEffect } from "react";

import { Get } from "../dbFetch.js";
import { getFromStorage } from "../storage";
import { CustomerProfile, getUserDetails } from "../Profile/CustomerProfile.js";

export default function CustomerProfileMenu() {
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
  const [dashboard, setDashboard] = React.useState(false);
  const openDashboard = () => {
    setDashboard(true);
  };
  useEffect(() => {
    if (goToOrders) {
      navigate("/my-order");
    }
  }, [goToOrders]);
  useEffect(() => {
    if (dashboard) {
      navigate("/customer-logged");
    }
  }, [dashboard]);

  const logout = async () => {
    const obj = getFromStorage("tiffin_app_user");
    if (obj && obj.token._id) {
      const { token } = obj;
      const response = await Get("/api/logout?token=" + token._id);
      localStorage.removeItem("tiffin_app_user");

      if (response.success) {
        toast.info("Logout Success");
        navigate("/");
      } else {
        toast.error(response.message);
      }
    } else {
      toast.info("Session Expired");
    }
  };

  // Get name of user to show
  let user = getUserDetails();
  if (user != null) {
    user = user.firstname;
  } else {
    toast.info("Session Expired");
  }

  return (
    <>
      <div>
        {/* User name link */}
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
        {/* Menu inside the name button */}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={openDashboard}>Dashboard</MenuItem>
          <MenuItem onClick={openProfileDialog}>Profile</MenuItem>

          <MenuItem onClick={openMyOrder}>My Order</MenuItem>
          <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
        <Paper>
          {/* Customer Profile dialog */}
          <Dialog
            open={showDialogLogin}
            onClose={closeDialogLogin}
            TransitionComponent={Zoom}
            fullWidth
            maxWidth="sm"
          >
            <DialogContent style={{}}>
              <CustomerProfile />
            </DialogContent>
            <DialogActions>
              <Button onClick={closeDialogLogin}>close</Button>
            </DialogActions>
          </Dialog>
        </Paper>
      </div>
    </>
  );
}
