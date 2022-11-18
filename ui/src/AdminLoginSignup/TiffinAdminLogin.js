import React from 'react'
import { Fetch, Get } from '../dbFetch.js'
import { useNavigate, Link } from 'react-router-dom'
import { GetLoggedSeller } from '../Auth/Logged-Seller'
import { AuthContext } from '../context/auth-context'

import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from '@mui/material'
import { LockOutlined } from '@mui/icons-material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { useFormik } from 'formik'
import * as yup from 'yup'
import AddYourTiffin from '../Pages/AddYourTiffin'
// import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff386a',
    },
  },
})

const paperStyle = {
  padding: 20,
  height: '70vh',
  width: '400px',
  margin: '20px auto',
}
const avatarStyle = { backgroundColor: '#1bbd7e' }
const btnstyle = { margin: '8px 0' }

const TiffinAdminLogin = () => {
  const navigate = useNavigate()
  // const value = React.useContext(AuthContext);
  // console.log(value);
  // value.setUserId();
  // console.log(value);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup.string().required('required'),
      password: yup.string().required('required'),
    }),
    onSubmit: (values) => {
      console.log(values, 'Onsubmit')
      logInApi(values)
    },
  })

  async function logInApi(data) {
    const path = '/api/seller-login'
    delete data.initialValues
    const response = await Fetch(path, data)
    if (response.success) {
      navigate('/adminlogged')
      console.log('Seller login successful', response.token)
    } else {
      console.log('login failed', response.message)
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AddYourTiffin />
        <Grid container>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlined />
              </Avatar>
              <h1 style={{ color: '#ff386a' }}>Login</h1>
            </Grid>

            <form onSubmit={formik.handleSubmit}>
              <TextField
                label="Username"
                name="email"
                placeholder="Enter username"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                onBlur={formik.handleBlur}
                helperText={formik.touched.userId && formik.errors.userId}
              />
              <br />
              <br />

              <TextField
                label="Password"
                name="password"
                placeholder="Enter password"
                type="password"
                fullWidth
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.userId && Boolean(formik.errors.userId)}
                onBlur={formik.handleBlur}
                helperText={formik.touched.password && formik.errors.password}
              />
              <br />
              <br />

              <Button
                type="submit"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                Login
              </Button>
              <br />
              <br />
            </form>
            <Typography>
              <Link to="" style={{ color: '#ff386a', textDecoration: 'none' }}>
                Forgot password ?
              </Link>
            </Typography>
            <br />
            <Typography>
              {' '}
              Do you have an account ?
              <Link
                to="/signupadmin"
                style={{ color: '#ff386a', textDecoration: 'none' }}
              >
                Sign Up
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </ThemeProvider>
    </>
  )
}

export default TiffinAdminLogin
