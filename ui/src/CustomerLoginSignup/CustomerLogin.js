import React from "react";
import { Link } from "react-router-dom";
import { Fetch } from "../dbFetch.js";
import { setInStorage } from "../storage";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../Profile/CustomerProfile";
import { useEffect } from "react";
import { toast } from "react-toastify";

const paperStyle = {
  padding: 10,
  height: "70vh",
  width: "400px",
  margin: "10px auto",
};
const avatarStyle = { backgroundColor: "#1bbd7e" };
const btnstyle = { margin: "8px 0" };

const CustomerLogin = () => {
  const navigate = useNavigate();

  // check running session of user
  let user = getUserDetails();

  useEffect(() => {
    if (user != null) {
      toast.info("Session Activated");
      navigate("/customer-logged");
    }
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    //validation of form
    validationSchema: yup.object({
      email: yup.string().required("required").email("Invalid Email"),
      password: yup.string().required("required"),
    }),

    //forms value comes here
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
      navigate("/customer-logged");
    } else {
      toast.error(response.message);
    }
  }

  return (
    <>
      <Grid container>
        <Paper elevation={0} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlined />
            </Avatar>
            <h1 style={{ color: "#ff386a" }}>Login</h1>
          </Grid>
          {/* Input Email or user Id */}
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
            {/* input password */}
            <TextField
              label="Password"
              name="password"
              placeholder="Enter password"
              type="password"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              onBlur={formik.handleBlur}
              helperText={formik.touched.password && formik.errors.password}
            />
            <br />
            <br />
            {/* Form Submit here  */}
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
          {/* Sign up page Link */}
          <Typography>
            {" "}
            Do you have an account ?
            <Link
              to="/customer-signup"
              style={{ color: "#ff386a", textDecoration: "none" }}
            >
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};

export default CustomerLogin;
