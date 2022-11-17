import React, {useState} from "react";
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
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import UploadIcon from '@mui/icons-material/Upload';
import { AdminAfterLogin } from "../AdminLoginSignup/AdminAfterLogin";


const theme = createTheme({
  palette: {
    primary: {
      main: "#ff386a",
    },
  },
});

const paperStyle = {
  padding: 20,
  height: "",
  width: "600px",
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
      images:null,

    },
    validationSchema: yup.object({
      brand: yup.string().required("required"),
      price: yup.number().required("required"),
      veg: yup.string().required("required"),
      nonveg: yup.string().required("required"),
      fooditem: yup.string().required("required"),
      about: yup.string().required("required"),
      adress: yup.string().required("required"),


    }),
    onSubmit: (values) => {      
     console.log(values)
    },
  });

   const [images1, setImages1] = useState([]);
   const [images2, setImages2] = useState([]);
   const [images3, setImages3] = useState([]);
   const [images4, setImages4] = useState([]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <AdminAfterLogin/>
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
                error={formik.touched.price && Boolean(formik.errors.price)}
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
              <br />
              <br /> 
              <Typography variant="h4" style={{color:'white' ,backgroundColor:"#ff386a", width:'50%',borderRadius:'20px'}}> <UploadIcon/> Upload images </Typography><br/>
              {/* image1 */}
              <Grid container alignItems="center">
              <Grid mr={5}>
              {
                Array.from(images1).map(item => {
                  return (
                    <span>
                      <img
                        style={{ padding: '10px' }}
                        width={150} height={100}
                        src={item ? URL.createObjectURL(item) : null} />
                    </span>
                  )
                })
              }    

              </Grid>
              <Grid>
              <Button variant="contained" component="label">Upload
              <input
                  hidden
                  required                  
                  name="file"
                  type="file"
                  onChange={(event) => {
                    setImages1(event.target.files)
                    let data = event.target.files[0];
                    // signUpApi(data);
                    console.log("event", event.target.files[0]);
                }}
              />
              </Button>
              </Grid> 
              </Grid>
              <br/>
              {/* image2 */}
                <Grid container alignItems="center">
              <Grid mr={5}>
              {
                Array.from(images2).map(item => {
                  return (
                    <span>
                      <img
                        style={{ padding: '10px' }}
                        width={150} height={100}
                        src={item ? URL.createObjectURL(item) : null} />
                    </span>
                  )
                })
              }               
             
              </Grid>
              <Grid>
              <Button variant="contained" component="label">Upload 
              <input
                  hidden
                  required                  
                  name="file"
                  type="file"
                  onChange={(event) => {
                    setImages2(event.target.files)
                    let data = event.target.files[0];
                    // signUpApi(data);
                    console.log("event", event.target.files[0]);
                }}
              />
              
              </Button>
              </Grid> 
              </Grid>
              <br/>
              {/* image3  */}

              <Grid container alignItems="center">
              <Grid mr={5}>
              {
                Array.from(images3).map(item => {
                  return (
                    <span>
                      <img
                        style={{ padding: '10px' }}
                        width={150} height={100}
                        src={item ? URL.createObjectURL(item) : null} />
                    </span>
                  )
                })
              }
              </Grid>
              <Grid>
              <Button variant="contained" component="label">Upload
              <input
                  hidden
                  required                  
                  name="file"
                  type="file"
                  onChange={(event) => {
                    setImages3(event.target.files)
                    let data = event.target.files[0];
                    // signUpApi(data);
                    console.log("event", event.target.files[0]);
                }}
              />              
              </Button>
              </Grid> 
              </Grid>
              <br/>
              {/* image4 */}
              <Grid container alignItems="center">
              <Grid mr={5}>
              {
                Array.from(images4).map(item => {
                  return (
                    <span>
                      <img
                        style={{ padding: '10px' }}
                        width={150} height={100}
                        src={item ? URL.createObjectURL(item) : null} />
                    </span>
                  )
                })
              }    

              </Grid>
              <Grid>
              <Button variant="contained" component="label">Upload
              <input
                  hidden
                  required                  
                  name="file"
                  type="file"
                  onChange={(event) => {
                    setImages4(event.target.files)
                    let data = event.target.files[0];
                    // signUpApi(data);
                    console.log("event", event.target.files[0]);
                }}
              />
              </Button>
              </Grid> 
              </Grid>
                  
              <br />
              <br />
              <TextField
                label="Enter Food Item "
                name="foodITem"
                placeholder="Enter Food Item"
                fullWidth                
                value={formik.values.fooditem}
                onChange={formik.handleChange}
                error={formik.touched.fooditem && Boolean(formik.errors.fooditem)}
                onBlur={formik.handleBlur}
                helperText={formik.touched.fooditem && formik.errors.item}
              />
              <br />
              <br />
              <TextField
                label="Enter your adress"
                name="adress"
                placeholder="Enter full adress"
                fullWidth                
                value={formik.values.adress}
                onChange={formik.handleChange}
                error={formik.touched.padress && Boolean(formik.errors.adress)}
                onBlur={formik.handleBlur}
                helperText={formik.touched.adress && formik.errors.adress}
              />
              <br />
              <br />
              <TextField
                label="About your tiffin"
                name="about"
                placeholder="Enter best thing about your tiffin"
                fullWidth                
                value={formik.values.about}
                onChange={formik.handleChange}
                error={formik.touched.about && Boolean(formik.errors.about)}
                onBlur={formik.handleBlur}
                helperText={formik.touched.about && formik.errors.about}
              />
              <br />
              <br />              
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


