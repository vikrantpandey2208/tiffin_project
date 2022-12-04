const express = require("express");
const { connectToDb } = require("../databaseUtility/MongoConnection.js");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
require("../middleware/UserSignLoginOut")(app);
require("../middleware/SellerSignLoginOut")(app);
require("../middleware/SellerAddTiffin")(app);
require("../middleware/TiffinSearch")(app);
require("../middleware/OrderSaveFetch")(app);

const port = process.env.API_SERVER_PORT || 8000;

(async function start() {
  try {
    await connectToDb();
    app.listen(port, () => {
      console.log(`API server started on port ${port}`);
    });
  } catch (err) {
    console.log("ERROR:", err);
  }
})();
