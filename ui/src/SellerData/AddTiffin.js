import React, {useRef} from "react";
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
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import UploadIcon from "@mui/icons-material/Upload";
import AdminAfterLogin from "../AdminLoginSignup/AdminAfterLogin";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import FormLabel from '@mui/material/FormLabel';

// import { UploadImage } from "../dbFetch.js";
// import { hasLocationAccess, getCurrentLocation } from "../Location";



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
  width: "800px",
  margin: "20px auto",
};

const avatarStyle = { backgroundColor: "#1bbd7e" };
const btnstyle = { margin: "8px 0" };

export const AddTiffin = () => {


  const fileRef1 = useRef();
  const fileRef2 = useRef();
  const fileRef3 = useRef();
  const fileRef4 = useRef();


  const formik = useFormik({
        initialValues: {
          brand: "",
          price: "",
          category:"",
          fooditem:"",
          about:"",
          address:"",
          image1:"",
          image2:"",
          image3:"",
          image4:"",
        },
        validationSchema: yup.object({
          brand: yup.string().required("required"),
          price: yup.number().required("required"),
          category: yup.string().required("required"),          
          fooditem: yup.string().required("required"),
          about: yup.string().required("required"),
          address: yup.string().required("required"),
        }),
        onSubmit: (values) => {
          console.log(values)     
        },
      });

      const [location, setLocation] = React.useState();

      function handleLocation(){
        setLocation()
      }

      



  return (
    <>
        <ThemeProvider theme={theme}>
            <AdminAfterLogin />
            <Grid container>
              <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                  <Avatar style={avatarStyle}>
                    <AddBusinessIcon />
                  </Avatar>
                  <h1 style={{ color: "#ff386a" }}>AddTiffin</h1>
                </Grid>

             <form onSubmit={formik.handleSubmit}>
               <TextField
                label="Name of tiffin service"
                name="brand"
                placeholder="Enter name"
                fullWidth
                value={formik.values.brand}
                onChange={formik.handleChange}
                error={formik.touched.brand && Boolean(formik.errors.brand)}
                onBlur={formik.handleBlur}
                helperText={formik.touched.brand && formik.errors.brand}
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
              {/* Radio Button */}
              <Grid container>
              <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group" style={{color: "#00000099" }}>Category</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                >
                  <FormControlLabel value="veg" control={<Radio />} label="veg" />
                  <FormControlLabel value="nonveg" control={<Radio />} label="non-veg" />
                </RadioGroup>
              </FormControl>       
              </Grid>
              <br />
              <br />

              {/* //Upload Images  */}

             
              <Typography variant="h5" style={{ color: "#00000099" }}>                
                <UploadIcon /> Upload images{" "}
              </Typography><br/> 

               {/* image1 */}            
              <Button onClick={() => {
                fileRef1.current.click();
              }} variant="contained">
                <input 
                ref={fileRef1}
                  hidden
                  type='file'
                  name="image1"
                  onChange={formik.handleChange}
                  value={formik.values.image1}
                />  Upload                              
              </Button>           
              <br /> 
              <br/>

               {/* image2 */}            
              <Button onClick={() => {
                fileRef2.current.click();
              }} variant="contained">
                <input 
                ref={fileRef2}
                  hidden
                  type='file'
                  name="image2"
                  onChange={formik.handleChange}
                  value={formik.values.image2}
                />  Upload                              
              </Button>           
              <br /> <br/>

               {/* image3 */}            
              <Button onClick={() => {
                fileRef3.current.click();
              }} variant="contained">
                <input 
                ref={fileRef3}
                  hidden
                  type='file'
                  name="image3"
                  onChange={formik.handleChange}
                  value={formik.values.image3}
                />  Upload                              
              </Button>           
              <br /> <br/>

               {/* image4 */}            
              <Button onClick={() => {
                fileRef4.current.click();
              }} variant="contained">
                <input 
                ref={fileRef4}
                  hidden
                  type='file'
                  name="image4"
                  onChange={formik.handleChange}
                  value={formik.values.image4}
                />  Upload                              
              </Button>           
              <br />              

              <br />
              <TextField
                label="Enter Food Item "
                name="fooditem"
                placeholder="Enter Food Item"
                fullWidth
                value={formik.values.fooditem}
                onChange={formik.handleChange}
                error={
                  formik.touched.fooditem && Boolean(formik.errors.fooditem)
                }
                onBlur={formik.handleBlur}
                helperText={formik.touched.fooditem && formik.errors.fooditem}
              />
              <br />
              <br />
              <TextField
                label="Enter your address"
                name="address"
                placeholder="Enter full address"
                fullWidth
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                onBlur={formik.handleBlur}
                helperText={formik.touched.address && formik.errors.address}
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
              <Grid container>
              <Typography><AddLocationAltIcon style={{color:'green'}}/> Give Current Location</Typography>
              <Button onClick={handleLocation} variant="contained" style={{marginLeft:'50px'}}>click here</Button>
              </Grid>

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
  )
}

