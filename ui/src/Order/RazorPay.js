import React from "react";
import useRazorpay from "react-razorpay";
import { useCallback } from "react";
import { Fetch } from "../dbFetch.js";

export default function Payment() {
  const Razorpay = useRazorpay();
  const HandlePayment = async () => {
    const orderid = await getOrderId();
    const options = {
      key: "rzp_test_3eMWORUD65IeZa", // Enter the Key ID generated from the Dashboard
      amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: orderid,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Piyush Garg",
        email: "youremail@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new Razorpay(options);

    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  };

  const getOrderId = async function getOrderId() {
    const path = "/api/pay";
    const response = await Fetch(path);
    if (response.success) {
      console.log("Order id generated", response);
      return response.orderId;
    } else {
      console.log("Payment token not generated", response);
    }
  };
}
