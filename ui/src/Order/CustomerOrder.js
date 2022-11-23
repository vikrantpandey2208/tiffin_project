import React from "react";
import { Fetch } from "../dbFetch.js";
import { useState, useEffect } from "react";

const CostomerOrder = () => {
  let data = make();

  function make() {
    let data = {
      userId: "63771f9590873ce190fcb945",
    };
    return data;
  }

  const [getOrderItem, setOrderItem] = useState({});

  async function GetCustomerOrders(data) {
    const path = "/api/get-customer-orders";
    const response = await Fetch(path, data);
    if (response.success) {
      console.log("Fetched Customer orders", response.data);
      setOrderItem(response.data);
    } else {
      console.log("Fetching Customer orders failed", response.message);
    }
  }

  useEffect(() => {
    GetCustomerOrders(data);
  }, []);
  console.log(getOrderItem, "real order customer");
  return <div>CostomerOrder</div>;
};

export default CostomerOrder;
