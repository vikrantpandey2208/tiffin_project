const { OrderSession } = require("../modals/Order");

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
    const newOrder = new OrderSession();
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
};
