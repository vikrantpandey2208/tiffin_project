import React from 'react'
import { Fetch } from '../dbFetch.js'
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Grid,
  CardActionArea,
  CardActions,
  Button,
  IconButton
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


class TiffinSection extends React.Component {
  constructor() {
    super()

    this.getTiffinList = this.getTiffinList.bind(this)

    this.state = {
      tiffins: [],
    }
  }
  componentDidMount() {
    let data = {
      userId: 'Additional details ',
      longitude: 79.98362,
      latitude: 23.189228,
    }
    this.getTiffinList(data)
  }

  async getTiffinList(data) {
    const path = '/api/search-near-tiffin'
    delete data.initialValues
    const response = await Fetch(path, data)
    if (response.success) {
      console.log(response, response.data)
      this.setState({ tiffins: response.data })
    } else {
      console.log('failed in fetching tiffins', response.message)
    }
  }
  render() {
    const { tiffins } = this.state
    return (
      <>  <Grid mt={10} container spacing={3} >     
          {tiffins.map((product) => {
            return (
              <Grid item sm={3} style={{}}>
              <Card  sx={{ maxWidth: 345 }}  key={product._id} variant='contained'>
                <CardActionArea>

                <CardMedia
                  component="img"
                  image={product.photo2}
                  alt="Tiffin img"
                />             
                
                <CardContent>
                  <Grid container>

                  <Typography variant='h6' style={{flexGrow:1, fontSize:'20px',fontWeight:'520' }}>{product.brandName}  </Typography>

                  <div style={{backgroundColor:'green', borderRadius: "10px", width:'42px', height:'30px'}}>                    
                  <IconButton
                   size='small'>
                  <Typography 
                  style={{color:'white',fontSize:'15px'}}>
                   3.5
                  </Typography>
                  <StarIcon 
                  size="small"
                  style={{color:'white',fontSize:'13px'}}/>
                  </IconButton>
                  </div>
                  
                  </Grid> 
                  <Grid container >
                  <Typography variant="subtitle1" style={{flexGrow:1}}>veg</Typography>
                  <Typography variant="subtitle1" ><CurrencyRupeeIcon style={{color:'',fontSize:'13px'}} />{product.price}</Typography>
                  </Grid>              
                  
                </CardContent>

                </CardActionArea>  

                <CardActions>
                  <Button size="small" variant='contained'>
                   Order
                  </Button>
                </CardActions>
              </Card>
              </Grid>
            )
          })}
        
        </Grid>
      </>
    )
  }
}

export default TiffinSection
