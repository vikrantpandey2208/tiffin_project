const express = require("express");
// settled
// require("dotenv").config();
const { connectToDb } = require("./db.js");
const { installHandler } = require("./api_handler.js");
const { addTiffin } = require("./addTiffin.js");

const app = express();
const port = process.env.API_SERVER_PORT || 8000;

(async function start() {
  try {
    await installHandler(app);
    await connectToDb();
    app.listen(port, () => {
      console.log(`API server started on port ${port}`);
    });
  } catch (err) {
    console.log("ERROR:", err);
  }
})();
