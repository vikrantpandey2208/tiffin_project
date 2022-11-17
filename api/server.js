const express = require("express");
// settled
// require("dotenv").config();
const { connectToDb } = require("./db.js");
const cors = require("cors");

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
require("./sign-in.js")(app);
require("./Seller-sign-in.js")(app);
require("./middleware/SellerData")(app);
require("./middleware/QueryServer")(app);

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
