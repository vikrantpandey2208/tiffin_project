const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  sellerId: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
    require: true,
  },
  tiffinId: {
    type: String,
    require: true,
  },
  paymentId: {
    type: String,
    default: null,
  },
  dateofentry: {
    type: Date,
    default: Date.now(),
  },
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = { Order };
