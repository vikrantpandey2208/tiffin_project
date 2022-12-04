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
  Paper,
  Dialog,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import Login from "../Pages/Login.js";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { toast } from "react-toastify";

class TiffinSection extends React.Component {
  constructor() {
    super();

    this.getTiffinList = this.getTiffinList.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.openDialogLogin = this.openDialogLogin.bind(this);
    this.state = {
      tiffins: [],
      showDialogLogin: false,
    };
  }

  componentDidMount() {
    //TODO select
    let data = {
      userId: "demoid",
      longitude: 75.8577258,
      latitude: 22.7195687,
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
      console.log("failed in fetching tiffins", response.err.code);
      toast.info("Check you network connection please");
    }
  }

  // click on tiffin event handling
  closeDialog() {
    this.setState({ showDialogLogin: false });
  }

  openDialogLogin() {
    this.setState({ showDialogLogin: true });
  }

  render() {
    const { tiffins, showDialogLogin } = this.state;

    return (
      <>
        <Grid mt={10} container spacing={2}>
          {tiffins.map((product) => {
            return (
              <Grid item sm={3} key={product._id}>
                <Paper elevation={24} style={{ width: "270px" }}>
                  <Card variant="contained" sx={{ width: 275, height: 350 }}>
                    <CardActionArea onClick={this.openDialogLogin}>
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
                              width: "35px",
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

                    {/* <CardActions>
                      <Button
                        size="small"
                        variant="contained"
                        style={{ alignContent: "left", fontSize: "11px" }}
                        component={Link}
                        to="/login"
                      >
                        Order
                      </Button>
                    </CardActions> */}
                  </Card>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
        <Dialog open={showDialogLogin} onClose={this.closeDialog}>
          <DialogContent>
            <Login />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeDialog}>close</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}

export default TiffinSection;
