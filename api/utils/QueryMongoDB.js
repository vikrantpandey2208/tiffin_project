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

module.exports = { getSellersTiffin };
