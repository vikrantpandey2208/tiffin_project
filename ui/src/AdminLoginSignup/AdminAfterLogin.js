import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import { AppBar, Typography,Button, Toolbar,  Grid} from '@mui/material';
import { Link } from 'react-router-dom';

import { BusinessTwoTone } from '@mui/icons-material';
import SellerDashBoard from './SellerDashBoard'

export const AdminAfterLogin = () => {
  return (
    <>
      <Grid container>
         <AppBar position="static" color='primary'>
            <Toolbar >
              <Typography variant="h5" flexGrow={1} >
               Just Dabba
             </Typography>
                <Button variant='h6' component={Link} ><SellerDashBoard/></Button>
                <Button component={Link}  color="inherit" startIcon={<LogoutIcon/>}>Logout</Button>                
            </Toolbar>            
        </AppBar>      
        </Grid>

    </>
  )
}
