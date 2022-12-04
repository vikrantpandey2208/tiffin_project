import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogActions, Paper } from "@mui/material";
import { SellerProfile } from "../Profile/SellerProfile";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { GetLoggedSeller } from "../Auth/Logged-Seller";
import { toast } from "react-toastify";
import { Get } from "../dbFetch.js";
import { getFromStorage } from "../storage";
import { AppBar, Typography, Button, Toolbar, Grid, Zoom } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function SellerProfileMenu() {
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
      navigate("/seller-order");
    }
  });
  useEffect(() => {
    if (dashboard) {
      navigate("/adminlogged");
    }
  }, []);

  const logout = async () => {
    const obj = getFromStorage("tiffin_app_seller");
    if (obj && obj.token._id) {
      const { token } = obj;
      const response = await Get("/api/seller-logout?token=" + token._id);
      localStorage.removeItem("tiffin_app_seller");
      if (response.success) {
        toast.success("Logout Successful");
        navigate("/");
      } else {
        toast.error(response.message);
      }
    } else {
      toast.info("Session Expired");
    }
  };

  // Get name of user to show
  let user = GetLoggedSeller().token;
  if (user != null) {
    user = user.firstname;
  } else {
    toast.info("Session Expired");
  }

  return (
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
              <MenuItem onClick={openDashboard}>Dashboard</MenuItem>
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
                  <SellerProfile />
                </DialogContent>
                <DialogActions>
                  <Button onClick={closeDialogLogin}>close</Button>
                </DialogActions>
              </Dialog>
            </Paper>
          </div>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
