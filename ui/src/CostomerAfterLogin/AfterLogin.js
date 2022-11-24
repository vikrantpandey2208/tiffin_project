import React from "react";
import { AppBar, Typography, Button, Toolbar, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import UserProfileMenu from "./UserProfileMenu";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { GetLoggedUser } from "../Auth/Logged-Seller";
import TiffinSectionForOrder from "./TiffinSectionForOrder";
import { Footer } from "../Component.js/Footer";

// name
function getUserDetails() {
  let user = GetLoggedUser();
  return user;
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const AfterLogin = () => {
  let detail = getUserDetails();
  if (detail != null) console.log(detail.token, "Details of user");
  return (
    <>
      <Grid container>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h5" flexGrow={1}>
              Just Dabba
            </Typography>           
            <Button variant="h6" component={Link}>
              <UserProfileMenu />
            </Button>
          </Toolbar>
        </AppBar>        
        </Grid>     
      <Grid container >
      <TiffinSectionForOrder/>
      </Grid>      
      <Footer />     
    </>
  );
};

export default AfterLogin;
