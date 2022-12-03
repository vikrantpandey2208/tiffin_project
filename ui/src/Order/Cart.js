import React, { useState } from "react";
import useRazorpay from "react-razorpay";
import { Fetch } from "../dbFetch.js";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Paper,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useLocation, useNavigate } from "react-router";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import UserProfileMenu from "../CostomerAfterLogin/UserProfileMenu";
import { Footer } from "../Component.js/Footer";

const createOrder = async function createOrder(params) {
  const path = "/api/pay";
  const response = await Fetch(path, params);
  if (response.success) {
    // console.log("Order id generated", response);
    return response.orderId;
  } else {
    // console.log("Payment token not generated", response);
    return null;
  }
};

export default function Cart() {
  const Razorpay = useRazorpay();
  let props = useLocation().state;

  const navigate = useNavigate();
  const handleAbort = () => {
    navigate("/logged");
  };

  const handlePayment = async () => {
    const orderParams = {
      amount: props.price,
      receipt: props.brandName,
    };

    const order = await createOrder(orderParams);
    const options = {
      key: "rzp_test_3eMWORUD65IeZa",
      amount: props.price,
      currency: "INR",
      name: props.brandName,
      description: props.brandName + "Payment",
      image:
        "https://res.cloudinary.com/dqdovhtp1/image/upload/v1670077631/JustDabba/justdabba_uvph5i.png",
      order_id: order,

      handler: function (response) {
        navigate("/my-order");
        console.log(response);
      },
      prefill: {
        name: "Your Name",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "JustDabba Serving Home Food",
      },
      theme: {
        color: "#e73e84",
        hide_topbar: true,
      },
      modal: { backdropclose: true },
      callback_url: "/logged",
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      // show toast
      console.log(response.error.description);
    });

    rzp1.open();
  };

  let product = props;
  return (
    // view detail of tiffin here
    <>
      <Grid container>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography
              variant="h4"
              style={{
                flexGrow: 1,
                textDecoration: "none",
                color: "inherit",
                fontSize: "20px",
              }}
              component={Link}
              to="/"
            >
              Just Dabba
            </Typography>
            <Button variant="h6" component={Link}>
              <UserProfileMenu />
            </Button>
          </Toolbar>
        </AppBar>
      </Grid>

      <Grid ml={15} mr={15} mt={5} container columns={1} rowSpacing={1}>
        <Grid item>
          <Paper elevation={24} style={{ width: "270px" }}>
            <Card sx={{ width: 275, height: 350 }} variant="contained">
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
                    <Typography style={{ color: "white", fontSize: "15px" }}>
                      {product.rating}{" "}
                      <StarIcon
                        size="small"
                        style={{ color: "white", fontSize: "13px" }}
                      />
                    </Typography>
                  </div>
                </Grid>
                <Grid container>
                  <Typography variant="subtitle1" style={{ flexGrow: 1 }}>
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
            </Card>
          </Paper>
        </Grid>
      </Grid>

      <Grid container ml={15} mr={15} mt={2} columns={2} columnSpacing={5}>
        <Grid item md={1} xs={6}>
          <Button color="success" onClick={handlePayment} variant="contained">
            Payment
          </Button>
          {"  "}
          <Button color="error" onClick={handleAbort} variant="contained">
            Abort
          </Button>
        </Grid>
      </Grid>

      <Footer />
    </>
  );
}
