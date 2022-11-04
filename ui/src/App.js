import React from 'react';
import HomeComponent from './Component.js/HomeComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import  Login  from './Pages/Login';
import SignUp from './Pages/SignUp';
import Navbar from './Component.js/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
     </ThemeProvider>
     <Routes>      
        <Route exact path='/login' element={<Login/>} >
        </Route> 
        <Route exact path='/signup' element={<SignUp/>} />
        <Route exact path='/' element={<HomeComponent/>} />       
     </Routes>
     </Router>      
    </>    
  );
}

export default App;
