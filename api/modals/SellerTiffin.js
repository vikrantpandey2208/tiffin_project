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
  sellerId: {
    type: String,
    require: true,
  },
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
  },
  detailsOfTiffin: {
    type: String,
    require: true,
  },
  additionalDetail: {
    type: String,
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
  },
  photo3: {
    type: String,
  },
  photo4: {
    type: String,
  },
  location: {
    name: String,
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
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

const Point = mongoose.model("point", pointSchema);
const Tiffin = mongoose.model("Tiffin", SellerTiffinSchema);
module.exports = { Point, Tiffin };
