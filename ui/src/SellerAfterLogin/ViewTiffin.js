import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Input,
  Paper,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { GetLoggedSeller } from "../Auth/Logged-Seller";
import { Fetch } from "../dbFetch.js";
import { toast } from "react-toastify";

export const ViewTiffin = () => {
  const [tiffin, setTiffinList] = useState([]);
  const [previous, setPrevious] = React.useState({});

  // getting data from backend
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
    console.log(data);
    const response = await Fetch(path, data);
    if (response.success) {
      setTiffinList(response.data);
      console.log(response.data);
    } else {
      toast.error(response.message, response);
    }
  };

  useEffect(() => {
    getTiffinList();
  }, []);

  return (
    <>
      <Paper style={{ width: "100%", marginTop: "30px", overflowX: "auto" }}>
        <Table style={{ minWidth: 650 }} aria-label="caption table">
          <caption>Details of Orders</caption>
          <TableHead>
            <TableRow>
              <TableCell align="left">Customer Name</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Food Items</TableCell>
              <TableCell align="left">Contact</TableCell>
              <TableCell align="left">Adress</TableCell>
              <TableCell align="left">Payment Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tiffin.map((row) => (
              <TableRow key={row._id}>
                <TableCell>{row.brandName}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.dishWithCount}</TableCell>
                <TableCell>7999744848</TableCell>
                <TableCell>{row.location.name}</TableCell>
                <TableCell>Done</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
};
