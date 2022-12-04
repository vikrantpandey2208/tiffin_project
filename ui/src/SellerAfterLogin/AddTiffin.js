import React, { useRef, useEffect, useState } from "react";
import { Fetch } from "../dbFetch.js";
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
import * as yup from "react-yup";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import UploadIcon from "@mui/icons-material/Upload";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import FormLabel from "@mui/material/FormLabel";
import SellerNavbar from './SellerNavbar';

import { UploadImage } from "../dbFetch.js";
import { hasLocationAccess} from "../Location";

import { GetLoggedSeller } from "../Auth/Logged-Seller";

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
      category: "",
      fooditem: "",
      about: "",
      address: "",
      image1: "",
      image2: "",
      image3: "",
      image4: "",
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
      console.log(values);
      SellerAddTiffin(values);
    },
  });

  const [images1, setImages1] = useState([]);
  const [images2, setImages2] = useState([]);
  const [images3, setImages3] = useState([]);
  const [images4, setImages4] = useState([]);
  const [imageUrl, setImageUrl] = useState();

  async function handleImage() {
    var image = [images1, images2, images3, images4];
    // console.log(image, "Image");

    image = await uploadImage(image);
    setImageUrl(image);

    console.log("returned ", image);
    // setUpload("uploaded");
  }
  let imageUrlCloud = [];
  async function uploadImage(image) {
    const CLOUDINARY_URL =
      "https://api.cloudinary.com/v1_1/dqdovhtp1/image/upload";

    for (let i = 0; i < 4; i++) {
      if (image[i].length === 0) {
        continue;
      }
      const formData = new FormData();

      formData.append("file", image[i]);
      formData.append("upload_preset", "default-preset");

      const dataRes = await UploadImage(CLOUDINARY_URL, formData, true);
      imageUrlCloud.push(dataRes.url);
    }

    return imageUrlCloud;
  }

  const [location, setLocation] = React.useState("");

  useEffect(() => {
    const e = document.getElementById("locationText");
    e.innerText = location;
  });

  const handleLocation = () => {
    if (hasLocationAccess()) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          let lt = [];
          lt.push(position.coords.latitude);
          lt.push(position.coords.longitude);
          setLocation(lt);
        },
        function (error) {
          //console.error("Error Code = " + error.code + " - " + error.message);
        },
      );
      
    } else {
      
    }
  };

  function getSellerDetails() {
    let user = GetLoggedSeller();
    return user.token._id;
  }

  async function SellerAddTiffin(value) {
    let idOfUser = getSellerDetails();

    if (idOfUser == null) {
      console.log("Session expired redirect to login with alert");
      return;
    }

    let data = {
      additionalDetail: "Additional details not provided",
      detailsOfTiffin: value.about,
      dishWithCount: value.fooditem,
      price: value.price,
      brand: value.brand,
      category: value.category,
      sellerId: idOfUser,
      addr: value.address,
      longitude: location[1],
      latitude: location[0],
      photo1: imageUrl[0],
      photo2: imageUrl[1],
      photo3: imageUrl[2],
      photo4: imageUrl[3],
    };
    

    const path = "/api/seller-add-tiffin";
    const response = await Fetch(path, data);
    if (response.success) {
      console.log("Tiffin Saved");
    } else {
      console.log("Tiffin not saved", response.message);
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <SellerNavbar/>
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
                margin="dense"
              />
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
                margin="dense"
              />
              {/* Radio Button */}
              <Grid container direction="row">
                <FormControl>
                  <FormLabel
                    id="demo-controlled-radio-buttons-group"
                    style={{ color: "#00000099" }}
                  >
                    Category
                  </FormLabel>

                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                  >
                    <FormControlLabel
                      value="Veg"
                      control={<Radio />}
                      label="Veg"
                    />
                    <FormControlLabel
                      value="Non-Veg"
                      control={<Radio />}
                      label="non-veg"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              {/* //Upload Images  */}
              <Typography variant="h5" style={{ color: "#00000099" }}>
                <UploadIcon /> Upload images{" "}
              </Typography>
              <br />
              {/* image1 */}
              {Array.from(images1).map((item) => {
                return (
                  <span>
                    <img
                      style={{ padding: "10px" }}
                      width={150}
                      height={100}
                      src={item ? URL.createObjectURL(item) : null} 
                    />
                  </span>
                );
              })}
              <Button
                onClick={() => {
                  fileRef1.current.click();
                }}
                variant="contained"
              >
                <input
                  ref={fileRef1}
                  hidden
                  type="file"
                  name="image1"
                  onChange={(event) => {
                    setImages1(event.target.files[0]);
                    // let data = event.target.files[0];
                    // signUpApi(data);
                  }}
                  value={formik.values.image1}
                />{" "}
                Image1
              </Button>
              <br />
              <br />
              {/* image2 */}
              <Button
                onClick={() => {
                  fileRef2.current.click();
                }}
                variant="contained"
              >
                <input
                  ref={fileRef2}
                  hidden
                  type="file"
                  name="image2"
                  onChange={(event) => {
                    setImages2(event.target.files[0]);
                    // let data = event.target.files[0];
                    // signUpApi(data);
                  }}
                  value={formik.values.image2}
                />{" "}
                Image2
              </Button>
              <br /> <br />
              {/* image3 */}
              <Button
                onClick={() => {
                  fileRef3.current.click();
                }}
                variant="contained"
              >
                <input
                  ref={fileRef3}
                  hidden
                  type="file"
                  name="image3"
                  onChange={(event) => {
                    setImages3(event.target.files[0]);
                    // let data = event.target.files[0];
                    // signUpApi(data);
                  }}
                  value={formik.values.image3}
                />{" "}
                Image3
              </Button>
              <br /> <br />
              {/* image4 */}
              <Button
                onClick={() => {
                  fileRef4.current.click();
                }}
                variant="contained"
              >
                <input
                  ref={fileRef4}
                  hidden
                  type="file"
                  name="image4"
                  onChange={(event) => {
                    setImages4(event.target.files[0]);
                    // let data = event.target.files[0];
                    // signUpApi(data);
                  }}
                  value={formik.values.image4}
                />{" "}
                Image4
              </Button>
              <br />
              <br />
              <Button
                onClick={() => {
                  handleImage();
                }}
                variant="contained"
              >
                Upload
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
                <Typography>
                  <AddLocationAltIcon style={{ color: "green" }} /> Give Current
                  Location
                </Typography>
                <Button
                  onClick={handleLocation}
                  variant="contained"
                  style={{ marginLeft: "50px" }}
                >
                  click here
                </Button>
                <span style={{ display: "none" }}>
                  <p id="locationText"></p>
                </span>
              </Grid>
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
