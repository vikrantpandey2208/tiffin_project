import React from "react";
import { Fetch } from "../dbFetch.js";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Rating,
} from "@mui/material";

async function getTiffinList(data) {
  const path = "/api/search-near-tiffin";
  delete data.initialValues;
  const response = await Fetch(path, data);
  if (response.success) {
    console.log("fetched tiffins", response.data);
  } else {
    console.log("failed in fetching tiffins", response.message);
  }
}

class TiffinSection extends React.Component {
  constructor() {
    super();

    let data = {
      userId: "Additional details ",
      longitude: 79.98362,
      latitude: 23.189228,
    };

    getTiffinList(data);

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
