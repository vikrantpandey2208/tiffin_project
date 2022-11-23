import React from "react";
import { Fetch } from "../dbFetch.js";

const CostomerOrder = () => {
  let data = make();
  GetCustomerOrders(data);

  function make() {
    let data = {
      userId: "63771f9590873ce190fcb945",
    };
    return data;
  }

  async function GetCustomerOrders(data) {
    const path = "/api/get-customer-orders";
    const response = await Fetch(path, data);
    if (response.success) {
      console.log("Fetched Customer orders", response.data);
    } else {
      console.log("Fetching Customer orders failed", response.message);
    }
  }
  return <div>CostomerOrder</div>;
};

export default CostomerOrder;
