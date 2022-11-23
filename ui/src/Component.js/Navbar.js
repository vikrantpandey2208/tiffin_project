import { AppBar, Typography,Button, Toolbar, Grid, Dialog, DialogContent, DialogActions} from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LoginIcon from '@mui/icons-material/Login';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import TiffinAdminLogin from '../AdminLoginSignup/TiffinAdminLogin'
import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';




const useStyle = {
    display:'none',
    
}




export default function Navbar(){

    const [showDialog, setShowDialog] = React.useState(false);

    const openDialog = () => {
        setShowDialog(true);
    }

    const closeDialog = () => {
        setShowDialog(false)
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return(
        <>
        <Grid container>
         <AppBar position="static" color='primary'>
            <Toolbar >
                
              <Typography variant="h6" style={{flexGrow:1}} >
               Just Dabba
             </Typography>
             
             <Button component={Link} to='/' color="inherit" > <HomeIcon style={{fontSize:'20px'}}/> Home</Button>
             <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color="inherit"                
             >
                <LoginIcon style={{fontSize:'20px'}} /> Login
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
            >
                <MenuItem onClick={handleClose} component={Link} to='/login'>Login</MenuItem>
                <MenuItem onClick={handleClose} component={Link} to='/signup'>Signup</MenuItem>
                
            </Menu>             
             <Button onClick={openDialog} color="inherit"  >  AddYourTiffin</Button>
             <Dialog open={showDialog} onClose={closeDialog} >
                <DialogContent>
                <TiffinAdminLogin />
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDialog}>close</Button>
                </DialogActions>              
             </Dialog>             
                        
            </Toolbar>            
        </AppBar>
        </Grid>
        </>
    );
}