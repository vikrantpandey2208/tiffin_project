import React, { useEffect } from "react";
import { GetLoggedSeller } from "../Auth/Logged-Seller";
import { deepPurple } from "@mui/material/colors";
import {
  Grid,
  Typography,
  TextField,
  Avatar,
  Button,
} from "@mui/material";

const fontStyle = {};

export function getSellerDetails() {
  let user = GetLoggedSeller();
  if (user != null) {
    let token = user.token;
    return token;
  } else return null;
}

export const AdminProfile = () => {
  const [firstName, setFirstName] = React.useState("firstname");
  const [isFirstNameFocused, setIsFirstNamedFocused] = React.useState(false);

  const [lastName, setLastName] = React.useState("lastname");
  const [isLastNameFocused, setIsLastNamedFocused] = React.useState(false);

  const [email, setEmail] = React.useState("email");
  const [phone, setPhone] = React.useState("phone");
  const [isPhoneFocused, setIsPhoneFocused] = React.useState(false);
  const [isEmailFocused, setIsEmailFocused] = React.useState(false);

  useEffect(() => {
    let user = getSellerDetails();
    setFirstName(user.firstname);
    setLastName(user.lastname);
    setEmail(user.email);
    setPhone(user.phone);
  });

  let seller = getSellerDetails();

  let fName = seller.firstname;
  let userLastName = seller.lastname;
  let firstNameFirstLetter = fName.charAt(0);
  let lastNameFirstLetter = userLastName.charAt(0);

  return (
    <>
      <Avatar
        sx={{
          width: 100,
          height: 100,
          bgcolor: deepPurple[500],
          boxShadow: 1,
          margin: "auto",
        }}
      >
        {firstNameFirstLetter + lastNameFirstLetter}
      </Avatar>

      {/* First Name */}
      <Grid container mt={6}>
        <Grid item xs={4}>
          <Typography variant="body1" align="left" mt={3} mr={3} ml={8}>
            First Name:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            label={fName}
            margin="none"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </Grid>
      </Grid>

      {/* LastName */}
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="body1" align="left" mt={3} mr={3} ml={8}>
            Last Name:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            label={userLastName}
            margin="none"
            onChange={(event) => setLastName(event.target.value)}
          />
        </Grid>
      </Grid>
      {/* Email adress */}
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="body1" align="left" mt={3} mr={3} ml={8}>
            Email:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            label={email}
            fullWidth
            margin="none"
            onChange={(event) => setEmail(event.target.value)}
          />
        </Grid>
      </Grid>

      {/* Contact Detail */}

      <Grid container>
        <Grid item xs={4}>
          <Typography variant="body1" align="left" mt={3} mr={3} ml={8}>
            Contact:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            label={phone}
            margin="none"
            onChange={(event) => setPhone(event.target.value)}
          />
        </Grid>
      </Grid>
      <Grid container alignItems="center" justifyContent="center" mt={5} mb={0}>
        <Button variant="contained" component="label">
          Update
        </Button>
      </Grid>
    </>
  );
};
