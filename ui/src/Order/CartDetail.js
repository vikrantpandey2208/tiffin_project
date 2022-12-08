import {
  Grid,
  ImageList,
  ImageListItem,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Fetch } from "../dbFetch.js";
import { toast } from "react-toastify";
import { GetLoggedSeller } from "../Auth/Logged-Seller";
import { useEffect } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function CartDetail() {
  const [tiffin, setTiffinList] = useState([]);

  const getTiffinList = async function getTiffinList() {
    const path = "/api/get-seller-tiffin";

    // Get name of user to show
    let user = GetLoggedSeller().token;

    if (user != null) {
      user = user._id;
    } else {
      toast.info("Session Expired");
      return;
    }

    let data = {
      sellerId: user,
    };

    const response = await Fetch(path, data);
    if (response.success) {
      setTiffinList(response.data);
    } else {
      toast.error(response.message, response);
    }
  };

  useEffect(() => {
    getTiffinList();
  }, []);

  return (
    <>
      {tiffin.map((product) => {
        return (
          <Paper style={{ height: "90vh", width: "1800px" }} key={product._id}>
            <Grid
              container
              mt={5}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={4} pt={1} mr={90}>
                <ImageList
                  sx={{ width: 800, height: 300 }}
                  style={{ overflow: "hidden" }}
                  variant="quilted"
                  cols={4}
                >
                  <ImageListItem>
                    <img src={product.photo1} alt="img" />
                  </ImageListItem>
                  <ImageListItem>
                    <img src={product.photo2} alt="img" />
                  </ImageListItem>
                  <ImageListItem>
                    <img src={product.photo3} alt="img" />
                  </ImageListItem>
                  <ImageListItem>
                    <img src={product.photo4} alt="img" />
                  </ImageListItem>
                </ImageList>
                <br />
                <Typography style={{ fontWeight: "bold" }} variant="h4">
                  {product.brandName}
                </Typography>
                <Rating name="simple-controlled" value={product.rating} />
                <Typography>
                  {product.price}
                  <CurrencyRupeeIcon
                    style={{
                      fontSize: "14px",
                      PaddingTop: "12px",
                      marginLeft: "1px",
                    }}
                  />
                </Typography>
                <Typography>{product.category}</Typography>
                <Typography>{product.location.name}</Typography>
                <Typography>{product.dishWithCount}</Typography>
                <Typography>{product.detailsOfTiffin}</Typography>
                <Typography>{product.additionalDetail}</Typography>
              </Grid>

              {/* <Grid item xs={8} pl={10} pt={10}>
                {product.feedback.map((feedback) => {
                  return (
                    <div key={product._id}>
                      <Typography >
                        username: {feedback.userName}
                      </Typography>
                      <Typography >
                        comment {feedback.comment}
                      </Typography>
                      <Typography >
                        comment Date {feedback.date}
                      </Typography>
                    </div>
                  );
                })}
              </Grid> */}
            </Grid>
          </Paper>
        );
      })}
    </>
  );
}
