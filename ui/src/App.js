import React from 'react'
import Navbar from './Component.js/Navbar';


import { createTheme, ThemeProvider } from '@mui/material/styles';
import BodySection from './Component.js/BodySection';
import { Container } from '@mui/system';
import TiffinSection from './Component.js/TiffinSection';

import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Login from './Pages/Login'



const theme = createTheme({
  palette: {
    primary: {
      main: '#ff386a',
    },
  },
});

function App() {
  return (
    <> 
    <Router>
    <ThemeProvider theme={theme}>
    <Navbar/>
    <Container>
    <BodySection/> 
    <TiffinSection/>
    </Container>
    <Login/>
    </ThemeProvider>
    <Routes>
      <Route  path='/login' element={<Login/>}/>
    </Routes> 
    </Router>        
    </>    
  );
}

export default App;
