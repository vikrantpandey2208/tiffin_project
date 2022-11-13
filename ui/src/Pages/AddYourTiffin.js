import { AppBar, Typography,Button, Toolbar, Link, Grid} from '@mui/material';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

import LoginIcon from '@mui/icons-material/Login';
import ControlPointIcon from '@mui/icons-material/ControlPoint';




export default function AddYourTiffin(){
    return(
        <>
        <Grid container>
         <AppBar position="static" color='primary'>
            <Toolbar >
              <Typography variant="h5" flexGrow={1} >
               Just Dabba
             </Typography>
             <Link underline="none"  color="inherit" variant="outline" component={Button} startIcon={<HomeIcon/>}><NavLink to='/'  style={{textDecoration:'none', color:'inherit'}}>Home</NavLink></Link>  
           <Link underline="none"  color="inherit" variant="text" component={Button} startIcon={<LoginIcon/>} ><NavLink to='/loginadmin'  style={{textDecoration:'none', color:'inherit'}}>Login</NavLink></Link> 
            <Link underline="none" color="inherit" variant="text" component={Button} startIcon={<ControlPointIcon/>}><NavLink to='/signupadmin' style={{textDecoration:'none', color:'inherit'}}>Signup</NavLink></Link>             
            </Toolbar>
            
        </AppBar>
        </Grid>
        </>
    );
}