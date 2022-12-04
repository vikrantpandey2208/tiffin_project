import React, { useEffect } from "react";
import {
  Grid,
  Typography,
  TextField,
  Avatar,
  Stack,
  Button,
} from "@mui/material";
import { GetLoggedUser } from "../Auth/Logged-Seller";
import { deepPurple } from "@mui/material/colors";

export function getUserDetails() {
  let user = GetLoggedUser();
  if (user != null) {
    let token = user.token;
    return token;
  } else return null;
}

export const CostomerProfile = (props) => {
  const [firstName, setFirstName] = React.useState("firstname");
  const [isFirstNameFocused, setIsFirstNamedFocused] = React.useState(false);

  const [lastName, setLastName] = React.useState("lastname");
  const [isLastNameFocused, setIsLastNamedFocused] = React.useState(false);

  const [email, setEmail] = React.useState("email");
  const [phone, setPhone] = React.useState("phone");
  const [isPhoneFocused, setIsPhoneFocused] = React.useState(false);
  const [isEmailFocused, setIsEmailFocused] = React.useState(false);

  //Saved data
  const [save, setSave] = React.useState("save");

  function handleSave(e) {
    setSave("saved");
  }

  useEffect(() => {
    let user = getUserDetails();
    setFirstName(user.firstname);
    setLastName(user.lastname);
    setEmail(user.email);
    setPhone(user.phone);
  });

  let user = getUserDetails().firstname;
  let userLastName = getUserDetails().lastname;
  let firstNameFirstLetter = user.charAt(0);
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

      <Grid container mt={6}>
        <Grid item xs={4}>
          <Typography variant="body1" align="left" mt={3} mr={3} ml={8}>
            First Name:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant="standard"
            label={user}
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

      {/* Contact */}
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
        <Button variant="contained" component="label" onClick={handleSave}>
          Update
        </Button>
      </Grid>
    </>
  );
};
