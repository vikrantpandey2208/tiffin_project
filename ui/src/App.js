import React from 'react';
import HomeComponent from './Component.js/HomeComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import  Login  from './Pages/Login';
import SignUp from './Pages/SignUp';
import AddYourTiffin from './Pages/AddYourTiffin';
import AfterLoginNavbar from './Component.js/AfterLoginNavbar';
import TiffinAdminLogin from './AdminLoginSignup/TiffinAdminLogin';
import TiffinAdminSignup from './AdminLoginSignup/TiffinAdminSignup';
import { AdminAfterLogin } from './AdminLoginSignup/AdminAfterLogin';




function App() {
  return (
    <> 
     <Router>
    
     <Routes>      
        <Route exact path='/login' element={<Login/>}>         
        </Route> 
        <Route exact path='/logged' element={<AfterLoginNavbar/>} />
        <Route exact path='/signup' element={<SignUp/>} />
        <Route exact path='/' element={<HomeComponent/>} />  
        <Route exact path='/addyourtiffin' element={<AddYourTiffin/>}/>
        <Route exact path='/loginadmin' element={<TiffinAdminLogin/>} />
        <Route exact path='/signupadmin' element={<TiffinAdminSignup/>} /> 
        <Route exact path='/adminlogged' element={<AdminAfterLogin/>} />   
     </Routes>
     </Router>      
    </>    
  );
}

export default App;
