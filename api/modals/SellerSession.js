const mongoose = require("mongoose");
const SellerSessionSchema = new mongoose.Schema({
  sellerId: {
    type: String,
    // default: "",
  },
  timestamp: {
    type: Date,
    default: Date.now(),
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("SellerSession", SellerSessionSchema);
