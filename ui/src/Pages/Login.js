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
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../Profile/CostomerProfile";
import { useEffect } from "react";
import { toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff386a",
    },
  },
});

const paperStyle = {
  padding: 10,
  height: "70vh",
  width: "400px",
  margin: "10px auto",
};
const avatarStyle = { backgroundColor: "#1bbd7e" };
const btnstyle = { margin: "8px 0" };

const Login = () => {
  const navigate = useNavigate();

  // check running session of user
  let user = getUserDetails();

  useEffect(() => {
    if (user != null) {
      toast.info("Session Activated");
      navigate("/logged");
    }
  });

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
      logInApi(values);
    },
  });

  async function logInApi(data) {
    const path = "/api/login";
    delete data.initialValues;
    const response = await Fetch(path, data);
    if (response.success) {
      setInStorage("tiffin_app_user", {
        token: response.user,
        setupTime: new Date().getTime(),
      });
      toast.success("Login Successful");
      navigate("/logged");
    } else {
      toast.error(response.message);
    }
  }
  async function logInVerify() {
    const obj = getFromStorage("tiffin_app_user");
    if (obj && obj.token) {
      const { token } = obj;

      const response = await Get("/api/verify?token=" + token);
      if (response.success) {
        console.log("Already loggedin user");
        toast.info("Already loggedin");
      } else {
        console.log("logged out user go to login");
      }
    } else {
      console.log("logged out user go to login");
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container>
          <Paper elevation={0} style={paperStyle}>
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
                error={formik.touched.email && Boolean(formik.errors.email)}
                onBlur={formik.handleBlur}
                helperText={formik.touched.email && formik.errors.email}
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
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
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
