import { AppBar, Typography,Button, Toolbar, Link, Grid} from '@mui/material';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';




export default function Navbar(){
    return(
        <>
        <Grid container>
         <AppBar position="static" color='primary'>
            <Toolbar >
              <Typography variant="h5" flexGrow={1} >
               Just Dabba
             </Typography>
            <Link underline="none"  color="inherit" variant="outline" component={Button} startIcon={<HomeIcon/>}><NavLink to='/'  style={{textDecoration:'none', color:'inherit'}}>Home</NavLink></Link>  
            <Link underline="none"  color="inherit" variant="text" component={Button} startIcon={<AddBusinessIcon/>}><NavLink to='/addyourtiffin'  style={{textDecoration:'none', color:'inherit'}}>AddYourTiffin</NavLink></Link>  
           <Link underline="none"  color="inherit" variant="text" component={Button} ><NavLink to='/login'  style={{textDecoration:'none', color:'inherit'}}>Login</NavLink></Link> 
            <Link underline="none" color="inherit" variant="text" component={Button} ><NavLink to='/signup' style={{textDecoration:'none', color:'inherit'}}>SignUp</NavLink></Link>             
            </Toolbar>
            
        </AppBar>
        </Grid>
        </>
    );
}