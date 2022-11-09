import React from "react";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import BodySection from './BodySection'
import { Container } from '@mui/system';
import TiffinSection from './TiffinSection';
import Login from "../Pages/Login";
import Navbar from './Navbar';

const theme = createTheme({
    palette: {
      primary: {
        main: '#ff386a',
      },
    },
  });

export default class HomeComponent extends React.Component {
    render(){
        return(
            <>
            <ThemeProvider theme={theme}>   
            <Navbar/>              
                 <Container>
                 <BodySection/> 
                 <TiffinSection/>
                 </Container>                 
           </ThemeProvider>
            </>
        )
    }
}