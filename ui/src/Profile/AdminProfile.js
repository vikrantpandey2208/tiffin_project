import React, { useEffect } from "react";
import AdminAfterLogin from "../AdminLoginSignup/AdminAfterLogin";
import { Grid,  Typography, TextField, Button, Avatar, Divider } from "@mui/material";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { NavBarSellerProfile } from "./NavBarSellerProfile";
import { GetLoggedSeller } from "../Auth/Logged-Seller";
import {  deepPurple } from '@mui/material/colors';

let firstNameFirstLetter = "";
let lastNameFirstLetter = "";

const fontStyle = {
  fontSize: "25px",
  color: "black",
};

export const AdminProfile = () => {
  const [firstName, setFirstName] = React.useState("firstname");
  const [isFirstNameFocused, setIsFirstNamedFocused] = React.useState(false);

  const [lastName, setLastName] = React.useState("lastname");
  const [isLastNameFocused, setIsLastNamedFocused] = React.useState(false);

  const [email, setEmail] = React.useState("email");
  const [isEmailFocused, setIsEmailFocused] = React.useState(false);

  //Saved data
  const [save, setSave] = React.useState("save");

  function handleSave(e) {
    setSave("saved");
  }

  function getSellerDetails() {
    let user = GetLoggedSeller();

    // console.log(user.token, "user profile");
    
    if (user != null) {
      let token = user.token;
      setFirstName(token.firstname);
      setLastName(token.lastname);
      setEmail(token.email);     
     
    }
  }

  useEffect(() => {
    getSellerDetails();
  });
  
  let firstNameFirstLetter = firstName.charAt(0);
  let lastNameFirstLetter = lastName.charAt(0);
  



  return (
    <>
      
              
      <Avatar style={{marginLeft:'30px', marginButton:'5px'}} sx={{ bgcolor: deepPurple[500] }}>{firstNameFirstLetter + lastNameFirstLetter }</Avatar>
      
      <Divider/>
          <br/>
          {/* First Name */}          
            <Typography
              variant="h5"
              style={{
                color: "#00000099",
                fontSize:'16px'
              }}
            >
              First name
            </Typography>           
              <Typography
                style={fontStyle}               
              >
                {firstName}
              </Typography>         
          
          {/* LastName */}          
            <Typography
              variant="h5"
              style={{
                color: "#00000099",
                fontSize:'16px'
              }}
            >
              Last name
            </Typography>           
              <Typography
                style={fontStyle}               
              >
                {lastName}
              </Typography>        
          
          {/* Email adress */}          
            <Typography
              variant="h5"
              style={{
                color: "#00000099",
                fontSize:'16px'
              }}
            >
              Email
            </Typography>           
              <Typography
                style={fontStyle}              
              >
                {email}
              </Typography>

              {/* Contact Detail */}

              {/* <Typography
              variant="h5"
              style={{
                color: "#00000099",
                fontSize:'16px'
              }}
            >
              Contact 
            </Typography>           
              <Typography
                style={fontStyle}              
              >
                {}
              </Typography> */}
        
      
    </>
  );
};






















































// import React, { useEffect } from "react";
// import AdminAfterLogin from "../AdminLoginSignup/AdminAfterLogin";
// import { Grid,  Typography, TextField, Button, Avatar } from "@mui/material";
// import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
// import { NavBarSellerProfile } from "./NavBarSellerProfile";
// import { GetLoggedSeller } from "../Auth/Logged-Seller";
// import {  deepPurple } from '@mui/material/colors';

// let firstNameFirstLetter = "";
// let lastNameFirstLetter = "";
// const paperStyle = {
//   padding: 20,
//   height: "",
//   width: "400px",
//   margin: "20px auto",
// };
// const fontStyle = {
//   fontSize: "30px",
//   color: "black",
//   marginTop: "10px",
// };

// export const AdminProfile = () => {
//   const [firstName, setFirstName] = React.useState("firstname");
//   const [isFirstNameFocused, setIsFirstNamedFocused] = React.useState(false);

//   const [lastName, setLastName] = React.useState("lastname");
//   const [isLastNameFocused, setIsLastNamedFocused] = React.useState(false);

//   const [email, setEmail] = React.useState("email");
//   const [isEmailFocused, setIsEmailFocused] = React.useState(false);

//   //Saved data
//   const [save, setSave] = React.useState("save");

//   function handleSave(e) {
//     setSave("saved");
//   }

//   function getSellerDetails() {
//     let user = GetLoggedSeller();

//     // console.log(user.token, "user profile");
    
//     if (user != null) {
//       let token = user.token;
//       setFirstName(token.firstname);
//       setLastName(token.lastname);
//       setEmail(token.email);
//       let firstNameFirstLetter = token.firstname.charAt(0);
//       let lastNameFirstLetter = token.lastname.charAt(0);
//     }
//   }

//   useEffect(() => {
//     getSellerDetails();
//   });

  



//   return (
//     <>
      
//       <Grid container>
        
//       <Avatar style={{marginLeft:'30px'}} sx={{ bgcolor: deepPurple[500] }}>{firstNameFirstLetter + lastNameFirstLetter }</Avatar>
//           <br /><br/>
//           {/* First Name */}
//           <div>
//             <Typography
//               variant="h5"
//               style={{
//                 color: "#00000099",
//                 fontSize:'16px'
//               }}
//             >
//               First name
//             </Typography><br/>
//             {!isFirstNameFocused ? (
//               <Typography
//                 style={fontStyle}
//                 onClick={() => {
//                   setIsFirstNamedFocused(true);
//                 }}
//               >
//                 {firstName}
//               </Typography>
//             ) : (
//               <TextField
//                 style={fontStyle}
//                 autoFocus
//                 value={firstName}
//                 onChange={(event) => setFirstName(event.target.value)}
//                 onBlur={(event) => setIsFirstNamedFocused(false)}
//               />
//             )}
//           </div>
//           <br />
//           {/* LastName */}
//           <div>
//             <Typography
//               variant="h5"
//               style={{
//                 color: "#00000099",
//                 fontSize:'16px'
//               }}
//             >
//               Last name
//             </Typography>
//             {!isLastNameFocused ? (
//               <Typography
//                 style={fontStyle}
//                 onClick={() => {
//                   setIsLastNamedFocused(true);
//                 }}
//               >
//                 {lastName}
//               </Typography>
//             ) : (
//               <TextField
//                 style={fontStyle}
//                 autoFocus
//                 value={lastName}
//                 onChange={(event) => setLastName(event.target.value)}
//                 onBlur={(event) => setIsLastNamedFocused(false)}
//               />
//             )}
//           </div>
//           <br />
//           {/* Email adress */}
//           <div>
//             <Typography
//               variant="h5"
//               style={{
//                 color: "#00000099",
//                 fontSize:'16px'
//               }}
//             >
//               Email
//             </Typography>
//             {!isEmailFocused ? (
//               <Typography
//                 style={fontStyle}
//                 onClick={() => {
//                   setIsEmailFocused(true);
//                 }}
//               >
//                 {email}
//               </Typography>
//             ) : (
//               <TextField
//                 style={fontStyle}
//                 autoFocus
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}
//                 onBlur={(event) => setIsEmailFocused(false)}
//               />
//             )}
//           </div>
//           <br />
//           {/* <Grid ml={15}>
//             <Button variant="contained" component="label" onClick={handleSave}>
//               {save}
//             </Button>
//           </Grid> */}
        
//       </Grid>
//     </>
//   );
// };

