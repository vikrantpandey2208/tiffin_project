import React from 'react'
import { Typography,Card,CardMedia,CardContent, Stack, Rating } from '@mui/material';

const TiffinSection = () => {

    const tiffin =[ {
        image: "https://tse2.mm.bing.net/th?id=OIP.lHvhjPYaQz13OssgcFy2zQHaIq&pid=Api&P=0",
        rating: 4,
        name: "Neelson Tiffin",
        price: 2000,
        one_day: 50,
        category: "Veg",
        selling: 500,
    },
    {
        image: "https://tse2.mm.bing.net/th?id=OIP.lHvhjPYaQz13OssgcFy2zQHaIq&pid=Api&P=0",
        rating: 4,
        name: "Neelson Tiffin",
        price: 2000,
        one_day: 50,
        category: "Veg",
        selling: 500,
    },
    {
        image: "https://tse2.mm.bing.net/th?id=OIP.lHvhjPYaQz13OssgcFy2zQHaIq&pid=Api&P=0",
        rating: 4,
        name: "Neelson Tiffin",
        price: 2000,
        one_day: 50,
        category: "Veg",
        selling: 500,
    },
    {
        image: "https://tse2.mm.bing.net/th?id=OIP.lHvhjPYaQz13OssgcFy2zQHaIq&pid=Api&P=0",
        rating: 4,
        name: "Neelson Tiffin",
        price: 2000,
        one_day: 50,
        category: "Veg",
        selling: 500,
    },
    {
        image: "https://tse2.mm.bing.net/th?id=OIP.lHvhjPYaQz13OssgcFy2zQHaIq&pid=Api&P=0",
        rating: 4,
        name: "Neelson Tiffin",
        price: 2000,
        one_day: 50,
        category: "Veg",
        selling: 500,
    },
    {
        image: "https://tse2.mm.bing.net/th?id=OIP.lHvhjPYaQz13OssgcFy2zQHaIq&pid=Api&P=0",
        rating: 4,
        name: "Neelson Tiffin",
        price: 2000,
        one_day: 50,
        category: "Veg",
        selling: 500,
    },
    {
        image: "https://tse2.mm.bing.net/th?id=OIP.lHvhjPYaQz13OssgcFy2zQHaIq&pid=Api&P=0",
        rating: 4,
        name: "Neelson Tiffin",
        price: 2000,
        one_day: 50,
        category: "Veg",
        selling: 500,
    },
    {
        image: "https://tse2.mm.bing.net/th?id=OIP.lHvhjPYaQz13OssgcFy2zQHaIq&pid=Api&P=0",
        rating: 4,
        name: "Neelson Tiffin",
        price: 2000,
        one_day: 50,
        category: "Veg",
        selling: 500,
    }]
         
    return (
        <>         
         <Stack direction="row" justifyContent="space-evenly" sx={{flexWrap:"wrap"}} mt={10} >
             {
                 tiffin.map(product=>{
                     return(
                        <Card sx={{ maxWidth: "300px", mb:2 }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image={product.image}
                            alt="Tiffin images"                            
                        />
                        <Rating 
                        mt={4}
                        />
                        <Typography ml={20}>{product.category}</Typography>
                        <CardContent >
                            <Typography  variant="h5">
                               {product.name}
                            </Typography>

                            <Typography  variant="h5">
                               {product.price}rs
                            </Typography>
                        </CardContent>
                  
                        </Card>
                     )
                 })
             }
      
         </Stack>
        
        </>
    )
}

export default TiffinSection;
