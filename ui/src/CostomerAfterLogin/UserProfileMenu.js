import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Get } from "../dbFetch.js";
import { setInStorage, getFromStorage } from "../storage";

export default function UserProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = async () => {
    console.log("fired logout");
    const obj = getFromStorage("tiffin_app_user");
    if (obj && obj.token._id) {
      const { token } = obj;
      const response = await Get("/api/logout?token=" + token._id);
      localStorage.removeItem("tiffin_app_user");
      if (response.success) {
        console.log("Logged out navigate to login");
      } else {
        console.log("Error", response.message);
      }
    } else {
      console.log("Already logged out");
    }
  };

  return (
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
        Karan
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
        <MenuItem onClick={handleClose} component={Link} to="/userprofile">
          My account
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link}>
          My Order
        </MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
