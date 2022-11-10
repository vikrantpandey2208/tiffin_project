const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TiffinSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});
module.exports = Item = mongoose.model("tiffin", TiffinSchema);
