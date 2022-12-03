import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppBar, Typography, Button, Toolbar, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SellerDashBoard from "../AdminLoginSignup/SellerDashBoard";
import { GetLoggedSeller } from "../Auth/Logged-Seller";
import { Get } from "../dbFetch.js";
import { setInStorage, getFromStorage } from "../storage";


function getSellerDetails() {
  let user = GetLoggedSeller();
  return user;
}

const AdminAfterLogin = () => {

  const navigate = useNavigate();

  const logout = async () => {
    console.log("fired seller logout");
    const obj = getFromStorage("tiffin_app_seller");
    if (obj && obj.token._id) {
      const { token } = obj;
      const response = await Get("/api/seller-logout?token=" + token._id);
      localStorage.removeItem("tiffin_app_seller");
      if (response.success) {
        navigate("/")
      } else {
        console.log("Error", response.message);
      }
    } else {
      console.log("Already logged out");
    }
  };

  let detail = getSellerDetails();
  // if (detail != null) console.log(detail.token, "Details of seller");
  return (
    <>
      <Grid container>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h5" flexGrow={1}>
              Just Dabba
            </Typography>
            <Button variant="h6" component={Link}>
              <SellerDashBoard />
            </Button>
            <Button onClick={logout} color="inherit" startIcon={<LogoutIcon />}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Grid>
      
    </>
  );
};

export default AdminAfterLogin;
