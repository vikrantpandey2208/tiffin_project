import React from 'react'
import { Typography,Grid} from '@mui/material';
import logo from '../Logo/justdabba.png';
import './BodySection.css';




const BodySection = () => {
    return (
        <>
        {/* logo and purpose typography */}
        <Grid container direction="row"  alignItems="center" mt={2} >
        <Grid item sm={6} order={{xs:2,sm:1}} xs={12} mt={5} >
            <Typography variant="h1"    >
                <span  style={{color:'#ff386a', fontWeight:'bold', usecaseShadow:'2px 2px solid black'}}>Home Food</span> 
            </Typography>
            <Typography variant="h3" color="inherit">
                Nearest Tiffin in Your Place 
            </Typography>
            </Grid>
            <Grid item sm={6} order={{xs:1,sm:2}}  xs={12} >
            <img src={logo} width="350px" height="80px" align='center' alt='img' style={{marginLeft:'150px', marginTop:'80px'}} />                      
            </Grid>                     
        </Grid>
        <Grid mt={5}>
            <Typography variant='h3'><span style={{color:'#ff386a', }} >Customer  </span><span style={{color:'black', }}>can..</span> </Typography>
        </Grid>
         {/* usecase svg and Typography */}
        <Grid  container spacing={6}  >
              <Grid item> 
              <div className='usecase1'>                        
              </div>
              <Typography variant='h5' color='#F50057' style={{ marginLeft:'100px', fontWeight:'bold'}}>Choose</Typography>         
              </Grid> 

              <Grid item>                
                <div className='usecase2'>                
                </div>
                <Typography variant='h5' color='#F50057' style={{ marginLeft:'100px', fontWeight:'bold'}}>Order</Typography>                    
              </Grid>

              <Grid item > 
              <div className='usecase3'>             
              </div> 
              <Typography variant='h5' color='#F50057' style={{ marginLeft:'100px', fontWeight:'bold'}}>Pay</Typography>        
              </Grid>

              <Grid item> 
              <div className='usecase4'>               
              </div> 
              <Typography variant='h5' color='#F50057' style={{ marginLeft:'100px', fontWeight:'bold'}}>Enjoy</Typography>
                      
              </Grid>              
        </Grid> 


        </>


    )
}

export default BodySection;