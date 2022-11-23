import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BodySection from "./BodySection";
import { Container } from "@mui/system";
import TiffinSection from "./TiffinSection";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import SellerAddTiffin from "../SellerData/HandleSellerData";
import Navbar from "./Navbar";
import { Footer } from "./Footer";
import ConfirmOrder from "../Order/ConfirmOrder";
import CustomerOrder from "../Order/CustomerOrder";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff386a",
    },
  },
});

function HomeComponent() {
  // constructor() {
  //   super();
  //   // hasLocationAccess();
  //   // getCurrentLocation();
  //   // SellerAddTiffin();
  // }

  // if (true) {
  //   const navigate = useNavigate();
  //   navigate("/logged");
  // }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          <BodySection />
          <CustomerOrder />
          <TiffinSection />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}
export default HomeComponent;
