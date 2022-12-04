import React from 'react'
import  {Typography ,Grid, Paper} from '@mui/material'
import { NavbarForFooter } from './NavbarForFooter';
import vk from  './vk.jpg';
import kk from './kk.jpg'
import { Container, Stack } from '@mui/system';
import Divider from '@mui/material/Divider';
import './About.css';
import { Footer } from '../Component.js/Footer';

export const About = () => {
  return (
    <>
    <NavbarForFooter/> 
    <Typography variant='h2' ml={10} mt={3}>About-</Typography>   
      <Container >
        <Paper elevation={4}  style={{width:'auto'}}>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
          spacing={3}
          style={{border:'', height:"500px"}}
          mt={3}         
        >
          <Grid item ml={5}>
            <div>
              <img src={kk} className="pic"/>
            </div>
            <Paper>
              
            </Paper>
            <div>
              <Typography variant='h5'>Name - Karan Khatik</Typography>
              <Typography variant='h6'>College - Jabalpur Engineering College</Typography>
              <Typography variant='h6'>Degree - Master of Computer Applications </Typography>              
              <Typography variant='h6'>Project-Detail - Tiffin Services Web Application for the  Minor Project</Typography>
              <Typography variant='h6'>Project-Role - Front-End Developer</Typography>
            </div>
          </Grid>
          <Divider orientation="vertical" />
          <Grid item   >
            <div>
              <img src={vk}  className="pic" />
            </div>
            <div>
              <Typography variant='h5'>Name - Vikrant Pandey</Typography>
              <Typography variant='h6'>College - Jabalpur Engineering College</Typography>
              <Typography variant='h6'>Degree - Master of Computer Applications </Typography>              
              <Typography variant='h6'>Project-Detail - Tiffin Services Web Application for the  Minor Project</Typography>
              <Typography variant='h6'>Project-Role - Back-End Developer</Typography>
            </div>
          </Grid>
        </Stack>
        </Paper>
      </Container>
      <Container style={{paddingTop:'60px', paddingButtom:'100px'}}>       
      <div >
        <Typography variant='h5'>
        Online food ordering is the way to order food through various online web and mobile applications from nearby restaurants, cafe as per customer’s choice and requirement, but most of the time it is expensive instead we can get tiffin service at reasonable price.<br/><br/>

        So the tiffin service is also a very essential service. Online Tiffin Ordering is the process of ordering tiffin online. It is a simple and convenient way for customers to get tiffin service. This is why, Tiffin Ordering App is going to be developed.<br/><br/>

        The purpose of the system is to serve as a platform between service provider and their customer also to assist the customer to get better services at best rate.
        It involves various activities such as creating account, login, searching for tiffin services, getting reviews of providers, comparing and ordering. Also it will include feedback feature as well.
        We all love home cooked food. We can not eat restaurant food for a long time. So proposed system will simply solve this problem. As the name given to the project (HomeFood), this project is made for the person who needs tiffin services. 

        </Typography>
        
        <Typography variant='h3' mt={5} style={{textDecoration:'underline', textDecorationColor:'#ff386a'}}>
        Purpose of Project :-<br/><br/>
         </Typography>
         <Typography variant='h5' style={{}}>
        	 We developed this application to provide best tiffin services to customers at the same time to enhance the &nbsp;&nbsp;&nbsp;&nbsp;earning of tiffin service providers.<br/><br/>
         	This system helps customers to easily search tiffin providers near them.<br/><br/>

        	 This system provides help to compare various tiffin service providers in a particular area.<br/><br/>

         	The system is developed to promote healthy food with minimum cost.<br/><br/>

        	 The system also provides customer to choose one day tiffin.<br/><br/>

         	Providers can register in App and get customers easily.<br/><br/>

        	 Currently Tiffin providers can only reach customers manually so this system is proposed to make reach   &nbsp;&nbsp;&nbsp;&nbsp;simple.

        </Typography>
        </div>
      </Container>
      <Footer/>

    
    
    </>
  )
}

      /* <div style={{paddingLeft:'100px'}}>
      <Typography variant='h4'>This is the Demo Application Designed and developed by -</Typography>
        <Typography variant='h4'>Karan Khatik and Vikrant Pandey </Typography> 
      </div> */
