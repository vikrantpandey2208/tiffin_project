import React from 'react'
import { AppBar, Typography,Button, Toolbar,  Grid} from '@mui/material';
import { Link } from 'react-router-dom';
import CustomerProfileMenu from '../CustomerAfterLogin/CustomerProfileMenu';

export const NavBarCostomerProfile = () => {
  return (
    <>
    <Grid container>
         <AppBar position="static" color='primary'>
            <Toolbar >
              <Typography variant="h5" flexGrow={1} >
               Just Dabba
             </Typography>          
                <Button variant='h6' component={Link}  ><CustomerProfileMenu/></Button>                               
            </Toolbar>            
        </AppBar>      
        </Grid>
    </>
  )
}
