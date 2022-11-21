import React from "react";
import { Fetch } from "../dbFetch.js";
import { Link } from "react-router-dom";
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
import AddYourTiffin from "../Pages/AddYourTiffin";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff386a",
    },
  },
});

const TiffinAdminSignup = () => {
  const paperStyle = {
    padding: 10,
    height: "80vh",
    width: "400px",
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

  async function signUpApi(data) {
    const path = "/api/seller-signin";
    delete data.initialValues;

    let imageUrl = "";
    const photo = data;
    console.log("SIGN ", photo);

    if (false) {
      const formData = new FormData();
      formData.append("file", photo);
      formData.append("upload_preset", "default-preset");

      const CLOUDINARY_URL =
        "https://api.cloudinary.com/v1_1/dqdovhtp1/image/upload";

      const dataRes = await Fetch(CLOUDINARY_URL, formData, true);
      imageUrl = dataRes.data.url;
      console.log(imageUrl);
      data.photo = imageUrl;
    }

    const response = await Fetch(path, data);
    if (response.success) {
      console.log("Seller Sign up successful");
    } else {
      console.log("Sign up failed", response.message);
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
                <AddCircleOutlineOutlined />
              </Avatar>
              <Typography variant="h6" color="inherit">
                Signup
              </Typography>
            </Grid>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
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
              <input
                id="file"
                name="file"
                type="file"
                onChange={(event) => {
                  let data = event.target.files[0];
                  signUpApi(data);
                  console.log("event", event.target.files[0]);
                }}
              />
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
            <Typography>
              {" "}
              Already have an account ?
              <Link
                to="/loginadmin"
                style={{ color: "#ff386a", textDecoration: "none" }}
              >
                Login
              </Link>
            </Typography>
          </Paper>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default TiffinAdminSignup;
