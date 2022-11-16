import React from "react";
import { Link } from "react-router-dom";
import { Fetch, Get } from "../dbFetch.js";
import { setInStorage, getFromStorage } from "../storage";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../Component.js/Navbar";
import { useFormik } from "formik";
import * as yup from "yup";
// import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff386a",
    },
  },
});

const paperStyle = {
  padding: 20,
  height: "70vh",
  width: "400px",
  margin: "20px auto",
};
const avatarStyle = { backgroundColor: "#1bbd7e" };
const btnstyle = { margin: "8px 0" };

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required("required"),
      password: yup.string().required("required"),
    }),
    onSubmit: (values) => {
      logInVerify();
      logInApi(values);
      logoutApi();
    },
  });

  async function logInApi(data) {
    const path = "/api/login";
    delete data.initialValues;
    const response = await Fetch(path, data);
    if (response.success) {
      setInStorage("tiffin_app", {
        token: response.token,
        setupTime: new Date().getTime(),
      });
      console.log("login successful", response.token);
    } else {
      console.log("login failed", response.message);
    }
  }
  async function logInVerify() {
    const obj = getFromStorage("tiffin_app");
    if (obj && obj.token) {
      const { token } = obj;

      const response = await Get("/api/verify?token=" + token);
      if (response.success) {
        console.log("Already loggedin user");
      } else {
        console.log("logged out user go to login");
      }
    } else {
      console.log("logged out user go to login");
    }
  }
  async function logoutApi() {
    const obj = getFromStorage("tiffin_app");
    if (obj && obj.token) {
      const { token } = obj;

      const response = await Get("/api/logout?token=" + token);
      if (response.success) {
        console.log("Logged out");
      } else {
        console.log("Error", response.message);
      }
    } else {
      console.log("Internal Server Error");
    }
  }

  //    const navigate = useNavigate();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Grid container>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <LockOutlined />
              </Avatar>
              <h1 style={{ color: "#ff386a" }}>Login</h1>
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
              <Link to="" style={{ color: "#ff386a", textDecoration: "none" }}>
                Forgot password ?
              </Link>
            </Typography>
            <br />
            <Typography>
              {" "}
              Do you have an account ?
              <Link
                to="/signup"
                style={{ color: "#ff386a", textDecoration: "none" }}
              >
                Sign Up
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default Login;
