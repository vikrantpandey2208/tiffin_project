import React from "react";
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
import AddYourTiffin from "../Pages/AddYourTiffin";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


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

export  const AddTiffin = () => {
  const formik = useFormik({
    initialValues: {
      brand: "",
      price: "",
      veg:"",
      nonveg:'',

    },
    validationSchema: yup.object({
      brand: yup.string().required("required"),
      price: yup.number().required("required"),
      veg: yup.string().required("required"),
      nonveg: yup.string().required("required"),

    }),
    onSubmit: (values) => {
     
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <AddYourTiffin />
        <Grid container>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle}>
                <AddBusinessIcon/>
              </Avatar>
              <h1 style={{ color: "#ff386a"  }}>AddTiffin</h1>
            </Grid>

            <form onSubmit={formik.handleSubmit}>
              <TextField
                label="Name of tiffin service"
                name="brand"
                placeholder="Enter name"
                fullWidth
                value={formik.values.brand}
                onChange={formik.handleChange}
                error={
                  formik.touched.price && Boolean(formik.errors.price)
                }
                onBlur={formik.handleBlur}
                helperText={formik.touched.userId && formik.errors.userId}
              />
              <br />
              <br />

              <TextField
                label="price of your Tiffin"
                name="price"
                placeholder="Enter price of you Tiffin"
                fullWidth                
                value={formik.values.price}
                onChange={formik.handleChange}
                error={formik.touched.userId && Boolean(formik.errors.userId)}
                onBlur={formik.handleBlur}
                helperText={formik.touched.price && formik.errors.price}
              />
              <br />
              <br />
              <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">Category</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={formik.values.value}               
                onChange={formik.handleChange}
              >
                <FormControlLabel value="veg" control={<Radio />} label="veg" />
                <FormControlLabel value="nonveg" control={<Radio />} label="non-veg" />
              </RadioGroup>
              </FormControl>




              <Button
                type="submit"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                Confirm
              </Button>
              <br />
              <br />
            </form>            
          </Paper>
        </Grid>
      </ThemeProvider>
    </>
  );
};


