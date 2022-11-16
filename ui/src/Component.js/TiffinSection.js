import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Rating,
} from "@mui/material";

class TiffinSection extends React.Component {
  constructor() {
    super();
    this.state = {
      tiffins: [],
    };
  }

  render() {
    const { tiffins } = this.state;
    return (
      <>
        <Stack>
          {tiffins.map((product) => {
            return (
              <Card sx={{ maxWidth: "350px", mb: 2 }} key={product.id}>
                <CardMedia
                  component="img"
                  height="250"
                  image={product.image}
                  alt="Tiffin img"
                />
                <Rating mt={4} />
                <Typography ml={20}>{product.category}</Typography>
                <CardContent>
                  <Typography variant="h5">{product.name}</Typography>

                  <Typography variant="h5">{product.price}rs</Typography>
                </CardContent>
              </Card>
            );
          })}
        </Stack>
      </>
    );
  }
}

export default TiffinSection;
