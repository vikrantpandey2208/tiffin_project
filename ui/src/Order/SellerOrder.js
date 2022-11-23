import React from "react";
import { useState, useEffect } from "react";
import { Fetch } from "../dbFetch.js";

const SellerOrder = () => {
  let data = make();

  function make() {
    let data = {
      sellerId: "637728050624a6285d926b07",
    };
    return data;
  }

  const [getOrderItem, setOrderItem] = useState({});

  async function GetSellerOrders() {
    const path = "/api/get-seller-orders";
    const response = await Fetch(path, data);
    if (response.success) {
      // console.log("Fetched Seller orders", response.data);
      setOrderItem(response.data);
    } else {
      console.log("Fetching Seller orders failed", response.message);
    }
  }

  useEffect(() => {
    GetSellerOrders(data);
  }, []);

  console.log(getOrderItem, "real order");
  return <div>SellerOrder</div>;
};

export default SellerOrder;
