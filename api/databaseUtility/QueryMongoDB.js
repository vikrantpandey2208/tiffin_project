const { Tiffin } = require("../modals/TiffinSchema");
const { Order } = require("../modals/OrderSchema");
function getSellersTiffin(sellerId, callback) {
  Tiffin.find(
    {
      sellerId: sellerId,
    },
    (err, tiffins) => {
      if (err) {
        callback(err);
      } else {
        callback(tiffins);
      }
    },
  );
}
function searchTiffin(longitude, latitude, callback) {
  Tiffin.aggregate(
    [
      {
        $geoNear: {
          near: { type: "Point", coordinates: [longitude, latitude] },
          distanceField: "dist.calculated",
          // maxDistance: 13000,
          includeLocs: "dist.location",
          spherical: true,
        },
      },
      {
        $project: {
          photo1: 1,
          rating: 1,
          brandName: 1,
          category: 1,
          price: 1,
          sellerId: 1,
          dist: 1,
        },
      },
    ],

    (err, tiffins) => {
      if (err) {
        callback(err, false);
      } else {
        callback(tiffins, true);
      }
    },
  );
}

function getCustomerOrders(userId, callback) {
  // select date of order, tiffin details,
  Order.aggregate(
    [
      { $match: { userId: userId } },
      {
        $project: {
          _id: 1,
          b_id: { $toObjectId: "$tiffinId" },
          dateofentry: 1,
        },
      },
      {
        $lookup: {
          from: "tiffins",
          localField: "b_id",
          foreignField: "_id",
          as: "Tiffin",
        },
      },
    ],

    (err, order) => {
      if (err) {
        console.log(err);
        callback(err, false);
      } else {
        callback(order, true);
      }
    },
  );
}
function getSellerOrders(sellerId, callback) {
  // select date of order, tiffin details,
  Order.aggregate(
    [
      { $match: { sellerId: sellerId } },
      {
        $project: {
          _id: 1,
          b_id: { $toObjectId: "$tiffinId" },
          dateofentry: 1,
        },
      },
      {
        $lookup: {
          from: "tiffins",
          localField: "b_id",
          foreignField: "_id",
          as: "Tiffin",
        },
      },
    ],

    (err, order) => {
      if (err) {
        console.log(err);
        callback(err, false);
      } else {
        callback(order, true);
      }
    },
  );
}

module.exports = {
  getSellersTiffin,
  searchTiffin,
  getCustomerOrders,
  getSellerOrders,
};
