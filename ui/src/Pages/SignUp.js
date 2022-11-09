import React from 'react'
import { Typography, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import {useFormik} from 'formik'
import * as Yup from 'yup'
import Navbar from '../Component.js/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#ff386a',
      },
    },
  });

const SignUp = () => {


    const formik = useFormik({
        initialValues:{
            fullName:"",            
            phone:"",
            email:"",
            password:"",
            
        },
        validationSchema:Yup.object({
            fullName:Yup.string().required("This is Required"),
            phone:Yup.number().required("This is Required"),
            email:Yup.string().required("This is Required").email("Invalid email"), 
            password:Yup.string().required("This is Required")           
            
        }),
        onSubmit:(values)=>{
            console.log("form submitted",values)
        }
    })

    return (
       <>

       <ThemeProvider theme={theme}> 
         <Navbar/>
        </ThemeProvider>
        
        <Box
        component="form"
        onSubmit={formik.handleSubmit}
        ml={50}
        >
        <Typography variant="h4" mt={6} sx={{color:'#ff386a', fontWeight:'bold'}} >SignUp</Typography>
        <TextField 
         label="Full Name"
         type="text"
         variant="outlined"
         sx={{width:"300px",m:1}}
         name="fullName"
         onChange={formik.handleChange}
         error={formik.touched.fullName && Boolean(formik.errors.fullName)}
         onBlur={formik.handleBlur}
         helperText={formik.touched.fullName && formik.errors.fullName}
        /><br/>  
        <TextField 
         label="Phone Number"
         type="text"
         variant="outlined"
         sx={{width:"300px",m:1}}
         name="phone"
         onChange={formik.handleChange}
         error={formik.touched.phone && Boolean(formik.errors.phone)}
         helperText={formik.touched.phone && formik.errors.phone}
         onBlur={formik.handleBlur}
        /><br/>  
        <TextField 
         label="Email"
         type="text"
         variant="outlined"
         sx={{width:"300px",m:1}}
         name="email"
         onChange={formik.handleChange}
         error={formik.touched.email && Boolean(formik.errors.email)}
         onBlur={formik.handleBlur}
         helperText={formik.touched.email && formik.errors.email}
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
        
        <Button size="large" variant="contained" type="sumbit" sx={{m:1, backgroundColor:'#ff386a'}}>Signup</Button>
        </Box>
       </>
    )
}

export default SignUp;
