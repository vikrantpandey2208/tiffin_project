import {  Grid,Button, ImageList, ImageListItem,Paper,Rating, Typography } from '@mui/material'
import React from 'react';
import photo1 from './cimage/a.jpg';
import photo2 from './cimage/b.png';
import photo3 from './cimage/c.jpg';
import photo4 from './cimage/d.jpg';

export const CartDetail = () => {
    const [rating, setRating] = React.useState();
    function handleChange(){
        setRating()
    }
  return (
    <>
     <Paper style={{height:'80vh', }}>     
        <Grid
        container
        mt={10}
        ml={5}
        direction="row"
        justifyContent="center"
        alignItems="center"    
        >       
         
            <Grid item xs={4} pl={15} pt={10}>
                <ImageList  cols={3} rowHeight={164}>
                    <ImageListItem>
                        <img src={photo1} className="images"/>
                    </ImageListItem>
                    <ImageListItem>
                    <img src={photo2} className="images"/>
                    </ImageListItem>
                    <ImageListItem>
                    <img src={photo3} className="images"/>
                    </ImageListItem>
                    <ImageListItem>
                    <img src={photo4} className="images"/>
                    </ImageListItem>
                </ImageList>
            </Grid>            

            <Grid item xs={8} pl={10} pt={10}>                
                <Typography style={{fontWeight:'bold'}} variant='h4'>Product.name</Typography>   
                <Rating
                name="simple-controlled"
                value={rating}
                onChange={handleChange}
                />             
                <Typography>Product.Price</Typography>
                <Typography>Product.Address</Typography>
                <Typography>Description</Typography><br/>
                <Button ml={15}>Payment</Button>
            </Grid>           
            
        </Grid>
    </Paper>
    
    
    </>
  )
}
