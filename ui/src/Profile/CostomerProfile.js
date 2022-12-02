import React, { useEffect } from "react";
import { Grid,  Typography, TextField,  Avatar, Divider } from "@mui/material";
import { GetLoggedUser } from "../Auth/Logged-Seller";
import {  deepPurple } from '@mui/material/colors';


const fontStyle = {
  fontSize: "20px",
  color: "black",
  marginTop: "10px",
  
};

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
    console.log(user);
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
          
         
        <Avatar style={{marginLeft:'30px'}} sx={{ bgcolor: deepPurple[500] }}>{firstNameFirstLetter + lastNameFirstLetter }</Avatar>
        <Divider/>
          <br />
          {/* First Name */}
          <div>
            <Typography
              variant="h5"
              style={{
                color: "#00000099",
                fontSize:'16px',
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
          
          {/* LastName */}
          <div>
            <Typography
              variant="h5"
              style={{
                color: "#00000099",
                fontSize:'16px',
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
          
          {/* Email adress */}
          <div>
            <Typography
              variant="h5"
              style={{
                color: "#00000099",
                fontSize:'16px',
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
          <div>
            <Typography
              variant="h5"
              style={{
                color: "#00000099",
                fontSize:'16px',
              }}
            >
              Contact
            </Typography>
            {!isEmailFocused ? (
              <Typography
                style={fontStyle}
                onClick={() => {
                  setIsPhoneFocused(true);
                }}
              >
                {phone}
              </Typography>
            ) : (
              <TextField
                style={fontStyle}
                autoFocus
                value={email}
                onChange={(event) => setPhone(event.target.value)}
                onBlur={(event) => setIsPhoneFocused(false)}
              />
            )}
          </div>
          
          <Grid ml={15}>
            {/* <Button variant="contained" component="label" onClick={handleSave}>
              Update
            </Button> */}
          </Grid>
        
      
    </>
  );
};






































// import React, { useEffect } from "react";
// import { Grid,  Typography, TextField,  Avatar, Divider } from "@mui/material";
// import { GetLoggedUser } from "../Auth/Logged-Seller";
// import {  deepPurple } from '@mui/material/colors';


// const fontStyle = {
//   fontSize: "20px",
//   color: "black",
//   marginTop: "10px",
  
// };

// export function getUserDetails() {
//   let user = GetLoggedUser();
//   if (user != null) {
//     let token = user.token;
//     return token;
//   } else return null;
// }

// export const CostomerProfile = (props) => {
//   const [firstName, setFirstName] = React.useState("firstname");
//   const [isFirstNameFocused, setIsFirstNamedFocused] = React.useState(false);

//   const [lastName, setLastName] = React.useState("lastname");
//   const [isLastNameFocused, setIsLastNamedFocused] = React.useState(false);

//   const [email, setEmail] = React.useState("email");
//   const [phone, setPhone] = React.useState("phone");
//   const [isPhoneFocused, setIsPhoneFocused] = React.useState(false);
//   const [isEmailFocused, setIsEmailFocused] = React.useState(false);

//   //Saved data
//   const [save, setSave] = React.useState("save");

//   function handleSave(e) {
//     setSave("saved");
//   }

//   useEffect(() => {
//     let user = getUserDetails();
//     console.log(user);
//     setFirstName(user.firstname);
//     setLastName(user.lastname);
//     setEmail(user.email);
//     setPhone(user.phone);
//   });
//   let user = getUserDetails().firstname;
//   let userLastName = getUserDetails().lastname;
//   let firstNameFirstLetter = user.charAt(0);
//   let lastNameFirstLetter = userLastName.charAt(0);
//   return (
//     <>
          
         
//         <Avatar style={{marginLeft:'30px'}} sx={{ bgcolor: deepPurple[500] }}>{firstNameFirstLetter + lastNameFirstLetter }</Avatar>
//         <Divider/>
//           <br />
//           {/* First Name */}
//           <div>
//             <Typography
//               variant="h5"
//               style={{
//                 color: "#00000099",
//                 fontSize:'16px',
//               }}
//             >
//               First name
//             </Typography>
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
          
//           {/* LastName */}
//           <div>
//             <Typography
//               variant="h5"
//               style={{
//                 color: "#00000099",
//                 fontSize:'16px',
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
          
//           {/* Email adress */}
//           <div>
//             <Typography
//               variant="h5"
//               style={{
//                 color: "#00000099",
//                 fontSize:'16px',
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
//           <div>
//             <Typography
//               variant="h5"
//               style={{
//                 color: "#00000099",
//                 fontSize:'16px',
//               }}
//             >
//               Contact
//             </Typography>
//             {!isEmailFocused ? (
//               <Typography
//                 style={fontStyle}
//                 onClick={() => {
//                   setIsPhoneFocused(true);
//                 }}
//               >
//                 {phone}
//               </Typography>
//             ) : (
//               <TextField
//                 style={fontStyle}
//                 autoFocus
//                 value={email}
//                 onChange={(event) => setPhone(event.target.value)}
//                 onBlur={(event) => setIsPhoneFocused(false)}
//               />
//             )}
//           </div>
          
//           <Grid ml={15}>
//             {/* <Button variant="contained" component="label" onClick={handleSave}>
//               Update
//             </Button> */}
//           </Grid>
        
      
//     </>
//   );
// };
