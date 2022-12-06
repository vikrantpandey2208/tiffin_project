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
          <Paper style={{ height: "80vh" }} key={product._id}>
            <Grid
              container
              mt={10}
              ml={5}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={4} pl={15} pt={10}>
                <ImageList>
                  <ImageListItem>
                    <img src={product.photo1} className="images" />
                  </ImageListItem>
                  <ImageListItem>
                    <img src={product.photo2} className="images" />
                  </ImageListItem>
                  <ImageListItem>
                    <img src={product.photo3} className="images" />
                  </ImageListItem>
                  <ImageListItem>
                    <img src={product.photo4} className="images" />
                  </ImageListItem>
                </ImageList>
              </Grid>

              <Grid item xs={8} pl={10} pt={10}>
                <Typography style={{ fontWeight: "bold" }} variant="h4">
                  {product.brandName}
                </Typography>
                <Rating name="simple-controlled" value={product.rating} />
                <Typography>{product.price}</Typography>
                <Typography>{product.category}</Typography>
                <Typography>{product.location.name}</Typography>
                <br />
                <Typography ml={15}>{product.dishWithCount}</Typography>
                <Typography ml={15}>{product.detailsOfTiffin}</Typography>
                <Typography ml={15}>{product.additionalDetail}</Typography>
                <Typography ml={15}>feedback</Typography>
                {product.feedback.map((feedback) => {
                  return (
                    <div key={product._id}>
                      <Typography ml={15}>
                        username: {feedback.userName}
                      </Typography>
                      <Typography ml={15}>
                        comment {feedback.comment}
                      </Typography>
                      <Typography ml={15}>
                        comment Date {feedback.date}
                      </Typography>
                    </div>
                  );
                })}
              </Grid>
            </Grid>
          </Paper>
        );
      })}
    </>
  );
}
