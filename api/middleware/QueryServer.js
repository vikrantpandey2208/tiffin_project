const { Point, Tiffin } = require("../modals/SellerTiffin");
const { searchTiffin } = require("../utils/QueryMongoDB");

module.exports = (app) => {
  app.post("/api/search-near-tiffin", (req, res, next) => {
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

    searchTiffin(longitude, latitude, function (result, success) {
      console.log("callback of get tiffin", result);
      if (success) {
        return res.send({
          success: true,
          data: result,
        });
      } else {
        return res.send({
          success: false,
          message: "Error: Internal Server error while searching tifffin",
        });
      }
    });
  });
};
