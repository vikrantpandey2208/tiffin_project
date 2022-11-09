import React from 'react'
import { Typography,Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import logo from '../Logo/justdabba.png';
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material';
const BodySection = () => {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" mt={5}>
            <Grid sm={6}>
                <Typography variant="h1"  order={{xs:1,sm:2}} xs={12} >
                   <span  style={{color:'#ff386a', fontWeight:'bold', textShadow:'2px 2px solid black'}}>Home<br/> Food</span> 
                </Typography>
                <Typography variant="h3" color="inherit">
                    Nearest <span style={{color:'#ff386a', fontWeight:'bold'}}>Tiffin</span>  in Your <span style={{color:'#ff386a', fontWeight:'bold'}}>Place</span> 
                </Typography>
            </Grid>
            <Grid sm={6} order={{xs:2,sm:1}}  xs={12} >
            <img src={logo} width="400px" height="100px" style={{marginLeft:'50px', marginBottom:'100px',}} />
                 
                     
            </Grid>            
        </Grid>
    )
}

export default BodySection;

//item xs={12} sm={6} order={{xs:2,sm:1}} mt={5} mr={15}
//item xs={12} sm={6} order={{xs:1,sm:2}}