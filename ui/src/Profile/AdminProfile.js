import React from "react";
import AdminAfterLogin from "../AdminLoginSignup/AdminAfterLogin";
import { Grid, Paper, Typography, TextField, Button } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { NavBarSellerProfile } from "./NavBarSellerProfile";

export const AdminProfile = () => {
  return (
    <>
      <NavBarSellerProfile />
      <Grid container>
        <Paper elevation={10} style={paperStyle}>
          <Typography
            ml={12}
            variant="h4"
            style={{
              color: "white",
              backgroundColor: "#ff386a",
              width: "40%",
              borderRadius: "5px",
              align: "center",
            }}
          >
            <ManageAccountsIcon /> Profile
          </Typography>
          <br />
          {/* First Name */}
          <div>
            <Typography
              variant="h5"
              style={{
                color: "white",
                backgroundColor: "#ff386a",
                width: "40%",
                borderRadius: "5px",
              }}
            >
              First name
            </Typography>
            {!isFirstNameFocused ? (
              <Typography
                style={fontStyle}
                onClick={() => {
                  setIsFirstNamedFocused(true);
                }}
              >
                {firstName}
              </Typography>
            ) : (
              <TextField
                style={fontStyle}
                autoFocus
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                onBlur={(event) => setIsFirstNamedFocused(false)}
              />
            )}
          </div>
          <br />
          {/* LastName */}
          <div>
            <Typography
              variant="h5"
              style={{
                color: "white",
                backgroundColor: "#ff386a",
                width: "40%",
                borderRadius: "5px",
              }}
            >
              Last name
            </Typography>
            {!isLastNameFocused ? (
              <Typography
                style={fontStyle}
                onClick={() => {
                  setIsLastNamedFocused(true);
                }}
              >
                {lastName}
              </Typography>
            ) : (
              <TextField
                style={fontStyle}
                autoFocus
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                onBlur={(event) => setIsLastNamedFocused(false)}
              />
            )}
          </div>
          <br />
          {/* Email adress */}
          <div>
            <Typography
              variant="h5"
              style={{
                color: "white",
                backgroundColor: "#ff386a",
                width: "40%",
                borderRadius: "5px",
              }}
            >
              Email
            </Typography>
            {!isEmailFocused ? (
              <Typography
                style={fontStyle}
                onClick={() => {
                  setIsEmailFocused(true);
                }}
              >
                {email}
              </Typography>
            ) : (
              <TextField
                style={fontStyle}
                autoFocus
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onBlur={(event) => setIsEmailFocused(false)}
              />
            )}
          </div>
          <br />
          <Grid ml={15}>
            <Button variant="contained" component="label" onClick={handleSave}>
              {save}
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};
