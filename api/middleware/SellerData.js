const { Point, Tiffin } = require("../modals/SellerTiffin");
const { getSellersTiffin } = require("../utils/QueryMongoDB");

function titleCase(str) {
  str = str.toLowerCase().split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}

module.exports = (app) => {
  app.post("/api/seller-add-tiffin", (req, res, next) => {
    const { body } = req;
    const { data } = body;
    const {
      sellerId,
      brand,
      price,
      dishWithCount,
      detailsOfTiffin,
      additionalDetail,
    } = data;
    const { longitude, latitude } = data;

    if (!sellerId) {
      return res.send({
        success: false,
        message: "Error: Session expired",
      });
    }
    if (!brand) {
      return res.send({
        success: false,
        message: "Error: Service name not defined",
      });
    }
    if (!longitude || !latitude) {
      return res.send({
        success: false,
        message: "Error: Location not defined",
      });
    }
    const brandName = titleCase(brand);

    let tempId = "6374e8790e9772be859efcdc";

    // getSellersTiffin(tempId, function (result) {
    //   console.log("callback", result);
    // });

    // Save the new tiffin
    const newTiffin = new Tiffin();
    newTiffin.sellerId = sellerId;
    newTiffin.brandName = brandName;
    newTiffin.price = data.price;
    newTiffin.dishWithCount = data.dishWithCount;
    newTiffin.detailsOfTiffin = data.detailsOfTiffin;
    newTiffin.additionalDetail = data.additionalDetail;
    newTiffin.photo1 = data.photo1;
    newTiffin.photo2 = data.photo2;
    newTiffin.photo3 = data.photo3;
    newTiffin.photo4 = data.photo4;
    newTiffin.location = {
      name: data.addr,
      type: "Point",
      coordinates: [longitude, latitude],
    };
    newTiffin.save((err, tiffin) => {
      if (err) {
        return res.send({
          success: false,
          message: err,
        });
      }

      return res.send({
        success: true,
        message: "Tiffin saved",
      });
    });
  }); // end of tiffin saving endpoint
};
