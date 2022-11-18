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

class TiffinSection extends React.Component {
  constructor() {
    super();

    this.getTiffinList = this.getTiffinList.bind(this);

    this.state = {
      tiffins: [],
    };
  }
  componentDidMount() {
    let data = {
      userId: "Additional details ",
      longitude: 79.98362,
      latitude: 23.189228,
    };
    this.getTiffinList(data);
  }

  async getTiffinList(data) {
    const path = "/api/search-near-tiffin";
    delete data.initialValues;
    const response = await Fetch(path, data);
    if (response.success) {
      this.setState({ tiffins: response.data });
    } else {
      console.log("failed in fetching tiffins", response.message);
    }
  }
  render() {
    const { tiffins } = this.state;
    return (
      <>
        <Stack>
          {tiffins.map((product) => {
            return (
              <Card sx={{ maxWidth: "350px", mb: 2 }} key={product._id}>
                <CardMedia
                  component="img"
                  height="250"
                  image={product.photo1}
                  alt="Tiffin img"
                />
                <Rating mt={4} />
                <Typography ml={20}>{product.category}</Typography>
                <CardContent>
                  <Typography variant="h5">{product.price}</Typography>

                  <Typography variant="h5">{product._id}</Typography>
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
