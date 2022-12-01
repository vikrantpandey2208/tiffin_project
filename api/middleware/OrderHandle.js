const { Order } = require("../modals/OrderSchema");
const { getCustomerOrders, getSellerOrders } = require("../utils/QueryMongoDB");
const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id:
    "AYDnQvaY1s-neTkOtjo9NbROo2eHRK_-1S3AF6JKGSBxQXAC17gH0SSa91q_31UJ75mDKGMiT5iWuRfu",
  client_secret:
    "EBYWkYd0ADII7a6WGvFnQKIgA5kTsqVBbwMUBttbrhDCRd5k_xoc8ivQk7aHSqMn6ZSqEFs0tmHrtO2b",
});

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

  app.post("/api/pay", (req, res) => {
    const create_payment_json = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
      },
      redirect_urls: {
        return_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                name: "Red Sox Hat",
                sku: "001",
                price: "25.00",
                currency: "USD",
                quantity: 1,
              },
            ],
          },
          amount: {
            currency: "USD",
            total: "25.00",
          },
          description: "Hat for the best team ever",
        },
      ],
    };
    app.get("/success", (req, res) => {
      const payerId = req.query.PayerID;
      const paymentId = req.query.paymentId;

      const execute_payment_json = {
        payer_id: payerId,
        transactions: [
          {
            amount: {
              currency: "USD",
              total: "25.00",
            },
          },
        ],
      };

      paypal.payment.execute(
        paymentId,
        execute_payment_json,
        function (error, payment) {
          if (error) {
            console.log(error.response);
            throw error;
          } else {
            console.log(JSON.stringify(payment));
            res.send("Success");
          }
        },
      );
    });
    paypal.payment.create(create_payment_json, function (error, payment) {
      if (error) {
        throw error;
      } else {
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === "approval_url") {
            // res.redirect(payment.links[i].href);
            res.json({ forwardLink: payment.links[i].href });
          }
        }
      }
    });
  });
  app.get("/cancel", (req, res) => res.send("Cancelled"));
};
