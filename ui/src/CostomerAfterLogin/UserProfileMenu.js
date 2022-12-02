import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Dialog, DialogContent, DialogActions, Paper } from "@mui/material";

import { Get } from "../dbFetch.js";
import { setInStorage, getFromStorage } from "../storage";
import { CostomerProfile, getUserDetails } from "../Profile/CostomerProfile.js";

export default function UserProfileMenu() {
  const [showDialogLogin, setShowDialogLogin] = React.useState(false);

  // const openDialogLogin = () => {
  //   setShowDialogLogin(true);
  // };

  const closeDialogLogin = () => {
    setShowDialogLogin(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };
  const handleClose = () => {
    setShowDialogLogin(true);
    setAnchorEl(null);
    
    
  };
  const navigate = useNavigate();
  const logout = async () => {
    console.log("fired logout");
    const obj = getFromStorage("tiffin_app_user");
    if (obj && obj.token._id) {
      const { token } = obj;
      const response = await Get("/api/logout?token=" + token._id);
      localStorage.removeItem("tiffin_app_user");
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
        <MenuItem onClick={handleClose}>
          {/* <Button onClick={openDialogLogin} color="inherit">
            Profile
          </Button> */}
          Profile
        </MenuItem>
        
        <MenuItem onClick={handleClose} component={Link}>
          My Order
        </MenuItem>
        <MenuItem onClick={logout}>Logout</MenuItem>
      </Menu><Paper>

      
      <Dialog open={showDialogLogin} onClose={closeDialogLogin} sx={{ m: 0, p: 2 }} >
          <DialogContent style={{width:'300px', marginLeft:'30px', height:'400px'}}>
            <CostomerProfile />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialogLogin}>close</Button>
          </DialogActions>
        </Dialog>
        </Paper>
    </div>
  );
}
