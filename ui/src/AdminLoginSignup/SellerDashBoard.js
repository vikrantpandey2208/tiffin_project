import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogActions, Paper } from "@mui/material";
import { AdminProfile } from '../Profile/AdminProfile';


export default function BasicMenu() {

  const [showDialogLogin, setShowDialogLogin] = React.useState(false);


    const closeDialogLogin = () => {
        setShowDialogLogin(false)
    }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setShowDialogLogin(true);
    setAnchorEl(null);

  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
        startIcon={<StorefrontIcon/>}
      >
        Seller
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} >
        Profile 
        </MenuItem>       
        <MenuItem onClick={handleClose} component={Link} to='/addtiffin' >Add Tiffin</MenuItem>
        <MenuItem onClick={handleClose}>Order</MenuItem>
      </Menu>

      <Paper>      
      <Dialog open={showDialogLogin} onClose={closeDialogLogin} sx={{ m: 0, p: 2 }} >
          <DialogContent style={{width:'300px', marginLeft:'70px'}}>
            <AdminProfile />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialogLogin}>close</Button>
          </DialogActions>
        </Dialog>
        </Paper>
    </div>
  );
}