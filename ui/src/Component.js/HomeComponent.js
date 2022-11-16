import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BodySection from "./BodySection";
import { Container } from "@mui/system";
import TiffinSection from "./TiffinSection";
import {
  hasLocationAccess,
  getCurrentLocation,
  watchPosition,
} from "../Testing.js";

import Navbar from "./Navbar";
import { Footer } from "./Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff386a",
    },
  },
});

export default class HomeComponent extends React.Component {
  constructor() {
    super();
    // hasLocationAccess();
    // getCurrentLocation();
  }
  render() {
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
}
