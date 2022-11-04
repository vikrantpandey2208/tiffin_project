import React from 'react'
import { Typography, TextField, Button } from '@mui/material';
import { Box } from '@mui/system';
import {useFormik} from 'formik';
import * as Yup from 'yup';

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

    return (
       <>        
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
        <Button size="large" variant="contained"  type="sumbit" sx={{m:1, backgroundColor:'#ff386a'}}>Login in</Button>
        </Box>
       </>
    )
}
export default Login
