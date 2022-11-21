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
});

module.exports = mongoose.model("OrderSession", OrderSchema);
