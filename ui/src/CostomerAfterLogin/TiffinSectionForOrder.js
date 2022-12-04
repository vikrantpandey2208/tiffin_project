import React from "react";
import { Link, Navigate } from "react-router-dom";
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
import { toast } from "react-toastify";
import { getUserDetails } from "../Profile/CostomerProfile.js";
import { hasLocationAccess } from "../Location";

class TiffinSectionForOrder extends React.Component {
  constructor(props) {
    super(props);

    this.getTiffinList = this.getTiffinList.bind(this);

    this.state = {
      tiffins: [],
      showDialog: false,
      selectedTiffin: null,
      goToPay: false,
    };
  }

  handleConfirm() {
    this.setState({
      showDialog: false,
      goToPay: true,
    });
  }

  //Show Dialog box
  openDialog(e) {
    this.setState({
      showDialog: true,
      selectedTiffin: e,
    });
  }

  closeDialog() {
    this.setState({
      showDialog: false,
    });
    console.log("Closed");
  }

  async componentDidMount() {
    let user = getUserDetails();
    if (user == null) {
      toast.info("Session Expired");
    }
    let data = {
      userId: user._id,
    };

    // location
    if (hasLocationAccess()) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          data["latitude"] = position.coords.latitude;
          data["longitude"] = position.coords.longitude;

          this.getTiffinList(data);
        },
        function (error) {
          toast.error(error);
        },
        { maximumAge: 10000, timeout: 5000, enableHighAccuracy: true },
      );
    } else {
      toast.info("Allow Location Access");
    }

    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  async getTiffinList(data) {
    const path = "/api/search-near-tiffin";
    delete data.initialValues;
    const response = await Fetch(path, data);
    if (response.success) {
      this.setState({ tiffins: response.data });
    } else {
      toast.error(response.message);
    }
  }

  render() {
    const { tiffins, goToPay, selectedTiffin } = this.state;

    if (goToPay) {
      return (
        <Navigate to="/cart" state={selectedTiffin} props={selectedTiffin} />
      );
    }

    return (
      <>
        <Grid ml={15} mr={15} mt={5} container spacing={3}>
          {tiffins.map((product) => {
            return (
              <Grid item sm={3} key={product._id}>
                <Paper elevation={24} style={{ width: "270px" }}>
                  <Card sx={{ width: 275, height: 350 }} variant="contained">
                    <CardActionArea onClick={() => this.openDialog(product)}>
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
              By clicking confirm you will go to cart then payment
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
