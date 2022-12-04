import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppBar, Typography, Button, Toolbar, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import SellerProfileMenu from "./SellerProfileMenu";
import { GetLoggedSeller } from "../Auth/Logged-Seller";
import { Get } from "../dbFetch.js";
import { setInStorage, getFromStorage } from "../storage";
import { ViewTiffin } from "../SellerData/ViewTiffin";
import { toast } from "react-toastify";
import { Footer } from "../Component.js/Footer";
import { Sell } from "@mui/icons-material";

function getSellerDetails() {
  let user = GetLoggedSeller();
  return user;
}

const AdminAfterLogin = () => {
  const navigate = useNavigate();

  return (
    <>
      <SellerProfileMenu />
      <Footer />
    </>
  );
};

export default AdminAfterLogin;
