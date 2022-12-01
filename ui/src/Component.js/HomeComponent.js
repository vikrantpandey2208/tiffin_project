import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BodySection from "./BodySection";
import { Container } from "@mui/system";
import TiffinSection from "./TiffinSection";


import Navbar from "./Navbar";
import { Footer } from "./Footer";


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
          <TiffinSection />
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
}
export default HomeComponent;
