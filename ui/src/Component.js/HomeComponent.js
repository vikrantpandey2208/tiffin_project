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
import SellerOrder from "../Order/SellerOrder";

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
<<<<<<< HEAD
          <BodySection />         
=======
          <BodySection />
          <CustomerOrder />
          {/* <SellerOrder /> */}
>>>>>>> e73910d9ba6758eb908b3b3ae40f1c668fe50c87
          <TiffinSection />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}
export default HomeComponent;
