const { Point, Tiffin } = require("../modals/SellerTiffin");
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
          // maxDistance: 5000,
          includeLocs: "dist.location",
          spherical: true,
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

module.exports = { getSellersTiffin, searchTiffin, getCustomerOrders };
