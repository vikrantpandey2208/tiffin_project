import React from "react";
import { Fetch } from "../dbFetch.js";
import { useNavigate, Link } from "react-router-dom";
import { setInStorage} from "../storage";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
import * as yup from "react-yup";


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

const TiffinSellerLogin = () => {
  const navigate = useNavigate();

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
    const path = "/api/seller-login";
    delete data.initialValues;
    const response = await Fetch(path, data);
    if (response.success) {
      setInStorage("tiffin_app_seller", {
        token: response.seller,
        setupTime: new Date().getTime(),
      });
      toast.success("Login Successful");
      navigate("/seller-logged");
    } else {
      toast.error(response.message);
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
              {/* input email and userid */}
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
              {/* input password */}
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
                to="/seller-signup"
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

export default TiffinSellerLogin;
