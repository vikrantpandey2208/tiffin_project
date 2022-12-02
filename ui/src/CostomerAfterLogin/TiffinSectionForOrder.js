import React from "react";
import { Link } from "react-router-dom";
import { Fetch } from "../dbFetch.js";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  CardActionArea,
  CardActions,
  Button,
  Paper,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import DialogContentText from "@mui/material/DialogContentText";
import { getUserDetails } from "../Profile/CostomerProfile.js";

class TiffinSectionForOrder extends React.Component {
  constructor(props) {
    super(props);

    this.getTiffinList = this.getTiffinList.bind(this);

    this.state = {
      tiffins: [],
      showDialog: false,
    };
  }

  handleConfirm() {
    console.log("Clicked Confirm Button");
  }

  //Show Dialog box
  openDialog() {
    this.setState({
      showDialog: true,
    });
  }

  closeDialog() {
    this.setState({
      showDialog: false,
    });
    console.log("Closed");
  }

  async componentDidMount() {
    let data = {
      userId: "demoid",
      longitude: 75.8577258,
      latitude: 22.7195687,
    };
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.getTiffinList(data);
    // Payment();
  }

  async getTiffinList(data) {
    const path = "/api/search-near-tiffin";
    delete data.initialValues;
    const response = await Fetch(path, data);
    if (response.success) {
      // console.log(response, response.data);
      this.setState({ tiffins: response.data });
    } else {
      console.log("failed in fetching tiffins", response.message);
    }
  }
  render() {
    const { tiffins } = this.state;

    return (
      <>
        <Grid ml={5} mr={5} mt={5} container spacing={3}>
          {tiffins.map((product) => {
            return (
              <Grid item sm={3} key={product._id}>
                <Paper elevation={24} style={{ width: "270px" }}>
                  <Card sx={{ width: 275, height: 350 }} variant="contained">
                    <CardActionArea onClick={this.openDialog}>
                      <CardMedia
                        component="img"
                        image={product.photo1}
                        alt="Tiffin img"
                        height="250"
                      />

                      <CardContent>
                        <Grid container>
                          <Typography
                            variant="h6"
                            style={{
                              flexGrow: 1,
                              fontSize: "20px",
                              fontWeight: "520",
                            }}
                          >
                            {product.brandName}{" "}
                          </Typography>
                          <div
                            style={{
                              backgroundColor: "green",
                              borderRadius: "8px",
                              width: "42px",
                              height: "25px",
                              textAlign: "center",
                            }}
                          >
                            <Typography
                              style={{ color: "white", fontSize: "15px" }}
                            >
                              {product.rating}{" "}
                              <StarIcon
                                size="small"
                                style={{ color: "white", fontSize: "13px" }}
                              />
                            </Typography>
                          </div>
                        </Grid>
                        <Grid container>
                          <Typography
                            variant="subtitle1"
                            style={{ flexGrow: 1 }}
                          >
                            {product.category}
                          </Typography>
                          <Typography variant="subtitle1">
                            <CurrencyRupeeIcon
                              style={{ color: "", fontSize: "13px" }}
                            />
                            {product.price}
                          </Typography>
                        </Grid>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <Dialog open={this.state.showDialog} onClose={this.closeDialog}>
          <DialogTitle>Confirm </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              By clicking confirm you will redirect to cart then payment
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleConfirm}>Confirm</Button>
            <Button onClick={this.closeDialog}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default TiffinSectionForOrder;
