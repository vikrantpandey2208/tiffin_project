import React from "react";
import SellerProfileMenu from "./SellerProfileMenu";
import { Footer } from "../LandingPage/Footer";
import CartDetail from "../Order/CartDetail";

const SellerAfterLogin = () => {
  return (
    <>
      <SellerProfileMenu />
      <CartDetail />
      <Footer />
    </>
  );
};

export default SellerAfterLogin;
