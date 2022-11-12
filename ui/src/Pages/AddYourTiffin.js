import React from 'react';
import { useState } from 'react';
import TiffinAdminLogin from '../AddYourTiffin/TiffinAdminLogin';
import TiffinAdminSignup from '../AddYourTiffin/TiffinAdminSignup';
import Navbar from '../Component.js/Navbar';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import { Paper } from '@mui/material';
import { TabList } from '@mui/lab';

const theme = createTheme({
    palette: {
      primary: {
        main: "#ff386a",
      },
    },
  });

  const paperStyle={width:340,margin:"20px auto"}


function AddYourTiffin(){

    const [value, setValue] = useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    return(
        <>
        <ThemeProvider theme={theme}>
            <Navbar/>
        <Paper elevation={20} style={paperStyle}>
            <TabList
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
            >
            <Tab label="Sign In" />
            
            <Tab label="Sign Up" />
            </TabList>
            <TabPanel value={value} index={0}>
            <TiffinAdminLogin handleChange={handleChange}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
            <TiffinAdminSignup/>
            </TabPanel>
        </Paper>
        </ThemeProvider>
        </>
    )
}

export default AddYourTiffin;
