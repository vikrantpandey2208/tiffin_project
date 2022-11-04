import { AppBar, Typography,Button, Toolbar, Link} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { NavLink } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';



export default function Navbar(){
    return(
        <>
         <AppBar position="static" color='primary'>
            <Toolbar justifyContent="space-evenly">
              <Typography variant="h5" flexGrow={1} >
               Just Dabba
             </Typography>
            <Link underline="none"  color="inherit" variant="outline" component={Button} startIcon={<HomeIcon/>}><NavLink to='/'  style={{textDecoration:'none', color:'inherit'}}>Home</NavLink></Link>  
            <Link underline="none"  color="inherit" variant="text" component={Button} startIcon={<AddBusinessIcon/>}>AddYourTiffin</Link>  
           <Link underline="none"  color="inherit" variant="text" component={Button} startIcon={<LoginIcon />}><NavLink to='/login'  style={{textDecoration:'none', color:'inherit'}}>Login</NavLink></Link> 
            <Link underline="none" color="inherit" variant="text" component={Button} startIcon={<FollowTheSignsIcon/>}><NavLink to='/signup' style={{textDecoration:'none', color:'inherit'}}>SignUp</NavLink></Link>             
            </Toolbar>
            
        </AppBar>
        </>
    );
}