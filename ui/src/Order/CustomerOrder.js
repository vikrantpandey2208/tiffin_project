import React from "react";
import { Fetch } from "../dbFetch.js";
import { useState, useEffect } from "react";
import { getUserDetails } from "../Profile/CostomerProfile.js";
import { toast } from "react-toastify";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Paper,
} from "@mui/material";
import CustomerProfileMenu from "../CustomerAfterLogin/CustomerProfileMenu";
import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import { Footer } from "../Component.js/Footer";
import StarIcon from "@mui/icons-material/Star";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export const CustomerOrder = () => {
  let user = getUserDetails();

  const [orderItem, setOrderItem] = useState([]);

  async function GetCustomerOrders() {
    let data;
    if (user == null) {
      toast.info("Session Expired");
      return;
    } else {
      data = {
        userId: user._id,
      };
    }
    const path = "/api/get-customer-orders";
    const response = await Fetch(path, data);
    if (response.success) {
      setOrderItem(response.data);
    } else {
      toast.info(response.message);
    }
  }

  useEffect(() => {
    GetCustomerOrders();
  }, []);

  return (
    <>
      <Grid container>
        {/* navbar */}
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
            <CustomerProfileMenu />
          </Toolbar>
        </AppBar>
      </Grid>
       {/* cart Details */}
      <Grid ml={15} mr={15} mt={5} container spacing={3}>
        {orderItem.map((order) => {
          return order.Tiffin.map((product) => {
            return (
              <Grid item sm={3} key={product._id}>
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
            );
          });
        })}
      </Grid>

      <Footer />
    </>
  );
};
