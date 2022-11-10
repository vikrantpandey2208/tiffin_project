import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import { LockOutlined } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../Component.js/Navbar';
import {useFormik} from 'formik';
import * as yup from 'yup';
import {NavLink, useNavigate } from 'react-router-dom';

const theme = createTheme({
    palette: {
      primary: {
        main: '#ff386a',
      },
    },
  });


const Login = () => {

    const paperStyle={padding :20,height:'70vh',width:'400px', margin:"20px auto",}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}


        const formik = useFormik({
        initialValues:{
            userId:"",
            password:"",
           
        },
        validationSchema:yup.object({
            userId:yup.string().required("required"),
            password:yup.string().required("required"),
            
        }),
        onSubmit:(values)=>{
            console.log("form submitted",values)
        }
    })

        const navigate = useNavigate();

        function handleClick(){
            navigate("/logged");
        }

    return(
        <>
        <ThemeProvider theme={theme}>
        <Navbar/> 
        <Grid container >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlined/></Avatar>
                    <h1 style={{color:'#ff386a'}}>Login</h1>
                </Grid>
                <TextField
                 label='Username'
                 name="userId"
                 placeholder='Enter username' 
                 fullWidth 
                 onChange={formik.handleChange}
                 error={formik.touched.password && Boolean(formik.errors.password)}
                 onBlur={formik.handleBlur}
                helperText={formik.touched.userId && formik.errors.userId}
                 /><br/><br/>

                <TextField
                 label='Password'
                 name="password" 
                 placeholder='Enter password' 
                 type='password'
                 fullWidth
                 onChange={formik.handleChange}
                 error={formik.touched.userId && Boolean(formik.errors.userId)}
                 onBlur={formik.handleBlur} 
                helperText={formik.touched.password && formik.errors.password}/><br/><br/>
               
                <Button type='submit'  variant="contained" style={btnstyle} onClick={handleClick} fullWidth>Login</Button><br/><br/>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>

                </Typography><br/>
                <Typography > Do you have an account ?
                     <Link href="signup" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </ThemeProvider>
        </>
    )
}

export default Login