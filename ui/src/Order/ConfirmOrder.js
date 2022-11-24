import React from "react";
import { Fetch } from "../dbFetch.js";

const ConfirmOrder = () => {
  let data = make();
  PlaceOrder(data);

  function make() {
    let data = {
      sellerId: "637728050624a6285d926b07",
      tiffinId: "63764f3f48f95ea21e93e900",
      userId: "63771f9590873ce190fcb945",
    };
    return data;
  }

  async function PlaceOrder(data) {
    const path = "/api/order";
    const response = await Fetch(path, data);
    if (response.success) {
      console.log("Order Placed");
    } else {
      console.log("Order failed", response.message);
    }
  }

  return(
    <>
    <h1></h1>
    </>
  );
};

export default ConfirmOrder;
