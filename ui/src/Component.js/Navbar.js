import { AppBar, Typography,Button, Toolbar, Grid} from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LoginIcon from '@mui/icons-material/Login';
import ControlPointIcon from '@mui/icons-material/ControlPoint';

const useStyle = {
    display:'none',
    
}


export default function Navbar(){
    return(
        <>
        <Grid container>
         <AppBar position="static" color='primary'>
            <Toolbar >
              <Typography variant="h6" style={{flexGrow:1}} >
               Just Dabba
             </Typography>
             <div>
             <Button component={Link} to='/' color="inherit" startIcon={<HomeIcon/>}>Home</Button>
             <Button component={Link} to='/addyourtiffin' color="inherit" startIcon={<AddBusinessIcon/>}>AddYourTiffin</Button>
             <Button component={Link} to='/login' color="inherit" startIcon={<LoginIcon/>}>Login</Button>
             <Button component={Link} to='/signup' color="inherit" startIcon={<ControlPointIcon/>}>Signup</Button>
             </div>            
            </Toolbar>            
        </AppBar>
        </Grid>
        </>
    );
}