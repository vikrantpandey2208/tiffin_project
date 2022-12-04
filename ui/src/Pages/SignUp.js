import React from "react";
import { Fetch } from "../dbFetch.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import NavbarForSignup from "./NavbarForSignup";
import { ToastContainer, toast } from "react-toastify";
import { Footer } from "../Component.js/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff386a",
    },
  },
});

const SignUp = () => {
  const paperStyle = {
    padding: 20,
    height: "",
    width: "500px",
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const formik = useFormik({
    initialValues: {
      initialValues: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
      },
    },

    validationSchema: yup.object({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required").min(3, "too short"),
      phone: yup.number().required("required"),
      email: yup.string().required("required").email("Invalid email"),
      password: yup.string().required("required"),
    }),

    onSubmit: (values) => {
      signUpApi(values);
    },
  });
  const navigate = useNavigate();

  async function signUpApi(data) {
    const path = "/api/signin";
    delete data.initialValues;
    const response = await Fetch(path, data);
    if (response.success) {
      toast.success("Signup Successful");
      navigate("/login");
    } else {
      toast.info(response.message);
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavbarForSignup />
        <Grid container>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <AddCircleOutlineOutlined />
              </Avatar>
              <Typography variant="h6" color="inherit">
                Signup
              </Typography>
            </Grid>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                label="First Name"
                type="text"
                fullWidth
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                onBlur={formik.handleBlur}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <br />
              <br />
              <TextField
                label="Last Name"
                type="text"
                fullWidth
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                onBlur={formik.handleBlur}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
              <br />
              <br />
              <TextField
                label="Phone Number"
                type="text"
                name="phone"
                fullWidth
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
                onBlur={formik.handleBlur}
              />
              <br />
              <br />
              <TextField
                label="Email"
                type="text"
                fullWidth
                name="email"
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
                type="password"
                fullWidth
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                onBlur={formik.handleBlur}
                helperText={formik.touched.password && formik.errors.password}
              />{" "}
              <br />
              <Button
                type="submit"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                Signup
              </Button>
              <br />
            </form>
          </Paper>
        </Grid>
      </ThemeProvider>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default SignUp;
