import React from 'react';
import HomeComponent from './Component.js/HomeComponent';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import  Login  from './Pages/Login';
import SignUp from './Pages/SignUp';
import AddYourTiffin from './Pages/AddYourTiffin';
import AfterLoginNavbar from './Component.js/AfterLoginNavbar';
import TiffinAdminLogin from './AddYourTiffin/TiffinAdminLogin';
import TiffinAdminSignup from './AddYourTiffin/TiffinAdminSignup';




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
     </Routes>
     </Router>      
    </>    
  );
}

export default App;
