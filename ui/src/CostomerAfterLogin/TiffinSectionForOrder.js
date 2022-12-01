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
import ConfirmOrder from "../Order/ConfirmOrder.js";

class TiffinSectionForOrder extends React.Component {
  constructor(props) {
    super(props);

    this.getTiffinList = this.getTiffinList.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.handleConfirm = this.handleConfirm(this);

    this.state = {
      tiffins: [],
      showDialog: false,
    };
  }

  handleConfirm() {
    this.setState({
      showDialog: false,
    });
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

  componentDidMount() {
    let data = {
      userId: "demoid",
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
        <Grid ml={5} mr={5} mt={5}  container spacing={3}>
          {tiffins.map((product) => {
            return (
              <Grid item sm={3} style={{}} key={product._id}>
                <Paper elevation={24} style={{width:'270px'}}>
                  <Card
                    sx={{width:275,height:350 }}
                    variant="contained"
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={product.photo1}
                        alt="Tiffin img"
                        height=''
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
                            veg
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

                    <CardActions>
                      <ConfirmOrder />
                      <Button
                        size="small"
                        variant="contained"
                        style={{ alignContent: "left", fontSize: "11px" }}
                        onClick={this.openDialog}
                      >
                        Order
                      </Button>

                      <Dialog
                        open={this.state.showDialog}
                        onClose={this.state.showDialog}
                      >
                        <DialogTitle>Confirm Your Order</DialogTitle>
                        <DialogContent>Confirm this order</DialogContent>
                        <DialogActions>
                          <Button onClick={this.handleConfirm}>confirm</Button>
                          <Button onClick={this.closeDialog}>cancel</Button>
                        </DialogActions>
                      </Dialog>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </>
    );
  }
}

export default TiffinSectionForOrder;
