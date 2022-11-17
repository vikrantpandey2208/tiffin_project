const { Point, Tiffin } = require("../modals/SellerTiffin");
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
          maxDistance: 5000,
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

module.exports = { getSellersTiffin, searchTiffin };
