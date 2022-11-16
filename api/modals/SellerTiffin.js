const mongoose = require("mongoose");

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const SellerTiffinSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  dishWithCount: {
    type: String,
    unique: true,
  },
  detailsOfTiffin: {
    type: String,
    require: true,
  },
  additionalDetail: {
    type: Number,
  },
  dateofentry: {
    type: Date,
    default: Date.now(),
  },
  photo1: {
    type: String,
    require: true,
  },
  photo2: {
    type: String,
    require: true,
  },
  photo3: {
    type: String,
    require: true,
  },
  photo4: {
    type: String,
    require: true,
  },
  location: {
    name: String,
    location: {
      type: pointSchema,
      required: true,
    },
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  feedback: [{ body: String, date: Date }],
});

module.exports = mongoose.model("SellerTiffin", SellerTiffinSchema);
