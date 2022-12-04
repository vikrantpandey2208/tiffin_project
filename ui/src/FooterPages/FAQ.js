import React from "react";
import {  Typography } from "@mui/material";
import { NavbarForFooter } from "./NavbarForFooter";
import { Container } from "@mui/system";
import { Footer } from "../Component.js/Footer";
export const FAQ = () => {
  return (
    <>
      <NavbarForFooter />
       {/* Working of the application */}
      <Container style={{ paddingTop: "30px" }}>
        <Typography variant="h5" mt={3} sx={{ fontWeight: "bold" }}>
          Q.1 How to use application
        </Typography>
        <Typography variant="body1" mt={3} sx={{ fontWeight: "bold" }}>
          For Customer
        </Typography>
        <Typography variant="body1" mt={3}>
          Step 1. Login if you already have an account .<br />
          Click on Login present in the navbar than Signup link is present in
          dialog box of login simply signup than login.
          <br />
          <br />
          Step 2. Pick Choice of your Tiffin and Click to that tiffin.
          <br />
          <br />
          Step 3. Now you are in next page if you want tiffin, done the payment
          otherwise abort it.
          <br />
          <br />
          Step 4.If you done your payment wait for the seller response to
          confirm your order.
          <br />
          <br />
          Step 5. Click on Your Name and there is three option
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Profile - Here you will
          see About your self <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Order - Here you can See
          Your Order details
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. Logout - You will log
          out after clicking it
        </Typography>
        <Typography variant="body1" mt={3} sx={{ fontWeight: "bold" }}>
          For Seller
        </Typography>
        <Typography variant="subtitle1" mt={3}>
          Step 1. Login if you already have an account .<br />
          Click on AddTiffin present in the navbar than Signup link is present
          in dialog box of login simply signup than login.
          <br />
          Step 2. After Login You are in the seller dashboard where you can see
          your tiifin.
          <br />
          Step 3. Click on the Seller Button and there is three option
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1. Order - Here you will
          see the orders. <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2. Add Tiifin - Here you
          can add your Tiffin by filling the from.
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3. Profile - Here you will
          see About your self.
        </Typography>
      </Container>
      <Footer />
    </>
  );
};
