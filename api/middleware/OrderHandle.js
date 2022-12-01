const { Order } = require("../modals/OrderSchema");
const { getCustomerOrders, getSellerOrders } = require("../utils/QueryMongoDB");
const Razorpay = require("razorpay");

module.exports = (app) => {
  app.post("/api/order", (req, res, next) => {
    const { body } = req;
    const { data } = body;
    const { sellerId, userId, tiffinId } = data;

    if (!userId) {
      return res.send({
        success: false,
        message: "Error: Session expired",
      });
    }
    if (!tiffinId) {
      return res.send({
        success: false,
        message: "Error: Wrong Information",
      });
    }

    // Save the new order
    const newOrder = new Order();
    newOrder.sellerId = sellerId;
    newOrder.userId = userId;
    newOrder.tiffinId = tiffinId;

    newOrder.save((err, order) => {
      if (err) {
        return res.send({
          success: false,
          message: err,
        });
      }

      return res.send({
        success: true,
        message: "Order Placed",
      });
    });
  }); // end of order saving endpoint

  app.post("/api/get-seller-orders", (req, res, next) => {
    const { body } = req;
    const { data } = body;
    const { sellerId } = data;

    if (!sellerId) {
      return res.send({
        success: false,
        message: "Error: Session expired",
      });
    }

    getSellerOrders(sellerId, function (result, success) {
      if (success) {
        return res.send({
          success: true,
          data: result,
        });
      } else {
        return res.send({
          success: false,
          message: "Error: Internal Server error while searching orders",
        });
      }
    });
  });
  app.post("/api/get-customer-orders", (req, res, next) => {
    const { body } = req;
    const { data } = body;
    const { userId } = data;

    if (!userId) {
      return res.send({
        success: false,
        message: "Error: Session expired",
      });
    }

    getCustomerOrders(userId, function (result, success) {
      if (success) {
        return res.send({
          success: true,
          data: result,
        });
      } else {
        return res.send({
          success: false,
          message: "Error: Internal Server error while searching orders",
        });
      }
    });
  });
  app.post("/api/pay", (req, res, next) => {
    var instance = new Razorpay({
      key_id: "rzp_test_3eMWORUD65IeZa",
      key_secret: "Xmx8035EXbb6pOnpdnOxMGhZ",
    });

    var options = {
      amount: 50000, // amount in the smallest currency unit
      currency: "INR",
      receipt: "order_rcptid_11",
    };
    instance.orders.create(options, function (err, order) {
      console.log(order);
      res.send({ success: true, orderId: order.id });
    });
  });
};
