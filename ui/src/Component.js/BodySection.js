import React from 'react'
import { Typography,Grid } from '@mui/material';
import { Box } from '@mui/system';


const BodySection = () => {
    return (
        <Grid container direction="row" alignItems="center">

            <Grid item xs={12} sm={6} order={{xs:2,sm:1}} mt={5} mr={15}>

                <Typography variant="h1"  >
                   <span  style={{color:'#ff386a', fontWeight:'bold', textShadow:'2px 2px solid black'}}>Home<br/> Food</span> 
                </Typography>

                <Typography variant="h3" color="inherit">
                    Nearest <span style={{color:'#ff386a', fontWeight:'bold'}}>Tiffin</span>  in Your <span style={{color:'#ff386a', fontWeight:'bold'}}>Place</span> 
                </Typography>

            </Grid>

            <Grid item xs={12} sm={6} order={{xs:1,sm:2}}>
                <Box> 
                                                           
                </Box>                
            </Grid>            
        </Grid>
    )
}

export default BodySection;