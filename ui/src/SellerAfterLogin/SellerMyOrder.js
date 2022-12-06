import React from "react";
import SellerProfileMenu from "./SellerProfileMenu";
import { Footer } from "../LandingPage/Footer";
import { ViewTiffin } from "../SellerAfterLogin/ViewTiffin";

const SellerMyOrder = () => {
  return (
    <>
      <SellerProfileMenu />
      <ViewTiffin />
      <Footer />
    </>
  );
};

export default SellerMyOrder;
