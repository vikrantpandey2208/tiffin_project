const mongoose = require("mongoose");
const config = require("config");
const dbURI = config.get("mongoURI");

async function connectToDb() {
  mongoose.connect(dbURI, (err) => {
    console.log(err ? err : "Connected to Atlas");
  });
}

module.exports = { connectToDb };
