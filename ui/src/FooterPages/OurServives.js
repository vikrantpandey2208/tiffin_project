import React from 'react'
import { Typography, Grid } from '@mui/material'
import { NavbarForFooter } from './NavbarForFooter'
export const OurServices = () => {
  return (
    <>
    <NavbarForFooter/>
   
    <Grid container mt={10}>
      <div style={{paddingLeft:'100px'}}>
      <Typography variant='h4'>This is the Demo Application Designed and developed by -</Typography>
        <Typography variant='h4'>Karan Khatik and Vikrant Pandey </Typography> 
      </div>
      

    </Grid>

    </>
  )
}
