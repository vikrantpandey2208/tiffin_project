const { searchTiffin } = require("../databaseUtility/QueryMongoDB");
const { getSellersTiffin } = require("../databaseUtility/QueryMongoDB");

module.exports = (app) => {
  app.post("/api/search-near-tiffin", (req, res) => {
    const { body } = req;
    const { data } = body;
    const { userId } = data;
    const { longitude, latitude } = data;
    if (!userId) {
      return res.send({
        success: false,
        message: "Error: User Session expired",
      });
    }

    if (!longitude || !latitude) {
      return res.send({
        success: false,
        message: "Error: Location not defined",
      });
    }

    // searching less information of tiffin
    searchTiffin(longitude, latitude, function (result, success) {
      if (success) {
        return res.send({
          success: true,
          data: result,
        });
      } else {
        return res.send({
          success: false,
          err: result,
          message: "Internal Server Error",
        });
      }
    });
  });
  app.post("/api/get-seller-tiffin", (req, res) => {
    const { body } = req;
    const { data } = body;
    const { sellerId } = data;
    if (!sellerId) {
      return res.send({
        success: false,
        message: "Error: Session expired",
      });
    }

    getSellersTiffin(sellerId, function (result, success) {
      if (success) {
        return res.send({
          success: true,
          data: result,
        });
      } else {
        return res.send({
          success: false,
          err: result,
          message: "Internal Server Error",
        });
      }
    });
  });
};
