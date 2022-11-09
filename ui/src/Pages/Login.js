import React from 'react'
import { Typography, TextField, Button, Grid } from '@mui/material';
import { Box } from '@mui/system';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {NavLink, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Component.js/Navbar';
import { Gif } from '@mui/icons-material';
import photo from './Login.jpg';

const theme = createTheme({
    palette: {
      primary: {
        main: '#ff386a',
      },
    },
  });



const Login = () => {
    const formik = useFormik({
        initialValues:{
            userId:"",
            password:"",
           
        },
        validationSchema:Yup.object({
            userId:Yup.string().required("This is Required"),
            password:Yup.string().required("This is Required"),
            
        }),
        onSubmit:(values)=>{
            console.log("form submitted",values)
        }
    })

    
    const navigate = useNavigate();
    function handleClick(){
        navigate("/logged");
    }



    return (
       <> 
        <ThemeProvider theme={theme}> 
       <Navbar/>
        </ThemeProvider>
        <Grid container >

            <Grid item xs={6}>
            <Box >
             
             </Box>
            </Grid>
        <Grid item xs={6}>       
        <Box
        component="form"
        onSubmit={formik.handleSubmit}
        ml={20}        
        >
        <Typography variant="h4" mt={6} sx={{color:'#ff386a', fontWeight:'bold'}} >Login</Typography>
        <TextField 
         label="UserId"
         type="text"
         variant="outlined"
         sx={{width:"300px",m:1}}
         name="userId"
         onChange={formik.handleChange}
         error={formik.touched.userId && Boolean(formik.errors.userId)}
         onBlur={formik.handleBlur}
         helperText={formik.touched.userId && formik.errors.userId}
        /><br/>
        <TextField 
         label="Password"
         type="password"
         variant="outlined"
         sx={{width:"300px",m:1}}
         name="password"
         onChange={formik.handleChange}
         error={formik.touched.password && Boolean(formik.errors.password)}
         onBlur={formik.handleBlur}
         helperText={formik.touched.password && formik.errors.password}
        /> <br/>       
        <Button size="large" variant="contained"  type="sumbit" onClick={handleClick} sx={{m:1, backgroundColor:'#ff386a'}}>Login in</Button>
        </Box>
        </Grid>
        </Grid>
       </>
    )
}
export default Login
