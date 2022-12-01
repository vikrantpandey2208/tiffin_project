import React from 'react'
import { Typography,Grid} from '@mui/material';
import logo from '../Logo/justdabba.png';
import './BodySection.css';
import { borderRadius } from '@mui/system';

const BodySection = () => {
    return (
        <>

        <Grid container direction="row"  alignItems="center" mt={2} >
            <Grid item sm={6} order={{xs:2,sm:1}} xs={12} mt={5} >
            <Typography variant="h1"    >
                <span  style={{color:'#ff386a', fontWeight:'bold', usecaseShadow:'2px 2px solid black'}}>Home<br/> Food</span> 
            </Typography>
            <Typography variant="h3" color="inherit">
                Nearest <span style={{color:'#ff386a', fontWeight:'bold'}}>Tiffin</span>  in Your <span style={{color:'#ff386a', fontWeight:'bold'}}>Place</span> 
            </Typography>
            </Grid>
            <Grid item sm={6} order={{xs:1,sm:2}}  xs={12} >
            <img src={logo} width="400px" height="100px" align='center' alt='img' />                      
            </Grid>                     
        </Grid>
        <Grid mt={5}>
            <Typography variant='h1'><span style={{color:'#ff386a', }} >Costomer  </span><span style={{color:'black', }}>can</span> </Typography>
        </Grid>

        <Grid mt={2} container spacing={3}  >
              <Grid item> 
              <div className='usecase'>
               choose
              </div>         
              </Grid> 

              <Grid item> 
              <div className='usecase'>
               order
              </div>         
              </Grid>

              <Grid item > 
              <div className='usecase'>
               Pay
              </div>         
              </Grid>

              <Grid item> 
              <div className='usecase'>
               Enjoy
              </div>         
              </Grid>              
        </Grid> 
        </>


    )
}

export default BodySection;

//item xs={12} sm={6} order={{xs:2,sm:1}} mt={5} mr={15}
//item xs={12} sm={6} order={{xs:1,sm:2}}