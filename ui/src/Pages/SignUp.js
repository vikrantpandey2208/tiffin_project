import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Component.js/Navbar';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { AddCircleOutlineOutlined } from '@mui/icons-material';


const theme = createTheme({
    palette: {
      primary: {
        main: '#ff386a',
      },
    },
  });


const SignUp = () => {

    const paperStyle={padding :20,height:'80vh',width:'500px', margin:"20px auto",}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}


        const formik = useFormik({
        initialValues:{
               initialValues:{
                  fullName:"",            
                  phone:"",
                  email:"",
                  password:"", 
               }          
        },

         validationSchema:yup.object({
            fullName:yup.string().required("required"),
            phone:yup.number().required("required"),
            email:yup.string().required("required").email("Invalid email"), 
            password:yup.string().required("required")           
            
        }),
        onSubmit:(values)=>{
            console.log("form submitted",values)
        }
    })


    return(
        <>
        <ThemeProvider theme={theme}>
        <Navbar/> 
        <Grid container>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><AddCircleOutlineOutlined /></Avatar>
                    <h1 style={{color:'#ff386a'}}>Signup</h1>
                </Grid>
                <TextField 
                    label="Full Name"
                    type="text"                    
                    fullWidth                    
                    name="fullName"
                    onChange={formik.handleChange}
                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.fullName && formik.errors.fullName}
                /><br/><br/>

                 <TextField 
                    label="Phone Number"
                    type="text"                   
                    name="phone"
                    fullWidth 
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                    onBlur={formik.handleBlur}
                 /><br/><br/>    
        
                <TextField 
                    label="Email"
                    type="text"                   
                    fullWidth                    
                    name="email"
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.email && formik.errors.email}
                /><br/><br/> 
                <TextField 
                    label="Password"
                    type="password"                   
                    fullWidth                    
                    name="password"
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    onBlur={formik.handleBlur}
                    helperText={formik.touched.password && formik.errors.password}
                    /> <br/><br/>
               
                <Button type='submit'  variant="contained" style={btnstyle}  fullWidth>Signup</Button><br/><br/>
                
                <Typography > Already have an account ?
                     <Link href="login" >
                        Login 
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </ThemeProvider>
        </>
    )
}

export default SignUp;
